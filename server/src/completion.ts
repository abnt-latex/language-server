import { CompletionItem, CompletionItemKind, CompletionParams, TextDocuments } from "vscode-languageserver"
import { getCommand } from "./common"
import commands from "./data/commands"
import { TextDocument } from "vscode-languageserver-textdocument"

const handlerCompletion = (documents: TextDocuments<TextDocument>, params: CompletionParams, config = { frequentWords: true, commands: true }): CompletionItem[] => {
    let result: CompletionItem[] = []

    try {
        const uri = params.textDocument.uri
        const position = params.position

        const document = documents.get(uri)
        if (!document) throw new Error('TextDocument undefined')

        if (config.commands) {
            const response = getCommand(document, position.line, position.character)
        
            if (response && response.word) {
                // check if command really exist
                const command = commands.filter(command => response.word.toLowerCase() === command.label)[0]

                if (command && command.params) {
                    const param = command.params[response.bracketPosition]

                    return param
                }
            }

            result.push(...commands)
        }
        
        if (config.frequentWords) {
            const regex = new RegExp('\\\\[A-Za-z]+|(?:^|[^A-Za-zÀ-ú])[A-Za-zÀ-ú]{1,3}(?![A-Za-zÀ-ú])|[^A-Za-zÀ-ú]', 'g')
            let words = document.getText().replace(regex, ' ')
                .split(new RegExp('\\s+', 'g'))
                .map(word => word.toLocaleLowerCase())
                .filter(item => item != '')
            words = words
                .filter((item, index) => words.indexOf(item) === index)
            const responseWords: CompletionItem[] = words.map(word => ({
                    label: word,
                    kind: CompletionItemKind.Text
                }))

            result.push(...responseWords)
        }

        return result
    } catch (error) {
        console.error('LaTeX Completion Error:', error)
        return result
    }
}

const handlerCompletionResolve = (item: CompletionItem): CompletionItem => {
    return item
}

export { handlerCompletion, handlerCompletionResolve }