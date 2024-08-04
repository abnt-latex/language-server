import { CompletionItemKind, InsertTextFormat, MarkupKind } from 'vscode-languageserver'
import class_name from './params/class_name'
import package_name from './packages/package_name'
import { TypeCommands } from './TypeCommands'

const preamble_commands: TypeCommands = [
    {
        label: '\\documentclass[]{}[]',
        insertText: '\\documentclass[$2]{$1}[]',
        insertTextFormat: InsertTextFormat.Snippet,
        kind: CompletionItemKind.Class,
        detail: 'documentclass details',
        command: {
            title: "Trigger Suggest",
            command: "editor.action.triggerSuggest"
        },
        documentation: {
            kind: MarkupKind.Markdown,
            value: [
                "(preamble command)",
                "```latex",
                "\\documentclass [⟨option-list⟩] {⟨class-name⟩} [⟨release-date⟩]",
                "```",
                "[Reference 1](https://linorg.usp.br/CTAN/macros/latex/base/source2e.pdf#HD.30806).",
                "[Reference 2](https://www.latex-project.org/help/documentation/usrguide-historic.pdf#subsection.3.1)."
            ].join("\n"),
        },
        params: [
			[],
            class_name,
			[]
        ]
    },
	{
        label: '\\documentclass{}',
        kind: CompletionItemKind.Class,
        detail: 'documentclass details',
        documentation: {
            kind: MarkupKind.Markdown,
            value: [
                "(preamble command)",
                "```latex",
                "\\documentclass {⟨class-name⟩}",
                "```",
				"[Reference 1](https://linorg.usp.br/CTAN/macros/latex/base/source2e.pdf#HD.30806).",
                "[Reference 2](https://www.latex-project.org/help/documentation/usrguide-historic.pdf#subsection.3.1)."
            ]
                .join("\n"),
        },
        params: [
            class_name
        ]
    },
	{
        label: '\\usepackage[]{}[]',
        kind: CompletionItemKind.Class,
        detail: 'usepackage details',
        documentation: {
            kind: MarkupKind.Markdown,
            value: [
                "(preamble command)",
                "```latex",
                "\\usepackage [⟨option-list⟩] {⟨package-name⟩} [⟨release-date⟩]",
                "```",
                "[Reference 1](https://linorg.usp.br/CTAN/macros/latex/base/source2e.pdf#HD.30877).",
				"[Reference 2](https://www.latex-project.org/help/documentation/usrguide-historic.pdf#subsection.3.1)."
            ]
                .join("\n"),
        },
        params: [ 
            [],
            package_name,
            []
        ]
	},
	{
        label: '\\usepackage[]{}',
        kind: CompletionItemKind.Class,
        detail: 'usepackage details',
        documentation: {
            kind: MarkupKind.Markdown,
            value: [
                "(preamble command)",
                "```latex",
                "\\usepackage [⟨option-list⟩] {⟨package-name⟩}",
                "```",
                "[Reference 1](https://linorg.usp.br/CTAN/macros/latex/base/source2e.pdf#HD.30877).",
				"[Reference 2](https://www.latex-project.org/help/documentation/usrguide-historic.pdf#subsection.3.1)."
            ]
                .join("\n"),
        },
        params: [ 
            [],
            package_name
        ]
	},
	{
        label: '\\usepackage{}',
        kind: CompletionItemKind.Class,
        detail: 'usepackage details',
        documentation: {
            kind: MarkupKind.Markdown,
            value: [
                "(preamble command)",
                "```latex",
                "\\usepackage {⟨package-name⟩}",
                "```",
                `[Reference 1](https://linorg.usp.br/CTAN/macros/latex/base/source2e.pdf#HD.30877).`,
				`[Reference 2](https://www.latex-project.org/help/documentation/usrguide-historic.pdf#subsection.3.1).`
            ]
                .join("\n"),
        },
        params: [ 
            package_name
        ]
	}
]

export default preamble_commands