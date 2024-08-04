import { CompletionItemKind, MarkupKind } from 'vscode-languageserver'
import { TypeCommands } from './TypeCommands'

const obsolete_commands: TypeCommands = [
    {
        label: '\\tenrm',
        kind: CompletionItemKind.Method,
        detail: 'tenrm details',
        documentation: {
            kind: MarkupKind.Markdown,
            value: [
                "(obsolete command)",
                "```latex",
                "\\tenrm",
                "```",
                "[Reference](https://www.latex-project.org/help/documentation/clsguide-historic.pdf#subsection.6.5)."
            ].join("\n"),
        }
    },
    {
        label: '\\elvrm',
        kind: CompletionItemKind.Method,
        detail: 'elvrm details',
        documentation: {
            kind: MarkupKind.Markdown,
            value: [
                "(obsolete command)",
                "```latex",
                "\\elvrm",
                "```",
                "[Reference](https://www.latex-project.org/help/documentation/clsguide-historic.pdf#subsection.6.5)."
            ].join("\n"),
        }
    },
    {
        label: '\\twlrm',
        kind: CompletionItemKind.Method,
        detail: 'twlrm details',
        documentation: {
            kind: MarkupKind.Markdown,
            value: [
                "(obsolete command)",
                "```latex",
                "\\twlrm",
                "```",
                "[Reference](https://www.latex-project.org/help/documentation/clsguide-historic.pdf#subsection.6.5)."
            ].join("\n"),
        }
    },
    {
        label: '\\tenbf',
        kind: CompletionItemKind.Method,
        detail: 'tenbf details',
        documentation: {
            kind: MarkupKind.Markdown,
            value: [
                "(obsolete command)",
                "```latex",
                "\\tenbf",
                "```",
                "[Reference](https://www.latex-project.org/help/documentation/clsguide-historic.pdf#subsection.6.5)."
            ].join("\n"),
        }
    },
    {
        label: '\\elvbf',
        kind: CompletionItemKind.Method,
        detail: 'elvbf details',
        documentation: {
            kind: MarkupKind.Markdown,
            value: [
                "(obsolete command)",
                "```latex",
                "\\elvbf",
                "```",
                "[Reference](https://www.latex-project.org/help/documentation/clsguide-historic.pdf#subsection.6.5)."
            ].join("\n"),
        }
    },
    {
        label: '\\twlbf',
        kind: CompletionItemKind.Method,
        detail: 'twlbf details',
        documentation: {
            kind: MarkupKind.Markdown,
            value: [
                "(obsolete command)",
                "```latex",
                "\\twlbf",
                "```",
                "[Reference](https://www.latex-project.org/help/documentation/clsguide-historic.pdf#subsection.6.5)."
            ].join("\n"),
        }
    },
    {
        label: '\\tensf',
        kind: CompletionItemKind.Method,
        detail: 'tensf details',
        documentation: {
            kind: MarkupKind.Markdown,
            value: [
                "(obsolete command)",
                "```latex",
                "\\tensf",
                "```",
                "[Reference](https://www.latex-project.org/help/documentation/clsguide-historic.pdf#subsection.6.5)."
            ].join("\n"),
        }
    },
    {
        label: '\\elvsf',
        kind: CompletionItemKind.Method,
        detail: 'elvsf details',
        documentation: {
            kind: MarkupKind.Markdown,
            value: [
                "(obsolete command)",
                "```latex",
                "\\elvsf",
                "```",
                "[Reference](https://www.latex-project.org/help/documentation/clsguide-historic.pdf#subsection.6.5)."
            ].join("\n"),
        }
    },
    {
        label: '\\twlsf',
        kind: CompletionItemKind.Method,
        detail: 'twlsf details',
        documentation: {
            kind: MarkupKind.Markdown,
            value: [
                "(obsolete command)",
                "```latex",
                "\\twlsf",
                "```",
                "[Reference](https://www.latex-project.org/help/documentation/clsguide-historic.pdf#subsection.6.5)."
            ].join("\n"),
        }
    },
    {
        label: '\\vpt',
        kind: CompletionItemKind.Method,
        detail: 'vpt details',
        documentation: {
            kind: MarkupKind.Markdown,
            value: [
                "(obsolete command)",
                "```latex",
                "\\vpt",
                "```",
                "[Reference](https://www.latex-project.org/help/documentation/clsguide-historic.pdf#subsection.6.5)."
            ].join("\n"),
        }
    },
    {
        label: '\\vipt',
        kind: CompletionItemKind.Method,
        detail: 'vipt details',
        documentation: {
            kind: MarkupKind.Markdown,
            value: [
                "(obsolete command)",
                "```latex",
                "\\vipt",
                "```",
                "[Reference](https://www.latex-project.org/help/documentation/clsguide-historic.pdf#subsection.6.5)."
            ].join("\n"),
        }
    },
    {
        label: '\\viipt',
        kind: CompletionItemKind.Method,
        detail: 'viipt details',
        documentation: {
            kind: MarkupKind.Markdown,
            value: [
                "(obsolete command)",
                "```latex",
                "\\viipt",
                "```",
                "[Reference](https://www.latex-project.org/help/documentation/clsguide-historic.pdf#subsection.6.5)."
            ].join("\n"),
        }
    },
    {
        label: '\\prm',
        kind: CompletionItemKind.Method,
        detail: 'prm details',
        documentation: {
            kind: MarkupKind.Markdown,
            value: [
                "(obsolete command)",
                "```latex",
                "\\prm",
                "```",
                "[Reference](https://www.latex-project.org/help/documentation/clsguide-historic.pdf#subsection.6.5)."
            ].join("\n"),
        }
    },
    {
        label: '\\pbf',
        kind: CompletionItemKind.Method,
        detail: 'pbf details',
        documentation: {
            kind: MarkupKind.Markdown,
            value: [
                "(obsolete command)",
                "```latex",
                "\\pbf",
                "```",
                "[Reference](https://www.latex-project.org/help/documentation/clsguide-historic.pdf#subsection.6.5)."
            ].join("\n"),
        }
    },
    {
        label: '\\ppounds',
        kind: CompletionItemKind.Method,
        detail: 'ppounds details',
        documentation: {
            kind: MarkupKind.Markdown,
            value: [
                "(obsolete command)",
                "```latex",
                "\\ppounds",
                "```",
                "[Reference](https://www.latex-project.org/help/documentation/clsguide-historic.pdf#subsection.6.5)."
            ].join("\n"),
        }
    },
    {
        label: '\\pLaTeX',
        kind: CompletionItemKind.Method,
        detail: 'pLaTeX details',
        documentation: {
            kind: MarkupKind.Markdown,
            value: [
                "(obsolete command)",
                "```latex",
                "\\pLaTeX",
                "```",
                "[Reference](https://www.latex-project.org/help/documentation/clsguide-historic.pdf#subsection.6.5)."
            ].join("\n"),
        }
    },
    {
        label: '\\footheight',
        kind: CompletionItemKind.Method,
        detail: 'footheight details',
        documentation: {
            kind: MarkupKind.Markdown,
            value: [
                "(obsolete command)",
                "```latex",
                "\\footheight",
                "```",
                "[Reference](https://www.latex-project.org/help/documentation/clsguide-historic.pdf#subsection.6.5)."
            ].join("\n"),
        }
    }
]

export default obsolete_commands