import { CompletionItemKind, MarkupKind } from "vscode-languageserver"

const tools = [
    {
        label: 'array',
        kind: CompletionItemKind.Variable,
        detail: 'array details',
        documentation: {
            kind: MarkupKind.Markdown,
            value: [
                "(tools package)",
                "```latex",
                "\\usepackage {array}",
                "```",
                "[Reference](https://www.latex-project.org/help/documentation/usrguide-historic.pdf#subsubsection.2.5.1)."
            ].join("\n"),
        },
    },
    {
        label: 'calc',
        kind: CompletionItemKind.Variable,
        detail: 'calc details',
        documentation: {
            kind: MarkupKind.Markdown,
            value: [
                "(tools package)",
                "```latex",
                "\\usepackage {calc}",
                "```",
                "[Reference](https://www.latex-project.org/help/documentation/usrguide-historic.pdf#subsubsection.2.5.1)."
            ].join("\n"),
        },
    },
    {
        label: 'dcolumn',
        kind: CompletionItemKind.Variable,
        detail: 'dcolumn details',
        documentation: {
            kind: MarkupKind.Markdown,
            value: [
                "(tools package)",
                "```latex",
                "\\usepackage {dcolumn}",
                "```",
                "[Reference](https://www.latex-project.org/help/documentation/usrguide-historic.pdf#subsubsection.2.5.1)."
            ].join("\n"),
        },
    },
    {
        label: 'delarray',
        kind: CompletionItemKind.Variable,
        detail: 'delarray details',
        documentation: {
            kind: MarkupKind.Markdown,
            value: [
                "(tools package)",
                "```latex",
                "\\usepackage {delarray}",
                "```",
                "[Reference](https://www.latex-project.org/help/documentation/usrguide-historic.pdf#subsubsection.2.5.1)."
            ].join("\n"),
        },
    },
    {
        label: 'hhline',
        kind: CompletionItemKind.Variable,
        detail: 'hhline details',
        documentation: {
            kind: MarkupKind.Markdown,
            value: [
                "(tools package)",
                "```latex",
                "\\usepackage {hhline}",
                "```",
                "[Reference](https://www.latex-project.org/help/documentation/usrguide-historic.pdf#subsubsection.2.5.1)."
            ].join("\n"),
        },
    },
    {
        label: 'longtable',
        kind: CompletionItemKind.Variable,
        detail: 'longtable details',
        documentation: {
            kind: MarkupKind.Markdown,
            value: [
                "(tools package)",
                "```latex",
                "\\usepackage {longtable}",
                "```",
                "[Reference](https://www.latex-project.org/help/documentation/usrguide-historic.pdf#subsubsection.2.5.1)."
            ].join("\n"),
        },
    },
    {
        label: 'tabularx',
        kind: CompletionItemKind.Variable,
        detail: 'tabularx details',
        documentation: {
            kind: MarkupKind.Markdown,
            value: [
                "(tools package)",
                "```latex",
                "\\usepackage {tabularx}",
                "```",
                "[Reference](https://www.latex-project.org/help/documentation/usrguide-historic.pdf#subsubsection.2.5.1)."
            ].join("\n"),
        },
    },
    {
        label: 'afterpage',
        kind: CompletionItemKind.Variable,
        detail: 'afterpage details',
        documentation: {
            kind: MarkupKind.Markdown,
            value: [
                "(tools package)",
                "```latex",
                "\\usepackage {afterpage}",
                "```",
                "[Reference](https://www.latex-project.org/help/documentation/usrguide-historic.pdf#subsubsection.2.5.1)."
            ].join("\n"),
        },
    },
    {
        label: 'bm',
        kind: CompletionItemKind.Variable,
        detail: 'bm details',
        documentation: {
            kind: MarkupKind.Markdown,
            value: [
                "(tools package)",
                "```latex",
                "\\usepackage {bm}",
                "```",
                "[Reference](https://www.latex-project.org/help/documentation/usrguide-historic.pdf#subsubsection.2.5.1)."
            ].join("\n"),
        },
    },
    {
        label: 'enumerate',
        kind: CompletionItemKind.Variable,
        detail: 'enumerate details',
        documentation: {
            kind: MarkupKind.Markdown,
            value: [
                "(tools package)",
                "```latex",
                "\\usepackage {enumerate}",
                "```",
                "[Reference](https://www.latex-project.org/help/documentation/usrguide-historic.pdf#subsubsection.2.5.1)."
            ].join("\n"),
        },
    },
    {
        label: 'fontsmpl',
        kind: CompletionItemKind.Variable,
        detail: 'fontsmpl details',
        documentation: {
            kind: MarkupKind.Markdown,
            value: [
                "(tools package)",
                "```latex",
                "\\usepackage {fontsmpl}",
                "```",
                "[Reference](https://www.latex-project.org/help/documentation/usrguide-historic.pdf#subsubsection.2.5.1)."
            ].join("\n"),
        },
    },
    {
        label: 'ftnright',
        kind: CompletionItemKind.Variable,
        detail: 'ftnright details',
        documentation: {
            kind: MarkupKind.Markdown,
            value: [
                "(tools package)",
                "```latex",
                "\\usepackage {ftnright}",
                "```",
                "[Reference](https://www.latex-project.org/help/documentation/usrguide-historic.pdf#subsubsection.2.5.1)."
            ].join("\n"),
        },
    },
    {
        label: 'indentfirst',
        kind: CompletionItemKind.Variable,
        detail: 'indentfirst details',
        documentation: {
            kind: MarkupKind.Markdown,
            value: [
                "(tools package)",
                "```latex",
                "\\usepackage {indentfirst}",
                "```",
                "[Reference](https://www.latex-project.org/help/documentation/usrguide-historic.pdf#subsubsection.2.5.1)."
            ].join("\n"),
        },
    },
    {
        label: 'layout',
        kind: CompletionItemKind.Variable,
        detail: 'layout details',
        documentation: {
            kind: MarkupKind.Markdown,
            value: [
                "(tools package)",
                "```latex",
                "\\usepackage {layout}",
                "```",
                "[Reference](https://www.latex-project.org/help/documentation/usrguide-historic.pdf#subsubsection.2.5.1)."
            ].join("\n"),
        },
    },
    {
        label: 'multicol',
        kind: CompletionItemKind.Variable,
        detail: 'multicol details',
        documentation: {
            kind: MarkupKind.Markdown,
            value: [
                "(tools package)",
                "```latex",
                "\\usepackage {multicol}",
                "```",
                "[Reference](https://www.latex-project.org/help/documentation/usrguide-historic.pdf#subsubsection.2.5.1)."
            ].join("\n"),
        },
    },
    {
        label: 'rawfonts',
        kind: CompletionItemKind.Variable,
        detail: 'rawfonts details',
        documentation: {
            kind: MarkupKind.Markdown,
            value: [
                "(tools package)",
                "```latex",
                "\\usepackage {rawfonts}",
                "```",
                "[Reference](https://www.latex-project.org/help/documentation/usrguide-historic.pdf#subsubsection.2.5.1)."
            ].join("\n"),
        },
    },
    {
        label: 'somedefs',
        kind: CompletionItemKind.Variable,
        detail: 'somedefs details',
        documentation: {
            kind: MarkupKind.Markdown,
            value: [
                "(tools package)",
                "```latex",
                "\\usepackage {somedefs}",
                "```",
                "[Reference](https://www.latex-project.org/help/documentation/usrguide-historic.pdf#subsubsection.2.5.1)."
            ].join("\n"),
        },
    },
    {
        label: 'showkeys',
        kind: CompletionItemKind.Variable,
        detail: 'showkeys details',
        documentation: {
            kind: MarkupKind.Markdown,
            value: [
                "(tools package)",
                "```latex",
                "\\usepackage {showkeys}",
                "```",
                "[Reference](https://www.latex-project.org/help/documentation/usrguide-historic.pdf#subsubsection.2.5.1)."
            ].join("\n"),
        },
    },
    {
        label: 'theorem',
        kind: CompletionItemKind.Variable,
        detail: 'theorem details',
        documentation: {
            kind: MarkupKind.Markdown,
            value: [
                "(tools package)",
                "```latex",
                "\\usepackage {theorem}",
                "```",
                "[Reference](https://www.latex-project.org/help/documentation/usrguide-historic.pdf#subsubsection.2.5.1)."
            ].join("\n"),
        },
    },
    {
        label: 'varioref',
        kind: CompletionItemKind.Variable,
        detail: 'varioref details',
        documentation: {
            kind: MarkupKind.Markdown,
            value: [
                "(tools package)",
                "```latex",
                "\\usepackage {varioref}",
                "```",
                "[Reference](https://www.latex-project.org/help/documentation/usrguide-historic.pdf#subsubsection.2.5.1)."
            ].join("\n"),
        },
    },
    {
        label: 'verbatim',
        kind: CompletionItemKind.Variable,
        detail: 'verbatim details',
        documentation: {
            kind: MarkupKind.Markdown,
            value: [
                "(tools package)",
                "```latex",
                "\\usepackage {verbatim}",
                "```",
                "[Reference](https://www.latex-project.org/help/documentation/usrguide-historic.pdf#subsubsection.2.5.1)."
            ].join("\n"),
        },
    },
    {
        label: 'verbatim',
        kind: CompletionItemKind.Variable,
        detail: 'verbatim details',
        documentation: {
            kind: MarkupKind.Markdown,
            value: [
                "(tools package)",
                "```latex",
                "\\usepackage {verbatim}",
                "```",
                "[Reference](https://www.latex-project.org/help/documentation/usrguide-historic.pdf#subsubsection.2.5.1)."
            ].join("\n"),
        },
    },
    {
        label: 'varioref',
        kind: CompletionItemKind.Variable,
        detail: 'varioref details',
        documentation: {
            kind: MarkupKind.Markdown,
            value: [
                "(tools package)",
                "```latex",
                "\\usepackage {varioref}",
                "```",
                "[Reference](https://www.latex-project.org/help/documentation/usrguide-historic.pdf#subsubsection.2.5.1)."
            ].join("\n"),
        },
    },
    {
        label: 'verbatim',
        kind: CompletionItemKind.Variable,
        detail: 'verbatim details',
        documentation: {
            kind: MarkupKind.Markdown,
            value: [
                "(tools package)",
                "```latex",
                "\\usepackage {verbatim}",
                "```",
                "[Reference](https://www.latex-project.org/help/documentation/usrguide-historic.pdf#subsubsection.2.5.1)."
            ].join("\n"),
        },
    },
    {
        label: 'xr',
        kind: CompletionItemKind.Variable,
        detail: 'xr details',
        documentation: {
            kind: MarkupKind.Markdown,
            value: [
                "(tools package)",
                "```latex",
                "\\usepackage {xr}",
                "```",
                "[Reference](https://www.latex-project.org/help/documentation/usrguide-historic.pdf#subsubsection.2.5.1)."
            ].join("\n"),
        },
    },
    {
        label: 'xspace',
        kind: CompletionItemKind.Variable,
        detail: 'xspace details',
        documentation: {
            kind: MarkupKind.Markdown,
            value: [
                "(tools package)",
                "```latex",
                "\\usepackage {xspace}",
                "```",
                "[Reference](https://www.latex-project.org/help/documentation/usrguide-historic.pdf#subsubsection.2.5.1)."
            ].join("\n"),
        },
    }
]

export default tools