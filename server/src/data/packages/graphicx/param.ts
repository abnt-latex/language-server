import { CompletionItemKind, MarkupKind } from "vscode-languageserver"

const graphicx_param = [
    {
        label: 'rgb',
        kind: CompletionItemKind.Variable,
        detail: 'rgb details',
        documentation: {
            kind: MarkupKind.Markdown,
            value: [
                "(graphicx)",
                "```latex",
                "\\color[rgb]{1,0.2,0.3}",
                "```",
                "[Reference](https://linorg.usp.br/CTAN/macros/latex/required/graphics/grfguide.pdf)."
            ].join("\n"),
        },
    },
    {
        label: 'cmyk',
        kind: CompletionItemKind.Variable,
        detail: 'cmyk details',
        documentation: {
            kind: MarkupKind.Markdown,
            value: [
                "(graphicx)",
                "```latex",
                "\\color[cmyk]{1,0.2,0.3,1}",
                "```",
                "[Reference](https://linorg.usp.br/CTAN/macros/latex/required/graphics/grfguide.pdf)."
            ].join("\n"),
        },
    },
    {
        label: 'gray',
        kind: CompletionItemKind.Variable,
        detail: 'gray details',
        documentation: {
            kind: MarkupKind.Markdown,
            value: [
                "(graphicx)",
                "```latex",
                "\\color[gray]{0.2}",
                "```",
                "[Reference](https://linorg.usp.br/CTAN/macros/latex/required/graphics/grfguide.pdf)."
            ].join("\n"),
        },
    },
    {
        label: 'named',
        kind: CompletionItemKind.Variable,
        detail: 'named details',
        documentation: {
            kind: MarkupKind.Markdown,
            value: [
                "(graphicx)",
                "```latex",
                "\\color[named]{JungleGree}",
                "```",
                "[Reference](https://linorg.usp.br/CTAN/macros/latex/required/graphics/grfguide.pdf)."
            ].join("\n"),
        },
    }
]

export default graphicx_param