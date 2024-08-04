import { CompletionItemKind, MarkupKind } from "vscode-languageserver"

const shape = [
    {
        label: 'n',
        kind: CompletionItemKind.Variable,
        detail: 'n details',
        documentation: {
            kind: MarkupKind.Markdown,
            value: [
                "(shape)",
                "Normal (that is 'upright' or 'roman'",
                "[Reference](https://www.latex-project.org/help/documentation/fntguide.pdf#subsection.2.1)."
            ].join("\n"),
        },
    },
    {
        label: 'it',
        kind: CompletionItemKind.Variable,
        detail: 'it details',
        documentation: {
            kind: MarkupKind.Markdown,
            value: [
                "(shape)",
                "Italic",
                "[Reference](https://www.latex-project.org/help/documentation/fntguide.pdf#subsection.2.1)."
            ].join("\n"),
        },
    },
    {
        label: 'sl',
        kind: CompletionItemKind.Variable,
        detail: 'sl details',
        documentation: {
            kind: MarkupKind.Markdown,
            value: [
                "(shape)",
                "Slanted (or 'oblique')",
                "[Reference](https://www.latex-project.org/help/documentation/fntguide.pdf#subsection.2.1)."
            ].join("\n"),
        },
    },
    {
        label: 'sc',
        kind: CompletionItemKind.Variable,
        detail: 'sc details',
        documentation: {
            kind: MarkupKind.Markdown,
            value: [
                "(shape)",
                "Caps and small caps",
                "[Reference](https://www.latex-project.org/help/documentation/fntguide.pdf#subsection.2.1)."
            ].join("\n"),
        },
    },
    {
        label: 'scit',
        kind: CompletionItemKind.Variable,
        detail: 'scit details',
        documentation: {
            kind: MarkupKind.Markdown,
            value: [
                "(shape)",
                "Caps and small caps italic",
                "[Reference](https://www.latex-project.org/help/documentation/fntguide.pdf#subsection.2.1)."
            ].join("\n"),
        },
    },
    {
        label: 'scsl',
        kind: CompletionItemKind.Variable,
        detail: 'scsl details',
        documentation: {
            kind: MarkupKind.Markdown,
            value: [
                "(shape)",
                "Caps and small caps slanted",
                "[Reference](https://www.latex-project.org/help/documentation/fntguide.pdf#subsection.2.1)."
            ].join("\n"),
        },
    },
    {
        label: 'sw',
        kind: CompletionItemKind.Variable,
        detail: 'sw details',
        documentation: {
            kind: MarkupKind.Markdown,
            value: [
                "(shape)",
                "Swash",
                "[Reference](https://www.latex-project.org/help/documentation/fntguide.pdf#subsection.2.1)."
            ].join("\n"),
        },
    },
    {
        label: 'ssc',
        kind: CompletionItemKind.Variable,
        detail: 'ssc details',
        documentation: {
            kind: MarkupKind.Markdown,
            value: [
                "(shape)",
                "Spaced caps and small caps",
                "[Reference](https://www.latex-project.org/help/documentation/fntguide.pdf#subsection.2.1)."
            ].join("\n"),
        },
    }
]

export default shape