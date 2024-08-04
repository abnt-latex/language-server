import { CompletionItemKind, MarkupKind } from "vscode-languageserver"

const family = [
    {
        label: 'cmr',
        kind: CompletionItemKind.Variable,
        detail: 'cmr details',
        documentation: {
            kind: MarkupKind.Markdown,
            value: [
                "(family)",
                "Computer Modern Roman",
                "[Reference](https://www.latex-project.org/help/documentation/fntguide.pdf#subsection.2.1)."
            ].join("\n"),
        },
    },
    {
        label: 'cmss',
        kind: CompletionItemKind.Variable,
        detail: 'cmss details',
        documentation: {
            kind: MarkupKind.Markdown,
            value: [
                "(family)",
                "Computer Modern Sans",
                "[Reference](https://www.latex-project.org/help/documentation/fntguide.pdf#subsection.2.1)."
            ].join("\n"),
        },
    },
    {
        label: 'cmtt',
        kind: CompletionItemKind.Variable,
        detail: 'cmtt details',
        documentation: {
            kind: MarkupKind.Markdown,
            value: [
                "(family)",
                "Computer Modern Typewriter",
                "[Reference](https://www.latex-project.org/help/documentation/fntguide.pdf#subsection.2.1)."
            ].join("\n"),
        },
    },
    {
        label: 'cmm',
        kind: CompletionItemKind.Variable,
        detail: 'cmm details',
        documentation: {
            kind: MarkupKind.Markdown,
            value: [
                "(family)",
                "Computer Modern Math Italic",
                "[Reference](https://www.latex-project.org/help/documentation/fntguide.pdf#subsection.2.1)."
            ].join("\n"),
        },
    },
    {
        label: 'cmsy',
        kind: CompletionItemKind.Variable,
        detail: 'cmsy details',
        documentation: {
            kind: MarkupKind.Markdown,
            value: [
                "(family)",
                "Computer Modern Math Symbols",
                "[Reference](https://www.latex-project.org/help/documentation/fntguide.pdf#subsection.2.1)."
            ].join("\n"),
        },
    },
    {
        label: 'cmex',
        kind: CompletionItemKind.Variable,
        detail: 'cmex details',
        documentation: {
            kind: MarkupKind.Markdown,
            value: [
                "(family)",
                "Computer Modern Math Extensions",
                "[Reference](https://www.latex-project.org/help/documentation/fntguide.pdf#subsection.2.1)."
            ].join("\n"),
        },
    },
    {
        label: 'ptm',
        kind: CompletionItemKind.Variable,
        detail: 'ptm details',
        documentation: {
            kind: MarkupKind.Markdown,
            value: [
                "(family)",
                "Adobe Times",
                "[Reference](https://www.latex-project.org/help/documentation/fntguide.pdf#subsection.2.1)."
            ].join("\n"),
        },
    },
    {
        label: 'phv',
        kind: CompletionItemKind.Variable,
        detail: 'phv details',
        documentation: {
            kind: MarkupKind.Markdown,
            value: [
                "(family)",
                "Adobe Helvetica",
                "[Reference](https://www.latex-project.org/help/documentation/fntguide.pdf#subsection.2.1)."
            ].join("\n"),
        },
    },
    {
        label: 'pcr',
        kind: CompletionItemKind.Variable,
        detail: 'pcr details',
        documentation: {
            kind: MarkupKind.Markdown,
            value: [
                "(family)",
                "Adobe Courier",
                "[Reference](https://www.latex-project.org/help/documentation/fntguide.pdf#subsection.2.1)."
            ].join("\n"),
        },
    }
]

export default family