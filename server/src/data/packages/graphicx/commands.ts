import { CompletionItemKind, MarkupKind } from "vscode-languageserver"
import { TypeCommands } from "../../TypeCommands"
import graphicx_param from "./param"

const graphicx_commands: TypeCommands = [
    {
        label: '\\color{}',
        kind: CompletionItemKind.Function,
        detail: 'color details',
        documentation: {
            kind: MarkupKind.Markdown,
            value: [
                "(graphicx)",
                "```latex",
                "\\color {⟨name⟩}",
                "```",
                "[Reference](https://linorg.usp.br/CTAN/macros/latex/required/graphics/grfguide.pdf)."
            ]
                .join("\n"),
        },
        params: [ graphicx_param ]
    },
    {
        label: '\\textcolor{}',
        kind: CompletionItemKind.Function,
        detail: 'textcolor details',
        documentation: {
            kind: MarkupKind.Markdown,
            value: [
                "(graphicx)",
                "```latex",
                "\\textcolor {⟨name⟩} {⟨text⟩}",
                "```",
                "[Reference](https://linorg.usp.br/CTAN/macros/latex/required/graphics/grfguide.pdf)."
            ]
                .join("\n"),
        },
        params: [ graphicx_param ]
    },
    {
        label: '\\mathcolor{}',
        kind: CompletionItemKind.Function,
        detail: 'mathcolor details',
        documentation: {
            kind: MarkupKind.Markdown,
            value: [
                "(graphicx)",
                "```latex",
                "\\mathcolor {⟨name⟩} {⟨math⟩}",
                "```",
                "[Reference](https://linorg.usp.br/CTAN/macros/latex/required/graphics/grfguide.pdf)."
            ]
                .join("\n"),
        },
        params: [ graphicx_param ]
    },
    {
        label: '\\mathcolor{}',
        kind: CompletionItemKind.Function,
        detail: 'mathcolor details',
        documentation: {
            kind: MarkupKind.Markdown,
            value: [
                "(graphicx)",
                "```latex",
                "\\mathcolor {⟨name⟩} {⟨math⟩}",
                "```",
                "[Reference](https://linorg.usp.br/CTAN/macros/latex/required/graphics/grfguide.pdf)."
            ]
                .join("\n"),
        },
        params: [ graphicx_param ]
    }
]

export default graphicx_commands