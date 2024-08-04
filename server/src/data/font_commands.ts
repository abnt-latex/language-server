import { CompletionItemKind, MarkupKind } from 'vscode-languageserver'
import { TypeCommands } from './TypeCommands'

const font_commands: TypeCommands = [
    {
        label: '\\rm',
        kind: CompletionItemKind.Variable,
        detail: 'rm details',
        documentation: {
            kind: MarkupKind.Markdown,
            value: [
                "(font command)",
                "```latex",
                "\\rm",
                "```",
                "[Reference](https://www.latex-project.org/help/documentation/clsguide-historic.pdf#subsection.6.4)."
            ].join("\n"),
        }
    },
    {
        label: '\\sf',
        kind: CompletionItemKind.Variable,
        detail: 'sf details',
        documentation: {
            kind: MarkupKind.Markdown,
            value: [
                "(font command)",
                "```latex",
                "\\sf",
                "```",
                "[Reference](https://www.latex-project.org/help/documentation/clsguide-historic.pdf#subsection.6.4)."
            ].join("\n"),
        }
    },
    {
        label: '\\tt',
        kind: CompletionItemKind.Variable,
        detail: 'tt details',
        documentation: {
            kind: MarkupKind.Markdown,
            value: [
                "(font command)",
                "```latex",
                "\\tt",
                "```",
                "[Reference](https://www.latex-project.org/help/documentation/clsguide-historic.pdf#subsection.6.4)."
            ].join("\n"),
        }
    },
    {
        label: '\\bf',
        kind: CompletionItemKind.Variable,
        detail: 'bf details',
        documentation: {
            kind: MarkupKind.Markdown,
            value: [
                "(font command)",
                "```latex",
                "\\bf",
                "```",
                "[Reference](https://www.latex-project.org/help/documentation/clsguide-historic.pdf#subsection.6.4)."
            ].join("\n"),
        }
    },
    {
        label: '\\it',
        kind: CompletionItemKind.Variable,
        detail: 'it details',
        documentation: {
            kind: MarkupKind.Markdown,
            value: [
                "(font command)",
                "```latex",
                "\\it",
                "```",
                "[Reference](https://www.latex-project.org/help/documentation/clsguide-historic.pdf#subsection.6.4)."
            ].join("\n"),
        }
    },
    {
        label: '\\sl',
        kind: CompletionItemKind.Variable,
        detail: 'sl details',
        documentation: {
            kind: MarkupKind.Markdown,
            value: [
                "(font command)",
                "```latex",
                "\\sl",
                "```",
                "[Reference](https://www.latex-project.org/help/documentation/clsguide-historic.pdf#subsection.6.4)."
            ].join("\n"),
        }
    },
    {
        label: '\\sc',
        kind: CompletionItemKind.Variable,
        detail: 'sc details',
        documentation: {
            kind: MarkupKind.Markdown,
            value: [
                "(font command)",
                "```latex",
                "\\sc",
                "```",
                "[Reference](https://www.latex-project.org/help/documentation/clsguide-historic.pdf#subsection.6.4)."
            ].join("\n"),
        }
    },
    {
        label: '\\normalsize',
        kind: CompletionItemKind.Variable,
        detail: 'normalsize details',
        documentation: {
            kind: MarkupKind.Markdown,
            value: [
                "(font command)",
                "```latex",
                "\\normalsize",
                "```",
                "[Reference](https://www.latex-project.org/help/documentation/clsguide-historic.pdf#subsection.6.4)."
            ].join("\n"),
        }
    },
    {
        label: '\\tiny',
        kind: CompletionItemKind.Variable,
        detail: 'tiny details',
        documentation: {
            kind: MarkupKind.Markdown,
            value: [
                "(font command)",
                "```latex",
                "\\tiny",
                "```",
                "[Reference](https://www.latex-project.org/help/documentation/clsguide-historic.pdf#subsection.6.4)."
            ].join("\n"),
        }
    },
    {
        label: '\\footnotesize',
        kind: CompletionItemKind.Variable,
        detail: 'footnotesize details',
        documentation: {
            kind: MarkupKind.Markdown,
            value: [
                "(font command)",
                "```latex",
                "\\footnotesize",
                "```",
                "[Reference](https://www.latex-project.org/help/documentation/clsguide-historic.pdf#subsection.6.4)."
            ].join("\n"),
        }
    },
    {
        label: '\\small',
        kind: CompletionItemKind.Variable,
        detail: 'small details',
        documentation: {
            kind: MarkupKind.Markdown,
            value: [
                "(font command)",
                "```latex",
                "\\small",
                "```",
                "[Reference](https://www.latex-project.org/help/documentation/clsguide-historic.pdf#subsection.6.4)."
            ].join("\n"),
        }
    },
    {
        label: '\\large',
        kind: CompletionItemKind.Variable,
        detail: 'large details',
        documentation: {
            kind: MarkupKind.Markdown,
            value: [
                "(font command)",
                "```latex",
                "\\large",
                "```",
                "[Reference](https://www.latex-project.org/help/documentation/clsguide-historic.pdf#subsection.6.4)."
            ].join("\n"),
        }
    },
    {
        label: '\\Large',
        kind: CompletionItemKind.Variable,
        detail: 'Large details',
        documentation: {
            kind: MarkupKind.Markdown,
            value: [
                "(font command)",
                "```latex",
                "\\Large",
                "```",
                "[Reference](https://www.latex-project.org/help/documentation/clsguide-historic.pdf#subsection.6.4)."
            ].join("\n"),
        }
    },
    {
        label: '\\LARGE',
        kind: CompletionItemKind.Variable,
        detail: 'LARGE details',
        documentation: {
            kind: MarkupKind.Markdown,
            value: [
                "(font command)",
                "```latex",
                "\\LARGE",
                "```",
                "[Reference](https://www.latex-project.org/help/documentation/clsguide-historic.pdf#subsection.6.4)."
            ].join("\n"),
        }
    },
    {
        label: '\\huge',
        kind: CompletionItemKind.Variable,
        detail: 'huge details',
        documentation: {
            kind: MarkupKind.Markdown,
            value: [
                "(font command)",
                "```latex",
                "\\huge",
                "```",
                "[Reference](https://www.latex-project.org/help/documentation/clsguide-historic.pdf#subsection.6.4)."
            ].join("\n"),
        }
    },
    {
        label: '\\Huge',
        kind: CompletionItemKind.Variable,
        detail: 'Huge details',
        documentation: {
            kind: MarkupKind.Markdown,
            value: [
                "(font command)",
                "```latex",
                "\\Huge",
                "```",
                "[Reference](https://www.latex-project.org/help/documentation/clsguide-historic.pdf#subsection.6.4)."
            ].join("\n"),
        }
    }
]

export default font_commands