import * as fsImport from 'fs';
const fs = fsImport.promises;

import {
	createConnection,
	TextDocuments,
	Diagnostic,
	ProposedFeatures,
	InitializeParams,
	DidChangeConfigurationNotification,
	InitializeResult,
	DocumentDiagnosticReportKind,
	type DocumentDiagnosticReport,
	TextDocumentSyncKind,
	DiagnosticSeverity
} from 'vscode-languageserver/node';

import {
	TextDocument,
} from 'vscode-languageserver-textdocument'

import { handlerCompletion, handlerCompletionResolve } from './completion';
import { handlerDocumentSymbol } from './documentSymbol';
import { handlerCodeLens, handlerCodeLensResolve } from './codeLens';
import { handlerHover } from './hover';

const connection = createConnection(ProposedFeatures.all)

const documents: TextDocuments<TextDocument> = new TextDocuments(TextDocument)

let hasConfigurationCapability = false
let hasWorkspaceFolderCapability = false
let hasDiagnosticRelatedInformationCapability = false

connection.onInitialize((params: InitializeParams) => {
	const capabilities = params.capabilities

	hasConfigurationCapability = !!(
		capabilities.workspace && !!capabilities.workspace.configuration
	)
	hasWorkspaceFolderCapability = !!(
		capabilities.workspace && !!capabilities.workspace.workspaceFolders
	)
	hasDiagnosticRelatedInformationCapability = !!(
		capabilities.textDocument &&
		capabilities.textDocument.publishDiagnostics &&
		capabilities.textDocument.publishDiagnostics.relatedInformation
	)

	const result: InitializeResult = {
		capabilities: {
			textDocumentSync: TextDocumentSyncKind.Incremental,
			completionProvider: {
				resolveProvider: true,
				triggerCharacters: ['\\']
			},
			signatureHelpProvider: {
			},
			hoverProvider: true,
			documentSymbolProvider: true,
			codeLensProvider: {
				resolveProvider: true
			},
			diagnosticProvider: {
				identifier: 'latex',
				interFileDependencies: true,
				workspaceDiagnostics: false
			},
		}
	}
	if (hasWorkspaceFolderCapability) {
		result.capabilities.workspace = {
			workspaceFolders: {
				supported: true
			}
		}
	}
	return result
})

connection.onInitialized(() => {
	if (hasConfigurationCapability) {
		// Register for all configuration changes.
		connection.client.register(DidChangeConfigurationNotification.type, undefined)
	}
	if (hasWorkspaceFolderCapability) {
		connection.workspace.onDidChangeWorkspaceFolders(_event => {
			connection.console.log('Workspace folder change event received.')
		})
	}
})

// The latex settings
interface LatexSettings {
	maxNumberOfProblems: number,
	completion: { frequentWords: boolean, commands: boolean },
	symbol: { outline: boolean },
	codelens: boolean,
	hover: boolean
}

// The global settings, used when the `workspace/configuration` request is not supported by the client.
// Please note that this is not the case when using this server with the client provided in this example
// but could happen with other clients.
const defaultSettings: LatexSettings = { 
	maxNumberOfProblems: 1000,
	completion: { frequentWords: true, commands: true },
	symbol: { outline: true },
	codelens: true,
	hover: true
}

let globalSettings: LatexSettings = defaultSettings

// Cache the settings of all open documents
const documentSettings: Map<string, Thenable<LatexSettings>> = new Map()

connection.onDidChangeConfiguration(change => {
	if (hasConfigurationCapability) {
		// Reset all cached document settings
		documentSettings.clear()
	} else {
		globalSettings = <LatexSettings>(
			(change.settings.latex || defaultSettings)
		)
	}
	// Refresh the diagnostics since the `maxNumberOfProblems` could have changed.
	// We could optimize things here and re-fetch the setting first can compare it
	// to the existing setting, but this is out of scope for this example.
	connection.languages.diagnostics.refresh()
})

function getDocumentSettings(resource: string): Thenable<LatexSettings> {
	if (!hasConfigurationCapability) {
		return Promise.resolve(globalSettings)
	}
	let result = documentSettings.get(resource)
	if (!result) {
		result = connection.workspace.getConfiguration({
			scopeUri: resource,
			section: 'latex'
		})
		documentSettings.set(resource, result)
	}
	return result
}

documents.onDidClose(e => {
	documentSettings.delete(e.document.uri)
})

async function computeDiagnostics(textDocument: TextDocument): Promise<Diagnostic[]> {
	const settings = await getDocumentSettings(textDocument.uri)
	const content = textDocument.getText()

	const pattern = /(\\([\w]+)(?:\*)?(\[\]|\{\})+)/g

	const diagnostics: Diagnostic[] = []
	const lines: string[] | null = content.match(/^.*(\n|\r\n|\r|$)/gm)
	if (!lines) return diagnostics
	
	let match: RegExpExecArray | null = null
	let problems = 0
	while ((match = pattern.exec(content)) !== null && problems < settings.maxNumberOfProblems) {
		problems++

		const diagnostic: Diagnostic = {
			severity: DiagnosticSeverity.Warning,
			range: {
				start: textDocument.positionAt(match.index),
				end: textDocument.positionAt(match.index + match[0].length)
			},
			message: `${match[0]} cannot be empty.`,
			source: 'LaTeX'
		}
		if (hasDiagnosticRelatedInformationCapability) {
			diagnostic.relatedInformation = [
				{
					location: {
						uri: textDocument.uri,
						range: Object.assign({}, diagnostic.range)
					},
					message: 'Fill in the content of the parameters'
				}
			]
		}
		diagnostics.push(diagnostic)
	}

	return diagnostics
}

connection.languages.diagnostics.on(async (params) => {
	const document = documents.get(params.textDocument.uri)
	if (document !== undefined) {
		return {
			kind: DocumentDiagnosticReportKind.Full,
			items: await computeDiagnostics(document)
		} satisfies DocumentDiagnosticReport
	} else {
		return {
			kind: DocumentDiagnosticReportKind.Full,
			items: []
		} satisfies DocumentDiagnosticReport
	}
})

documents.onDidChangeContent(change => {
	computeDiagnostics(change.document)
})

connection.onDidChangeWatchedFiles(_change => {
	connection.console.log('We received a file change event')
})

// Completion Item Provider
connection.onCompletion(async params => {
	const settings = await getDocumentSettings(params.textDocument.uri)
	return handlerCompletion(documents, params, settings.completion)
})
connection.onCompletionResolve(handlerCompletionResolve)

// Document Symbol Provider
connection.onDocumentSymbol(async params => {
	const settings = await getDocumentSettings(params.textDocument.uri)
	return handlerDocumentSymbol(documents, params, settings.symbol)
})

// Code Lens Provider
connection.onCodeLens(async params => {
	const settings = await getDocumentSettings(params.textDocument.uri)
	return handlerCodeLens(documents, params, settings.codelens)
})
connection.onCodeLensResolve(handlerCodeLensResolve)

// Hover Provider
connection.onHover(async params => {
	const settings = await getDocumentSettings(params.textDocument.uri)
	return handlerHover(documents, params, settings.hover)
})

documents.listen(connection)
connection.listen()