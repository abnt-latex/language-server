import { Hover, HoverParams, TextDocuments } from "vscode-languageserver"
import { TextDocument } from "vscode-languageserver-textdocument"
import { getCommand } from "./common"
import commands from "./data/commands"

const handlerHover = (documents: TextDocuments<TextDocument>, params: HoverParams, config = true): Hover => {
    try {
        const uri = params.textDocument.uri

        const document = documents.get(uri)
        if (!document) throw new Error('TextDocument undefined')

        if (config) {
            const name = getCommand(document, params.position.line, params.position.character)
            if (!name) throw new Error('Command name not exist')

            const command = commands.filter(command => name.word === command.label)[0]
            if (!command) throw new Error('Command name not exist')

            let paramName = name.params[name.bracketPosition]
            if (paramName && command.params && command.params[name.bracketPosition]) {
                let response = command.params[name.bracketPosition].filter(param => param.label === paramName)[0]
                if (!response) throw 'Response undefined'

                return {
                    contents: response.documentation ? response.documentation : ''
                }
            }
                
            return {
                contents: command.documentation ? command.documentation : '',
            }
        } else {
            return { contents: '' }
        }
	} catch {
        return { contents: '' }
    }
}

export { handlerHover }