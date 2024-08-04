import { DocumentSymbol, DocumentSymbolParams, TextDocuments } from "vscode-languageserver"
import { createTree } from "./common"
import { TextDocument } from "vscode-languageserver-textdocument"

const handlerDocumentSymbol = (documents: TextDocuments<TextDocument>, params: DocumentSymbolParams, config = { outline: true }): DocumentSymbol[] => {
    try {
        const uri = params.textDocument.uri

		const document = documents.get(uri)
    	if (!document) throw new Error('TextDocument undefined')

        if (config.outline) {
            const documentSymbolList = createTree(document) as DocumentSymbol[]
		    return documentSymbolList
        } else {
            return []
        }
	} catch (error) {
        console.error('LaTeX Outline Error:', error)
        return []
    }
}

export { handlerDocumentSymbol }