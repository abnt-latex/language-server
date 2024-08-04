import * as path from 'path';
import * as vscode from 'vscode'

import {
	LanguageClient,
	LanguageClientOptions,
	ServerOptions,
	TransportKind
} from 'vscode-languageclient/node'

import { showQuickPick } from './basicInput'
import { SampleKernel } from './controller';
import { SampleContentSerializer } from './serializer';

let client: LanguageClient
let terminal: vscode.Terminal

export function activate(context: vscode.ExtensionContext) {
	const serverModule = context.asAbsolutePath(
		path.join('server', 'out', 'server.js')
	)

	const serverOptions: ServerOptions = {
		run: { module: serverModule, transport: TransportKind.ipc },
		debug: {
			module: serverModule,
			transport: TransportKind.ipc,
		}
	}

	const clientOptions: LanguageClientOptions = {
		// Register the server for plain text documents
		documentSelector: [{ scheme: 'file', language: 'LaTeX' }],
		synchronize: {
			// Notify the server about file changes to '.clientrc files contained in the workspace
			fileEvents: vscode.workspace.createFileSystemWatcher('**/.clientrc')
		}
	}

	try {
		// Create the language client and start the client.
		client = new LanguageClient(
			'languageServerLaTeX',
			'Language Server LaTeX',
			serverOptions,
			clientOptions
		)
	} catch (err) {
		vscode.window.showErrorMessage(`The extension couldn't be started. See the output channel for details.`)
		return
	}

	// Start the client. This will also launch the server
	client.registerProposedFeatures()
	client.start()

	let TERM_ID = 1

	const commandInput = vscode.commands.registerCommand('LaTeX.commandCompile', async () => {
		vscode.window.withProgress({
			location: vscode.ProgressLocation.Notification,
			title: "I am compiling!",
			cancellable: true
		}, (progress, token) => {
			token.onCancellationRequested(() => {
				async () => {
					vscode.window.showInformationMessage('User canceled the long running operation')
				}
			})

			progress.report({ increment: 0 })

			const p = new Promise<void>(async (resolve, reject) => {
				try {
					if (!terminal) {
						const terminals = <vscode.Terminal[]>(<any>vscode.window).terminals
						const existTerminal = terminals.filter(item => item.name === `Ext LaTeX Terminal #${ TERM_ID }`)[0]
			
						if (!existTerminal) terminal = createTerminal(TERM_ID)
						else terminal = existTerminal
					}

					const settings: {
						commandsCompile: any
					} = await vscode.workspace.getConfiguration().get('latex')
					
					progress.report({ increment: 50 })

					const mode = await showQuickPick(Object.keys(settings.commandsCompile))
					if (mode) {
						// terminal.show()
						terminal.sendText(settings.commandsCompile[mode])
					} else {
						throw new Error(`A command has not been defined for ${ mode }`)
					}

					progress.report({ increment: 100 })

					resolve()
				} catch (error) {
					reject(error)
				}
			})

			return p
		})
	})

	const commandfindReference = vscode.commands.registerCommand('LaTeX.findReferences', async (...args: any[]) => {
		if (vscode.window.activeTextEditor) {
			// const document = vscode.window.activeTextEditor.document.getText()
			vscode.commands.executeCommand('editor.actions.findWithArgs', { searchString: args[0] })
		}
	})

	context.subscriptions.push(commandInput)
	context.subscriptions.push(commandfindReference)
	context.subscriptions.push(
		vscode.workspace.registerNotebookSerializer(
			'equation-notebook', new SampleContentSerializer(), { transientOutputs: true }
		),
		new SampleKernel()
	);
}

function createTerminal(id: number) {
	const terminal = vscode.window.createTerminal(`Ext LaTeX Terminal #${ id }`)
	terminal.processId.then((processId) => {
		if (processId) {
			vscode.window.showInformationMessage(`LaTeX Terminal.processId: ${processId}`)
		} else {
			vscode.window.showInformationMessage('Terminal does not have a process ID')
		}
	})
	return terminal
}

function ensureTerminalExists(): boolean {
	if ((<any>vscode.window).terminals.length === 0) {
		vscode.window.showErrorMessage('No active terminals')
		return false
	}
	return true
}

export function deactivate() {
	if (!client) {
		return undefined
	}
	if (terminal) {
		terminal.dispose()
	}
	return client.stop()
}