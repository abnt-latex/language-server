import { CompletionItemKind, InsertTextFormat, MarkupKind } from "vscode-languageserver"

type TypeCommands = Array<{
    label: string,
    kind: CompletionItemKind,
    detail?: string,
    insertText?: string,
    insertTextFormat?: InsertTextFormat,
    command?: {
        title: string,
        command: string
    },
    documentation?: {
        kind: MarkupKind,
        value: string
    },
    params?: Array<Array<{
        label: string,
        kind: CompletionItemKind,
        detail?: string,
        documentation?: {
            kind: MarkupKind,
            value: string
        }
    }>>
}>

export { TypeCommands }