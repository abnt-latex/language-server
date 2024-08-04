import { CompletionItemKind, MarkupKind } from 'vscode-languageserver'
import { TypeCommands } from './TypeCommands'
import encoding from './params/encoding'
import family from './params/family'
import series from './params/series'
import shape from './params/shape'

const selection_commands: TypeCommands = [
    {
        label: '\\fontencoding{}',
        kind: CompletionItemKind.Method,
        detail: 'fontencoding details',
        documentation: {
            kind: MarkupKind.Markdown,
            value: [
                "(selection command)",
                "```latex",
                "\\fontencoding {⟨encoding⟩}",
                "```",
                "[Reference 1](https://www.latex-project.org/help/documentation/fntguide.pdf#subsection.2.2).",
                "[Reference 2](https://linorg.usp.br/CTAN/macros/latex/base/source2e.pdf#HD.16523)"
            ].join("\n"),
        },
        params: [ encoding ]
    },
    {
        label: '\\fontfamily{}',
        kind: CompletionItemKind.Method,
        detail: 'fontfamily details',
        documentation: {
            kind: MarkupKind.Markdown,
            value: [
                "(selection command)",
                "```latex",
                "\\fontfamily {⟨family⟩}",
                "```",
                "[Reference 1](https://www.latex-project.org/help/documentation/fntguide.pdf#subsection.2.2).",
                "[Reference 2](https://linorg.usp.br/CTAN/macros/latex/base/source2e.pdf#HD.16554)"
            ].join("\n"),
        },
        params: [ family ]
    },
    {
        label: '\\fontseries{}',
        kind: CompletionItemKind.Method,
        detail: 'fontseries details',
        documentation: {
            kind: MarkupKind.Markdown,
            value: [
                "(selection command)",
                "```latex",
                "\\fontseries {⟨series⟩}",
                "```",
                "[Reference 1](https://www.latex-project.org/help/documentation/fntguide.pdf#subsection.2.2).",
                "[Reference 2](https://linorg.usp.br/CTAN/macros/latex/base/source2e.pdf#HD.16554)",
                "[Reference 3](https://linorg.usp.br/CTAN/macros/latex/base/source2e.pdf#HD.17487)"
            ].join("\n"),
        },
        params: [ series ]
    },
    {
        label: '\\fontshape{}',
        kind: CompletionItemKind.Method,
        detail: 'fontshape details',
        documentation: {
            kind: MarkupKind.Markdown,
            value: [
                "(selection command)",
                "```latex",
                "\\fontshape {⟨shape⟩}",
                "```",
                "[Reference 1](https://www.latex-project.org/help/documentation/fntguide.pdf#subsection.2.2).",
                "[Reference 2](https://linorg.usp.br/CTAN/macros/latex/base/source2e.pdf#HD.16554)",
                "[Reference 3](https://linorg.usp.br/CTAN/macros/latex/base/source2e.pdf#HD.17769)"
            ].join("\n"),
        },
        params: [ shape ]
    },
    {
        label: '\\fontsize{}{}',
        kind: CompletionItemKind.Method,
        detail: 'fontsize details',
        documentation: {
            kind: MarkupKind.Markdown,
            value: [
                "(selection command)",
                "```latex",
                "\\fontsize {⟨size⟩} {⟨baselineskip⟩}",
                "```",
                "[Reference 1](https://www.latex-project.org/help/documentation/fntguide.pdf#subsection.2.2).",
                "[Reference 2](https://linorg.usp.br/CTAN/macros/latex/base/source2e.pdf#HD.16605)"
            ].join("\n"),
        }
    },
    {
        label: '\\linespread{}',
        kind: CompletionItemKind.Method,
        detail: 'linespread details',
        documentation: {
            kind: MarkupKind.Markdown,
            value: [
                "(selection command)",
                "```latex",
                "\\linespread {⟨factor⟩}",
                "```",
                "[Reference 1](https://www.latex-project.org/help/documentation/fntguide.pdf#subsection.2.2).",
                "[Reference 2](https://linorg.usp.br/CTAN/macros/latex/base/source2e.pdf#HD.16602)"
            ].join("\n"),
        }
    },
    {
        label: '\\selectfont',
        kind: CompletionItemKind.Method,
        detail: 'selectfont details',
        documentation: {
            kind: MarkupKind.Markdown,
            value: [
                "(selection command)",
                "```latex",
                "\\selectfont",
                "```",
                "[Reference 1](https://www.latex-project.org/help/documentation/fntguide.pdf#subsection.2.2).",
                "[Reference 2](https://linorg.usp.br/CTAN/macros/latex/base/source2e.pdf#HD.18035)"
            ].join("\n"),
        }
    },
    {
        label: '\\usefont{}{}{}{}',
        kind: CompletionItemKind.Method,
        detail: 'usefont details',
        documentation: {
            kind: MarkupKind.Markdown,
            value: [
                "(selection command)",
                "```latex",
                "\\usefont {⟨encoding⟩} {⟨family⟩} {⟨series⟩} {⟨shape⟩}",
                "```",
                "[Reference 1](https://www.latex-project.org/help/documentation/fntguide.pdf#subsection.2.2).",
                "[Reference 2](https://linorg.usp.br/CTAN/macros/latex/base/source2e.pdf#HD.16558)"
            ].join("\n"),
        },
        params: [ encoding, family, series, shape ]
    }
]

export default selection_commands