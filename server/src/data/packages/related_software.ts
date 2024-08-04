import { CompletionItemKind, MarkupKind } from "vscode-languageserver"

const related_software = [
    {
        label: 'amslatex',
        kind: CompletionItemKind.Variable,
        detail: 'amslatex details',
        documentation: {
            kind: MarkupKind.Markdown,
            value: [
                "(related software)",
                "```latex",
                "\\usepackage {amslatex}",
                "```",
                "[Reference](https://www.latex-project.org/help/documentation/usrguide-historic.pdf#subsection.2.4)."
            ].join("\n"),
        },
    },
    {
        label: 'babel',
        kind: CompletionItemKind.Variable,
        detail: 'babel details',
        documentation: {
            kind: MarkupKind.Markdown,
            value: [
                "(related software)",
                "```latex",
                "\\usepackage {babel}",
                "```",
                "[Reference](https://www.latex-project.org/help/documentation/usrguide-historic.pdf#subsection.2.5)."
            ].join("\n"),
        },
    },
    {
        label: 'cyrillic',
        kind: CompletionItemKind.Variable,
        detail: 'cyrillic details',
        documentation: {
            kind: MarkupKind.Markdown,
            value: [
                "(related software)",
                "```latex",
                "\\usepackage {cyrillic}",
                "```",
                "[Reference](https://www.latex-project.org/help/documentation/usrguide-historic.pdf#subsection.2.5)."
            ].join("\n"),
        },
    },
    {
        label: 'graphics',
        kind: CompletionItemKind.Variable,
        detail: 'graphics details',
        documentation: {
            kind: MarkupKind.Markdown,
            value: [
                "(related software)",
                "```latex",
                "\\usepackage {graphics}",
                "```",
                "[Reference](https://www.latex-project.org/help/documentation/usrguide-historic.pdf#subsection.2.5)."
            ].join("\n"),
        },
    },
    {
        label: 'psnfss',
        kind: CompletionItemKind.Variable,
        detail: 'psnfss details',
        documentation: {
            kind: MarkupKind.Markdown,
            value: [
                "(related software)",
                "```latex",
                "\\usepackage {psnfss}",
                "```",
                "[Reference](https://www.latex-project.org/help/documentation/usrguide-historic.pdf#subsection.2.5)."
            ].join("\n"),
        },
    },
    {
        label: 'tools',
        kind: CompletionItemKind.Variable,
        detail: 'tools details',
        documentation: {
            kind: MarkupKind.Markdown,
            value: [
                "(related software)",
                "```latex",
                "\\usepackage {tools}",
                "```",
                "[Reference](https://www.latex-project.org/help/documentation/usrguide-historic.pdf#subsection.2.5)."
            ].join("\n"),
        },
    },
    {
        label: 'tools',
        kind: CompletionItemKind.Variable,
        detail: 'tools details',
        documentation: {
            kind: MarkupKind.Markdown,
            value: [
                "(related software)",
                "```latex",
                "\\usepackage {tools}",
                "```",
                "[Reference](https://www.latex-project.org/help/documentation/usrguide-historic.pdf#subsection.2.5)."
            ].join("\n"),
        },
    }
]

export default related_software