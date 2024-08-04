import { CompletionItemKind, MarkupKind } from 'vscode-languageserver'
import { TypeCommands } from './TypeCommands'

const author_commands: TypeCommands = [
    {
        label: '\\encodingdefault',
        kind: CompletionItemKind.Variable,
        detail: 'encodingdefault details',
        documentation: {
            kind: MarkupKind.Markdown,
            value: [
                "(text command)",
                "```latex",
                "\\encodingdefault",
                "```",
                "[Reference 1](https://www.latex-project.org/help/documentation/fntguide.pdf#subsection.2.4).",
                "[Reference 2](https://linorg.usp.br/CTAN/macros/latex/base/source2e.pdf#HD.21044)."
            ].join("\n"),
        }
    },
    {
        label: '\\familydefault',
        kind: CompletionItemKind.Variable,
        detail: 'familydefault details',
        documentation: {
            kind: MarkupKind.Markdown,
            value: [
                "(text command)",
                "```latex",
                "\\familydefault",
                "```",
                "[Reference 1](https://www.latex-project.org/help/documentation/fntguide.pdf#subsection.2.4).",
                "[Reference 2](https://linorg.usp.br/CTAN/macros/latex/base/source2e.pdf#HD.21120)."
            ].join("\n"),
        }
    },
    {
        label: '\\seriesdefault',
        kind: CompletionItemKind.Variable,
        detail: 'seriesdefault details',
        documentation: {
            kind: MarkupKind.Markdown,
            value: [
                "(text command)",
                "```latex",
                "\\seriesdefault",
                "```",
                "[Reference 1](https://www.latex-project.org/help/documentation/fntguide.pdf#subsection.2.4).",
                "[Reference 2](https://linorg.usp.br/CTAN/macros/latex/base/source2e.pdf#HD.20985).",
                "[Reference 3](https://linorg.usp.br/CTAN/macros/latex/base/source2e.pdf#HD.21120)."
            ].join("\n"),
        }
    },
    {
        label: '\\shapedefault',
        kind: CompletionItemKind.Variable,
        detail: 'shapedefault details',
        documentation: {
            kind: MarkupKind.Markdown,
            value: [
                "(text command)",
                "```latex",
                "\\shapedefault",
                "```",
                "[Reference 1](https://www.latex-project.org/help/documentation/fntguide.pdf#subsection.2.4).",
                "[Reference 2](https://linorg.usp.br/CTAN/macros/latex/base/source2e.pdf#HD.21120)."
            ].join("\n"),
        }
    },
    {
        label: '\\rmdefault',
        kind: CompletionItemKind.Variable,
        detail: 'rmdefault details',
        documentation: {
            kind: MarkupKind.Markdown,
            value: [
                "(encoding command)",
                "```latex",
                "\\rmdefault",
                "```",
                "[Reference 1](https://www.latex-project.org/help/documentation/fntguide.pdf#subsection.2.4).",
                "[Reference 2](https://linorg.usp.br/CTAN/macros/latex/base/source2e.pdf#HD.21044)."
            ].join("\n"),
        }
    },
    {
        label: '\\sfdefault',
        kind: CompletionItemKind.Variable,
        detail: 'sfdefault details',
        documentation: {
            kind: MarkupKind.Markdown,
            value: [
                "(encoding command)",
                "```latex",
                "\\sfdefault",
                "```",
                "[Reference 1](https://www.latex-project.org/help/documentation/fntguide.pdf#subsection.2.4).",
                "[Reference 2](https://linorg.usp.br/CTAN/macros/latex/base/source2e.pdf#HD.21044)."
            ].join("\n"),
        }
    },
    {
        label: '\\ttdefault',
        kind: CompletionItemKind.Variable,
        detail: 'ttdefault details',
        documentation: {
            kind: MarkupKind.Markdown,
            value: [
                "(encoding command)",
                "```latex",
                "\\ttdefault",
                "```",
                "[Reference 1](https://www.latex-project.org/help/documentation/fntguide.pdf#subsection.2.4).",
                "[Reference 2](https://linorg.usp.br/CTAN/macros/latex/base/source2e.pdf#HD.21044)."
            ].join("\n"),
        }
    },
    {
        label: '\\bfdefault',
        kind: CompletionItemKind.Variable,
        detail: 'bfdefault details',
        documentation: {
            kind: MarkupKind.Markdown,
            value: [
                "(family command)",
                "```latex",
                "\\bfdefault",
                "```",
                "[Reference 1](https://www.latex-project.org/help/documentation/fntguide.pdf#subsection.2.4).",
                "[Reference 2](https://linorg.usp.br/CTAN/macros/latex/base/source2e.pdf#HD.21087)."
            ].join("\n"),
        }
    },
    {
        label: '\\mddefault',
        kind: CompletionItemKind.Variable,
        detail: 'mddefault details',
        documentation: {
            kind: MarkupKind.Markdown,
            value: [
                "(family command)",
                "```latex",
                "\\mddefault",
                "```",
                "[Reference 1](https://www.latex-project.org/help/documentation/fntguide.pdf#subsection.2.4).",
                "[Reference 2](https://linorg.usp.br/CTAN/macros/latex/base/source2e.pdf#HD.21087)."
            ].join("\n"),
        }
    },
    {
        label: '\\itdefault',
        kind: CompletionItemKind.Variable,
        detail: 'itdefault details',
        documentation: {
            kind: MarkupKind.Markdown,
            value: [
                "(shape command)",
                "```latex",
                "\\itdefault",
                "```",
                "[Reference 1](https://www.latex-project.org/help/documentation/fntguide.pdf#subsection.2.4).",
                "[Reference 2](https://linorg.usp.br/CTAN/macros/latex/base/source2e.pdf#HD.21090)."
            ].join("\n"),
        }
    },
    {
        label: '\\sldefault',
        kind: CompletionItemKind.Variable,
        detail: 'sldefault details',
        documentation: {
            kind: MarkupKind.Markdown,
            value: [
                "(shape command)",
                "```latex",
                "\\sldefault",
                "```",
                "[Reference 1](https://www.latex-project.org/help/documentation/fntguide.pdf#subsection.2.4).",
                "[Reference 2](https://linorg.usp.br/CTAN/macros/latex/base/source2e.pdf#HD.21090)."
            ].join("\n"),
        }
    },
    {
        label: '\\scdefault',
        kind: CompletionItemKind.Variable,
        detail: 'scdefault details',
        documentation: {
            kind: MarkupKind.Markdown,
            value: [
                "(shape command)",
                "```latex",
                "\\scdefault",
                "```",
                "[Reference 1](https://www.latex-project.org/help/documentation/fntguide.pdf#subsection.2.4).",
                "[Reference 2](https://linorg.usp.br/CTAN/macros/latex/base/source2e.pdf#HD.21090)."
            ].join("\n"),
        }
    },
    {
        label: '\\updefault',
        kind: CompletionItemKind.Variable,
        detail: 'updefault details',
        documentation: {
            kind: MarkupKind.Markdown,
            value: [
                "(shape command)",
                "```latex",
                "\\updefault",
                "```",
                "[Reference 1](https://www.latex-project.org/help/documentation/fntguide.pdf#subsection.2.4).",
                "[Reference 2](https://linorg.usp.br/CTAN/macros/latex/base/source2e.pdf#HD.21090)."
            ].join("\n"),
        }
    },
    {
        label: '\\sscdefault',
        kind: CompletionItemKind.Variable,
        detail: 'sscdefault details',
        documentation: {
            kind: MarkupKind.Markdown,
            value: [
                "(shape command)",
                "```latex",
                "\\sscdefault",
                "```",
                "[Reference 1](https://www.latex-project.org/help/documentation/fntguide.pdf#subsection.2.4).",
                "[Reference 2](https://linorg.usp.br/CTAN/macros/latex/base/source2e.pdf#HD.17685)."
            ].join("\n"),
        }
    },
    {
        label: '\\swdefault',
        kind: CompletionItemKind.Variable,
        detail: 'swdefault details',
        documentation: {
            kind: MarkupKind.Markdown,
            value: [
                "(shape command)",
                "```latex",
                "\\swdefault",
                "```",
                "[Reference 1](https://www.latex-project.org/help/documentation/fntguide.pdf#subsection.2.4).",
                "[Reference 2](https://linorg.usp.br/CTAN/macros/latex/base/source2e.pdf#HD.17679)."
            ].join("\n"),
        }
    },
    {
        label: '\\ulcdefault',
        kind: CompletionItemKind.Variable,
        detail: 'ulcdefault details',
        documentation: {
            kind: MarkupKind.Markdown,
            value: [
                "(shape command)",
                "```latex",
                "\\ulcdefault",
                "```",
                "[Reference 1](https://www.latex-project.org/help/documentation/fntguide.pdf#subsection.2.4).",
                "[Reference 2](https://linorg.usp.br/CTAN/macros/latex/base/source2e.pdf#HD.17673)."
            ].join("\n"),
        }
    }
]

export default author_commands