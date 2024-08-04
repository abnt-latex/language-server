import { CompletionItemKind, MarkupKind } from "vscode-languageserver"

const graphicx_name = [
    {
        label: 'graphicx',
        kind: CompletionItemKind.Variable,
        detail: 'graphicx details',
        documentation: {
            kind: MarkupKind.Markdown,
            value: [
                "(graphicx)",
                "```latex",
                "\\usepackage {graphicx}",
                "```",
                "[Reference](https://ctan.org/pkg/graphicx)."
            ].join("\n"),
        },
    }
]

export default graphicx_name