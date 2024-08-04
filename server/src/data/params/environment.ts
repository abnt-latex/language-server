import { CompletionItemKind, MarkupKind } from "vscode-languageserver"

const environment = [
    {
        label: 'tabular',
        kind: CompletionItemKind.Variable,
    },
    {
        label: 'document',
        kind: CompletionItemKind.Variable,
    },
    {
        label: 'filecontents',
        kind: CompletionItemKind.Variable,
    },
    {
        label: 'minipage',
        kind: CompletionItemKind.Variable,
    },
    {
        label: 'lrbox',
        kind: CompletionItemKind.Variable,
    },
    {
        label: 'picture',
        kind: CompletionItemKind.Variable,
    },
    {
        label: 'equation',
        kind: CompletionItemKind.Variable,
    },
    {
        label: 'quote',
        kind: CompletionItemKind.Variable,
    },
    {
        label: 'color',
        kind: CompletionItemKind.Variable,
    },
    {
        label: 'list',
        kind: CompletionItemKind.Variable,
    },
    {
        label: 'theorem',
        kind: CompletionItemKind.Variable,
    }
]

export default environment