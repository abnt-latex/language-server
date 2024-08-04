import { CompletionItemKind, MarkupKind } from 'vscode-languageserver'
import preamble_commands from './preamble_commands'
import author_commands from './author_commands'
import encoding_specific_commands from './encoding_specific_commands'
import font_commands from './font_commands'
import obsolete_commands from './obsolete_commands'
import selection_commands from './selection_commands'
import { TypeCommands } from './TypeCommands'
import environment from './params/environment'
import graphicx_commands from './packages/graphicx/commands'

const commands: TypeCommands = [
    ...preamble_commands,
    ...selection_commands,
    ...author_commands,
    ...encoding_specific_commands,
    ...font_commands,
    ...obsolete_commands,
    ...graphicx_commands,
    {
        label: '\\title{}',
        kind: CompletionItemKind.Function
    },
	{
        label: '\\author{}',
        kind: CompletionItemKind.Function,
	},
	{
        label: '\\date{}',
        kind: CompletionItemKind.Function,
	},
	{
        label: '\\begin{}',
        kind: CompletionItemKind.Function,
        detail: 'begin details',
        documentation: {
            kind: MarkupKind.Markdown,
            value: [
                "(environments)",
                "[Reference 1](https://www.latex-project.org/help/documentation/lthooks-doc.pdf#subsubsection.0.3.1.1).",
                "[Reference 2](https://linorg.usp.br/CTAN/macros/latex/base/source2e.pdf#HD.24475)."
            ].join("\n"),
        },
        params: [ environment ]
	},
	{
        label: '\\end{}',
        kind: CompletionItemKind.Function,
	},
	{
        label: '\\maketitle{}',
        kind: CompletionItemKind.Function,
	},
	{
        label: '\\section{}',
        kind: CompletionItemKind.Function,
	},
    {
        label: '\\cite{}',
        kind: CompletionItemKind.Function,
	},
    {
        label: '\\label{}',
        kind: CompletionItemKind.Function,
	},
    {
        label: '\\caption{}',
        kind: CompletionItemKind.Function,
    },
    {
        label: '\\centering',
        kind: CompletionItemKind.Function,
    }
]

export default commands