import { CompletionItemKind, MarkupKind } from "vscode-languageserver"

const encoding = [
    {
        label: 'OT1',
        kind: CompletionItemKind.Variable,
        detail: 'OT1 details',
        documentation: {
            kind: MarkupKind.Markdown,
            value: [
                "(encoding)",
                "[Reference](https://www.latex-project.org/help/documentation/fntguide.pdf#subsection.2.1)."
            ].join("\n"),
        },
    },
    {
        label: 'T1',
        kind: CompletionItemKind.Variable,
        detail: 'T1 details',
        documentation: {
            kind: MarkupKind.Markdown,
            value: [
                "(encoding)",
                "[Reference](https://www.latex-project.org/help/documentation/fntguide.pdf#subsection.2.1)."
            ].join("\n"),
        },
    },
    {
        label: 'OML',
        kind: CompletionItemKind.Variable,
        detail: 'OML details',
        documentation: {
            kind: MarkupKind.Markdown,
            value: [
                "(encoding)",
                "[Reference](https://www.latex-project.org/help/documentation/fntguide.pdf#subsection.2.1)."
            ].join("\n"),
        },
    },
    {
        label: 'OMS',
        kind: CompletionItemKind.Variable,
        detail: 'OMS details',
        documentation: {
            kind: MarkupKind.Markdown,
            value: [
                "(encoding)",
                "[Reference](https://www.latex-project.org/help/documentation/fntguide.pdf#subsection.2.1)."
            ].join("\n"),
        },
    },
    {
        label: 'OMX',
        kind: CompletionItemKind.Variable,
        detail: 'OMX details',
        documentation: {
            kind: MarkupKind.Markdown,
            value: [
                "(encoding)",
                "[Reference](https://www.latex-project.org/help/documentation/fntguide.pdf#subsection.2.1)."
            ].join("\n"),
        },
    },
    {
        label: 'U',
        kind: CompletionItemKind.Variable,
        detail: 'U details',
        documentation: {
            kind: MarkupKind.Markdown,
            value: [
                "(encoding)",
                "[Reference](https://www.latex-project.org/help/documentation/fntguide.pdf#subsection.2.1)."
            ].join("\n"),
        },
    }
]

export default encoding