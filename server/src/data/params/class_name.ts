import { CompletionItemKind, MarkupKind } from "vscode-languageserver"

const class_name = [
    {
        label: 'article',
        kind: CompletionItemKind.Variable,
        detail: 'article details',
        documentation: {
            kind: MarkupKind.Markdown,
            value: [
                "(standard class)",
                "```latex",
                "\\documentclass {article}",
                "```",
                "[Reference](https://www.latex-project.org/help/documentation/usrguide-historic.pdf#subsection.2.3)."
            ].join("\n"),
        },
    },
    {
        label: 'book',
        kind: CompletionItemKind.Variable,
        detail: 'book details',
        documentation: {
            kind: MarkupKind.Markdown,
            value: [
                "(standard class)",
                "```latex",
                "\\documentclass {book}",
                "```",
                "[Reference](https://www.latex-project.org/help/documentation/usrguide-historic.pdf#subsection.2.3)."
            ].join("\n"),
        },
    },
    {
        label: 'report',
        kind: CompletionItemKind.Variable,
        detail: 'report details',
        documentation: {
            kind: MarkupKind.Markdown,
            value: [
                "(standard class)",
                "```latex",
                "\\documentclass {report}",
                "```",
                "[Reference](https://www.latex-project.org/help/documentation/usrguide-historic.pdf#subsection.2.3)."
            ].join("\n"),
        },
    },
    {
        label: 'letter',
        kind: CompletionItemKind.Variable,
        detail: 'letter details',
        documentation: {
            kind: MarkupKind.Markdown,
            value: [
                "(standard class)",
                "```latex",
                "\\documentclass {letter}",
                "```",
                "[Reference](https://www.latex-project.org/help/documentation/usrguide-historic.pdf#subsection.2.3)."
            ].join("\n"),
        },
    },
    {
        label: 'slides',
        kind: CompletionItemKind.Variable,
        detail: 'slides details',
        documentation: {
            kind: MarkupKind.Markdown,
            value: [
                "(standard class)",
                "```latex",
                "\\documentclass {slides}",
                "```",
                "[Reference](https://www.latex-project.org/help/documentation/usrguide-historic.pdf#subsection.2.3)."
            ].join("\n"),
        },
    },
    {
        label: 'proc',
        kind: CompletionItemKind.Variable,
        detail: 'proc details',
        documentation: {
            kind: MarkupKind.Markdown,
            value: [
                "(standard class)",
                "```latex",
                "\\documentclass {proc}",
                "```",
                "[Reference](https://www.latex-project.org/help/documentation/usrguide-historic.pdf#subsection.2.3)."
            ].join("\n"),
        },
    },
    {
        label: 'ltxdoc',
        kind: CompletionItemKind.Variable,
        detail: 'ltxdoc details',
        documentation: {
            kind: MarkupKind.Markdown,
            value: [
                "(standard class)",
                "```latex",
                "\\documentclass {ltxdoc}",
                "```",
                "[Reference](https://www.latex-project.org/help/documentation/usrguide-historic.pdf#subsection.2.3)."
            ].join("\n"),
        },
    },
    {
        label: 'ltxguide',
        kind: CompletionItemKind.Variable,
        detail: 'ltxguide details',
        documentation: {
            kind: MarkupKind.Markdown,
            value: [
                "(standard class)",
                "```latex",
                "\\documentclass {ltxguide}",
                "```",
                "[Reference](https://www.latex-project.org/help/documentation/usrguide-historic.pdf#subsection.2.3)."
            ].join("\n"),
        },
    },
    {
        label: 'ltnews',
        kind: CompletionItemKind.Variable,
        detail: 'ltnews details',
        documentation: {
            kind: MarkupKind.Markdown,
            value: [
                "(standard class)",
                "```latex",
                "\\documentclass {ltnews}",
                "```",
                "[Reference](https://www.latex-project.org/help/documentation/usrguide-historic.pdf#subsection.2.3)."
            ].join("\n"),
        },
    },
    {
        label: 'minimal',
        kind: CompletionItemKind.Variable,
        detail: 'minimal details',
        documentation: {
            kind: MarkupKind.Markdown,
            value: [
                "(standard class)",
                "```latex",
                "\\documentclass {minimal}",
                "```",
                "[Reference](https://www.latex-project.org/help/documentation/usrguide-historic.pdf#subsection.2.3)."
            ].join("\n"),
        },
    }
]

export default class_name