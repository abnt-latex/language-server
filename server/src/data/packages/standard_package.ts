import { CompletionItemKind, MarkupKind } from "vscode-languageserver"

const package_name = [
    {
        label: 'alltt',
        kind: CompletionItemKind.Variable,
        detail: 'alltt details',
        documentation: {
            kind: MarkupKind.Markdown,
            value: [
                "(standard package)",
                "```latex",
                "\\usepackage {alltt}",
                "```",
                "[Reference](https://www.latex-project.org/help/documentation/usrguide-historic.pdf#subsection.2.4)."
            ].join("\n"),
        },
    },
    {
        label: 'doc',
        kind: CompletionItemKind.Variable,
        detail: 'doc details',
        documentation: {
            kind: MarkupKind.Markdown,
            value: [
                "(standard package)",
                "```latex",
                "\\usepackage {doc}",
                "```",
                "[Reference](https://www.latex-project.org/help/documentation/usrguide-historic.pdf#subsection.2.4)."
            ].join("\n"),
        },
    },
    {
        label: 'exscale',
        kind: CompletionItemKind.Variable,
        detail: 'exscale details',
        documentation: {
            kind: MarkupKind.Markdown,
            value: [
                "(standard package)",
                "```latex",
                "\\usepackage {exscale}",
                "```",
                "[Reference](https://www.latex-project.org/help/documentation/usrguide-historic.pdf#subsection.2.4)."
            ].join("\n"),
        },
    },
    {
        label: 'fontenc',
        kind: CompletionItemKind.Variable,
        detail: 'fontenc details',
        documentation: {
            kind: MarkupKind.Markdown,
            value: [
                "(standard package)",
                "```latex",
                "\\usepackage {fontenc}",
                "```",
                "[Reference 1](https://www.latex-project.org/help/documentation/usrguide-historic.pdf#subsection.2.4).",
                "[Reference 2](https://www.latex-project.org/help/documentation/fntguide.pdf#subsection.5.1)"
            ].join("\n"),
        },
    },
    {
        label: 'graphpap',
        kind: CompletionItemKind.Variable,
        detail: 'graphpap details',
        documentation: {
            kind: MarkupKind.Markdown,
            value: [
                "(standard package)",
                "```latex",
                "\\usepackage {graphpap}",
                "```",
                "[Reference](https://www.latex-project.org/help/documentation/usrguide-historic.pdf#subsection.2.4)."
            ].join("\n"),
        },
    },
    {
        label: 'ifthen',
        kind: CompletionItemKind.Variable,
        detail: 'ifthen details',
        documentation: {
            kind: MarkupKind.Markdown,
            value: [
                "(standard package)",
                "```latex",
                "\\usepackage {ifthen}",
                "```",
                "[Reference](https://www.latex-project.org/help/documentation/usrguide-historic.pdf#subsection.2.4)."
            ].join("\n"),
        },
    },
    {
        label: 'inputenc',
        kind: CompletionItemKind.Variable,
        detail: 'inputenc details',
        documentation: {
            kind: MarkupKind.Markdown,
            value: [
                "(standard package)",
                "```latex",
                "\\usepackage {inputenc}",
                "```",
                "[Reference](https://www.latex-project.org/help/documentation/usrguide-historic.pdf#subsection.2.4)."
            ].join("\n"),
        },
    },
    {
        label: 'latexsym',
        kind: CompletionItemKind.Variable,
        detail: 'latexsym details',
        documentation: {
            kind: MarkupKind.Markdown,
            value: [
                "(standard package)",
                "```latex",
                "\\usepackage {latexsym}",
                "```",
                "[Reference](https://www.latex-project.org/help/documentation/usrguide-historic.pdf#subsection.2.4)."
            ].join("\n"),
        },
    },
    {
        label: 'makeidx',
        kind: CompletionItemKind.Variable,
        detail: 'makeidx details',
        documentation: {
            kind: MarkupKind.Markdown,
            value: [
                "(standard package)",
                "```latex",
                "\\usepackage {makeidx}",
                "```",
                "[Reference](https://www.latex-project.org/help/documentation/usrguide-historic.pdf#subsection.2.4)."
            ].join("\n"),
        },
    },
    {
        label: 'newlfont',
        kind: CompletionItemKind.Variable,
        detail: 'newlfont details',
        documentation: {
            kind: MarkupKind.Markdown,
            value: [
                "(standard package)",
                "```latex",
                "\\usepackage {newlfont}",
                "```",
                "[Reference](https://www.latex-project.org/help/documentation/usrguide-historic.pdf#subsection.2.4)."
            ].join("\n"),
        },
    },
    {
        label: 'oldlfont',
        kind: CompletionItemKind.Variable,
        detail: 'oldlfont details',
        documentation: {
            kind: MarkupKind.Markdown,
            value: [
                "(standard package)",
                "```latex",
                "\\usepackage {oldlfont}",
                "```",
                "[Reference](https://www.latex-project.org/help/documentation/usrguide-historic.pdf#subsection.2.4)."
            ].join("\n"),
        },
    },
    {
        label: 'showidx',
        kind: CompletionItemKind.Variable,
        detail: 'showidx details',
        documentation: {
            kind: MarkupKind.Markdown,
            value: [
                "(standard package)",
                "```latex",
                "\\usepackage {showidx}",
                "```",
                "[Reference](https://www.latex-project.org/help/documentation/usrguide-historic.pdf#subsection.2.4)."
            ].join("\n"),
        },
    },
    {
        label: 'syntonly',
        kind: CompletionItemKind.Variable,
        detail: 'syntonly details',
        documentation: {
            kind: MarkupKind.Markdown,
            value: [
                "(standard package)",
                "```latex",
                "\\usepackage {syntonly}",
                "```",
                "[Reference](https://www.latex-project.org/help/documentation/usrguide-historic.pdf#subsection.2.4)."
            ].join("\n"),
        },
    },
    {
        label: 'tracefnt',
        kind: CompletionItemKind.Variable,
        detail: 'tracefnt details',
        documentation: {
            kind: MarkupKind.Markdown,
            value: [
                "(standard package)",
                "```latex",
                "\\usepackage {tracefnt}",
                "```",
                "[Reference](https://www.latex-project.org/help/documentation/usrguide-historic.pdf#subsection.2.4)."
            ].join("\n"),
        },
    }
]

export default package_name