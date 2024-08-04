import { CompletionItemKind, MarkupKind } from "vscode-languageserver"

const series = [
    {
        label: 'ul',
        kind: CompletionItemKind.Variable,
        detail: 'ul details',
        documentation: {
            kind: MarkupKind.Markdown,
            value: [
                "(series)",
                "Ultra Light",
                "[Reference](https://www.latex-project.org/help/documentation/fntguide.pdf#subsection.2.1)."
            ].join("\n"),
        },
    },
    {
        label: 'el',
        kind: CompletionItemKind.Variable,
        detail: 'el details',
        documentation: {
            kind: MarkupKind.Markdown,
            value: [
                "(series)",
                "Extra Light",
                "[Reference](https://www.latex-project.org/help/documentation/fntguide.pdf#subsection.2.1)."
            ].join("\n"),
        },
    },
    {
        label: 'l',
        kind: CompletionItemKind.Variable,
        detail: 'l details',
        documentation: {
            kind: MarkupKind.Markdown,
            value: [
                "(series)",
                "Light",
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
                "(series)",
                "Semi Light",
                "[Reference](https://www.latex-project.org/help/documentation/fntguide.pdf#subsection.2.1)."
            ].join("\n"),
        },
    },
    {
        label: 'm',
        kind: CompletionItemKind.Variable,
        detail: 'm details',
        documentation: {
            kind: MarkupKind.Markdown,
            value: [
                "(series)",
                "Medium (normal)",
                "[Reference](https://www.latex-project.org/help/documentation/fntguide.pdf#subsection.2.1)."
            ].join("\n"),
        },
    },
    {
        label: 'sb',
        kind: CompletionItemKind.Variable,
        detail: 'sb details',
        documentation: {
            kind: MarkupKind.Markdown,
            value: [
                "(series)",
                "Semi Bold",
                "[Reference](https://www.latex-project.org/help/documentation/fntguide.pdf#subsection.2.1)."
            ].join("\n"),
        },
    },
    {
        label: 'b',
        kind: CompletionItemKind.Variable,
        detail: 'b details',
        documentation: {
            kind: MarkupKind.Markdown,
            value: [
                "(series)",
                "Bold",
                "[Reference](https://www.latex-project.org/help/documentation/fntguide.pdf#subsection.2.1)."
            ].join("\n"),
        },
    },
    {
        label: 'eb',
        kind: CompletionItemKind.Variable,
        detail: 'eb details',
        documentation: {
            kind: MarkupKind.Markdown,
            value: [
                "(series)",
                "Extra Bold",
                "[Reference](https://www.latex-project.org/help/documentation/fntguide.pdf#subsection.2.1)."
            ].join("\n"),
        },
    },
    {
        label: 'ub',
        kind: CompletionItemKind.Variable,
        detail: 'ub details',
        documentation: {
            kind: MarkupKind.Markdown,
            value: [
                "(series)",
                "Ultra Bold",
                "[Reference](https://www.latex-project.org/help/documentation/fntguide.pdf#subsection.2.1)."
            ].join("\n"),
        },
    },
    {
        label: 'uc',
        kind: CompletionItemKind.Variable,
        detail: 'uc details',
        documentation: {
            kind: MarkupKind.Markdown,
            value: [
                "(series)",
                "Ultra Condensed",
                "[Reference](https://www.latex-project.org/help/documentation/fntguide.pdf#subsection.2.1)."
            ].join("\n"),
        },
    },
    {
        label: 'ec',
        kind: CompletionItemKind.Variable,
        detail: 'ec details',
        documentation: {
            kind: MarkupKind.Markdown,
            value: [
                "(series)",
                "Extra Condensed",
                "[Reference](https://www.latex-project.org/help/documentation/fntguide.pdf#subsection.2.1)."
            ].join("\n"),
        },
    },
    {
        label: 'c',
        kind: CompletionItemKind.Variable,
        detail: 'c details',
        documentation: {
            kind: MarkupKind.Markdown,
            value: [
                "(series)",
                "Condensed",
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
                "(series)",
                "Semi Condensed",
                "[Reference](https://www.latex-project.org/help/documentation/fntguide.pdf#subsection.2.1)."
            ].join("\n"),
        },
    },
    {
        label: 'm',
        kind: CompletionItemKind.Variable,
        detail: 'm details',
        documentation: {
            kind: MarkupKind.Markdown,
            value: [
                "(series)",
                "Medium",
                "[Reference](https://www.latex-project.org/help/documentation/fntguide.pdf#subsection.2.1)."
            ].join("\n"),
        },
    },
    {
        label: 'sx',
        kind: CompletionItemKind.Variable,
        detail: 'sx details',
        documentation: {
            kind: MarkupKind.Markdown,
            value: [
                "(series)",
                "Semi Expanded",
                "[Reference](https://www.latex-project.org/help/documentation/fntguide.pdf#subsection.2.1)."
            ].join("\n"),
        },
    },
    {
        label: 'x',
        kind: CompletionItemKind.Variable,
        detail: 'x details',
        documentation: {
            kind: MarkupKind.Markdown,
            value: [
                "(series)",
                "Expanded",
                "[Reference](https://www.latex-project.org/help/documentation/fntguide.pdf#subsection.2.1)."
            ].join("\n"),
        },
    },
    {
        label: 'ex',
        kind: CompletionItemKind.Variable,
        detail: 'ex details',
        documentation: {
            kind: MarkupKind.Markdown,
            value: [
                "(series)",
                "Extra Expanded",
                "[Reference](https://www.latex-project.org/help/documentation/fntguide.pdf#subsection.2.1)."
            ].join("\n"),
        },
    },
    {
        label: 'ux',
        kind: CompletionItemKind.Variable,
        detail: 'ux details',
        documentation: {
            kind: MarkupKind.Markdown,
            value: [
                "(series)",
                "Ultra Expanded",
                "[Reference](https://www.latex-project.org/help/documentation/fntguide.pdf#subsection.2.1)."
            ].join("\n"),
        },
    }
]

export default series