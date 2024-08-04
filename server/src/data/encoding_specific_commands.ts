import { CompletionItemKind, MarkupKind } from 'vscode-languageserver'
import { TypeCommands } from './TypeCommands'

const encoding_specific_commands: TypeCommands = [
    {
        label: `\\'`,
        kind: CompletionItemKind.Text,
        detail: `\\' details`,
        documentation: {
            kind: MarkupKind.Markdown,
            value: [
                "(encoding specific command)",
                "```latex",
                `\\'`,
                "```",
                "[Reference](https://www.latex-project.org/help/documentation/encguide.pdf#section.5).",
            ].join("\n"),
        }
    },
    {
        label: '\\^',
        kind: CompletionItemKind.Text,
        detail: '\\^ details',
        documentation: {
            kind: MarkupKind.Markdown,
            value: [
                "(encoding specific command)",
                "```latex",
                "\\^",
                "```",
                "[Reference](https://www.latex-project.org/help/documentation/encguide.pdf#section.5).",
            ].join("\n"),
        }
    },
    {
        label: '\\~',
        kind: CompletionItemKind.Text,
        detail: '\\~ details',
        documentation: {
            kind: MarkupKind.Markdown,
            value: [
                "(encoding specific command)",
                "```latex",
                "\\~",
                "```",
                "[Reference](https://www.latex-project.org/help/documentation/encguide.pdf#section.5).",
            ].join("\n"),
        }
    },
    {
        label: `\\"`,
        kind: CompletionItemKind.Text,
        detail: '\\" details',
        documentation: {
            kind: MarkupKind.Markdown,
            value: [
                "(encoding specific command)",
                "```latex",
                `\\"`,
                "```",
                "[Reference](https://www.latex-project.org/help/documentation/encguide.pdf#section.5).",
            ].join("\n"),
        }
    },
    {
        label: '\\H',
        kind: CompletionItemKind.Text,
        detail: '\\H details',
        documentation: {
            kind: MarkupKind.Markdown,
            value: [
                "(encoding specific command)",
                "```latex",
                "\\H",
                "```",
                "[Reference](https://www.latex-project.org/help/documentation/encguide.pdf#section.5).",
            ].join("\n"),
        }
    },
    {
        label: '\\r',
        kind: CompletionItemKind.Text,
        detail: '\\r details',
        documentation: {
            kind: MarkupKind.Markdown,
            value: [
                "(encoding specific command)",
                "```latex",
                "\\r",
                "```",
                "[Reference](https://www.latex-project.org/help/documentation/encguide.pdf#section.5).",
            ].join("\n"),
        }
    },
    {
        label: '\\v',
        kind: CompletionItemKind.Text,
        detail: '\\v details',
        documentation: {
            kind: MarkupKind.Markdown,
            value: [
                "(encoding specific command)",
                "```latex",
                "\\v",
                "```",
                "[Reference](https://www.latex-project.org/help/documentation/encguide.pdf#section.5).",
            ].join("\n"),
        }
    },
    {
        label: '\\u',
        kind: CompletionItemKind.Text,
        detail: '\\u details',
        documentation: {
            kind: MarkupKind.Markdown,
            value: [
                "(encoding specific command)",
                "```latex",
                "\\u",
                "```",
                "[Reference](https://www.latex-project.org/help/documentation/encguide.pdf#section.5).",
            ].join("\n"),
        }
    },
    {
        label: '\\t',
        kind: CompletionItemKind.Text,
        detail: '\\t details',
        documentation: {
            kind: MarkupKind.Markdown,
            value: [
                "(encoding specific command)",
                "```latex",
                "\\t",
                "```",
                "[Reference](https://www.latex-project.org/help/documentation/encguide.pdf#section.5).",
            ].join("\n"),
        }
    },
    {
        label: '\\=',
        kind: CompletionItemKind.Text,
        detail: '\\= details',
        documentation: {
            kind: MarkupKind.Markdown,
            value: [
                "(encoding specific command)",
                "```latex",
                "\\=",
                "```",
                "[Reference](https://www.latex-project.org/help/documentation/encguide.pdf#section.5).",
            ].join("\n"),
        }
    },
    {
        label: '\\.',
        kind: CompletionItemKind.Text,
        detail: '\\. details',
        documentation: {
            kind: MarkupKind.Markdown,
            value: [
                "(encoding specific command)",
                "```latex",
                "\\.",
                "```",
                "[Reference](https://www.latex-project.org/help/documentation/encguide.pdf#section.5).",
            ].join("\n"),
        }
    },
    {
        label: '\\b',
        kind: CompletionItemKind.Text,
        detail: '\\b details',
        documentation: {
            kind: MarkupKind.Markdown,
            value: [
                "(encoding specific command)",
                "```latex",
                "\\b",
                "```",
                "[Reference](https://www.latex-project.org/help/documentation/encguide.pdf#section.5).",
            ].join("\n"),
        }
    },
    {
        label: '\\c',
        kind: CompletionItemKind.Text,
        detail: '\\c details',
        documentation: {
            kind: MarkupKind.Markdown,
            value: [
                "(encoding specific command)",
                "```latex",
                "\\c",
                "```",
                "[Reference](https://www.latex-project.org/help/documentation/encguide.pdf#section.5).",
            ].join("\n"),
        }
    },
    {
        label: '\\d',
        kind: CompletionItemKind.Text,
        detail: '\\d details',
        documentation: {
            kind: MarkupKind.Markdown,
            value: [
                "(encoding specific command)",
                "```latex",
                "\\d",
                "```",
                "[Reference](https://www.latex-project.org/help/documentation/encguide.pdf#section.5).",
            ].join("\n"),
        }
    },
    {
        label: '\\k',
        kind: CompletionItemKind.Text,
        detail: '\\k details',
        documentation: {
            kind: MarkupKind.Markdown,
            value: [
                "(encoding specific command)",
                "```latex",
                "\\k",
                "```",
                "[Reference](https://www.latex-project.org/help/documentation/encguide.pdf#section.5).",
            ].join("\n"),
        }
    },
    {
        label: '\\AE',
        kind: CompletionItemKind.Text,
        detail: '\\AE details',
        documentation: {
            kind: MarkupKind.Markdown,
            value: [
                "(encoding specific command)",
                "```latex",
                "\\AE",
                "```",
                "[Reference](https://www.latex-project.org/help/documentation/encguide.pdf#section.5).",
            ].join("\n"),
        }
    },
    {
        label: '\\DH',
        kind: CompletionItemKind.Text,
        detail: '\\DH details',
        documentation: {
            kind: MarkupKind.Markdown,
            value: [
                "(encoding specific command)",
                "```latex",
                "\\DH",
                "```",
                "[Reference](https://www.latex-project.org/help/documentation/encguide.pdf#section.5).",
            ].join("\n"),
        }
    },
    {
        label: '\\DJ',
        kind: CompletionItemKind.Text,
        detail: '\\DJ details',
        documentation: {
            kind: MarkupKind.Markdown,
            value: [
                "(encoding specific command)",
                "```latex",
                "\\DJ",
                "```",
                "[Reference](https://www.latex-project.org/help/documentation/encguide.pdf#section.5).",
            ].join("\n"),
        }
    },
    {
        label: '\\L',
        kind: CompletionItemKind.Text,
        detail: '\\L details',
        documentation: {
            kind: MarkupKind.Markdown,
            value: [
                "(encoding specific command)",
                "```latex",
                "\\L",
                "```",
                "[Reference](https://www.latex-project.org/help/documentation/encguide.pdf#section.5).",
            ].join("\n"),
        }
    },
    {
        label: '\\NG',
        kind: CompletionItemKind.Text,
        detail: '\\NG details',
        documentation: {
            kind: MarkupKind.Markdown,
            value: [
                "(encoding specific command)",
                "```latex",
                "\\NG",
                "```",
                "[Reference](https://www.latex-project.org/help/documentation/encguide.pdf#section.5).",
            ].join("\n"),
        }
    },
    {
        label: '\\OE',
        kind: CompletionItemKind.Text,
        detail: '\\OE details',
        documentation: {
            kind: MarkupKind.Markdown,
            value: [
                "(encoding specific command)",
                "```latex",
                "\\OE",
                "```",
                "[Reference](https://www.latex-project.org/help/documentation/encguide.pdf#section.5).",
            ].join("\n"),
        }
    },
    {
        label: '\\O',
        kind: CompletionItemKind.Text,
        detail: '\\O details',
        documentation: {
            kind: MarkupKind.Markdown,
            value: [
                "(encoding specific command)",
                "```latex",
                "\\O",
                "```",
                "[Reference](https://www.latex-project.org/help/documentation/encguide.pdf#section.5).",
            ].join("\n"),
        }
    },
    {
        label: '\\SS',
        kind: CompletionItemKind.Text,
        detail: '\\SS details',
        documentation: {
            kind: MarkupKind.Markdown,
            value: [
                "(encoding specific command)",
                "```latex",
                "\\SS",
                "```",
                "[Reference](https://www.latex-project.org/help/documentation/encguide.pdf#section.5).",
            ].join("\n"),
        }
    },
    {
        label: '\\TH',
        kind: CompletionItemKind.Text,
        detail: '\\TH details',
        documentation: {
            kind: MarkupKind.Markdown,
            value: [
                "(encoding specific command)",
                "```latex",
                "\\TH",
                "```",
                "[Reference](https://www.latex-project.org/help/documentation/encguide.pdf#section.5).",
            ].join("\n"),
        }
    },
    {
        label: '\\ae',
        kind: CompletionItemKind.Text,
        detail: '\\ae details',
        documentation: {
            kind: MarkupKind.Markdown,
            value: [
                "(encoding specific command)",
                "```latex",
                "\\ae",
                "```",
                "[Reference](https://www.latex-project.org/help/documentation/encguide.pdf#section.5).",
            ].join("\n"),
        }
    },
    {
        label: '\\dh',
        kind: CompletionItemKind.Text,
        detail: '\\dh details',
        documentation: {
            kind: MarkupKind.Markdown,
            value: [
                "(encoding specific command)",
                "```latex",
                "\\dh",
                "```",
                "[Reference](https://www.latex-project.org/help/documentation/encguide.pdf#section.5).",
            ].join("\n"),
        }
    },
    {
        label: '\\dj',
        kind: CompletionItemKind.Text,
        detail: '\\dj details',
        documentation: {
            kind: MarkupKind.Markdown,
            value: [
                "(encoding specific command)",
                "```latex",
                "\\dj",
                "```",
                "[Reference](https://www.latex-project.org/help/documentation/encguide.pdf#section.5).",
            ].join("\n"),
        }
    },
    {
        label: '\\guillemotleft',
        kind: CompletionItemKind.Text,
        detail: '\\guillemotleft details',
        documentation: {
            kind: MarkupKind.Markdown,
            value: [
                "(encoding specific command)",
                "```latex",
                "\\guillemotleft",
                "```",
                "[Reference](https://www.latex-project.org/help/documentation/encguide.pdf#section.5).",
            ].join("\n"),
        }
    },
    {
        label: '\\guillemotright',
        kind: CompletionItemKind.Text,
        detail: '\\guillemotright details',
        documentation: {
            kind: MarkupKind.Markdown,
            value: [
                "(encoding specific command)",
                "```latex",
                "\\guillemotright",
                "```",
                "[Reference](https://www.latex-project.org/help/documentation/encguide.pdf#section.5).",
            ].join("\n"),
        }
    },
    {
        label: '\\guilsinglleft',
        kind: CompletionItemKind.Text,
        detail: '\\guilsinglleft details',
        documentation: {
            kind: MarkupKind.Markdown,
            value: [
                "(encoding specific command)",
                "```latex",
                "\\guilsinglleft",
                "```",
                "[Reference](https://www.latex-project.org/help/documentation/encguide.pdf#section.5).",
            ].join("\n"),
        }
    },
    {
        label: '\\guilsinglright',
        kind: CompletionItemKind.Text,
        detail: '\\guilsinglright details',
        documentation: {
            kind: MarkupKind.Markdown,
            value: [
                "(encoding specific command)",
                "```latex",
                "\\guilsinglright",
                "```",
                "[Reference](https://www.latex-project.org/help/documentation/encguide.pdf#section.5).",
            ].join("\n"),
        }
    },
    {
        label: '\\i',
        kind: CompletionItemKind.Text,
        detail: '\\i details',
        documentation: {
            kind: MarkupKind.Markdown,
            value: [
                "(encoding specific command)",
                "```latex",
                "\\i",
                "```",
                "[Reference](https://www.latex-project.org/help/documentation/encguide.pdf#section.5).",
            ].join("\n"),
        }
    },
    {
        label: '\\j',
        kind: CompletionItemKind.Text,
        detail: '\\j details',
        documentation: {
            kind: MarkupKind.Markdown,
            value: [
                "(encoding specific command)",
                "```latex",
                "\\j",
                "```",
                "[Reference](https://www.latex-project.org/help/documentation/encguide.pdf#section.5).",
            ].join("\n"),
        }
    },
    {
        label: '\\l',
        kind: CompletionItemKind.Text,
        detail: '\\l details',
        documentation: {
            kind: MarkupKind.Markdown,
            value: [
                "(encoding specific command)",
                "```latex",
                "\\l",
                "```",
                "[Reference](https://www.latex-project.org/help/documentation/encguide.pdf#section.5).",
            ].join("\n"),
        }
    },
    {
        label: '\\ng',
        kind: CompletionItemKind.Text,
        detail: '\\ng details',
        documentation: {
            kind: MarkupKind.Markdown,
            value: [
                "(encoding specific command)",
                "```latex",
                "\\ng",
                "```",
                "[Reference](https://www.latex-project.org/help/documentation/encguide.pdf#section.5).",
            ].join("\n"),
        }
    },
    {
        label: '\\oe',
        kind: CompletionItemKind.Text,
        detail: '\\oe details',
        documentation: {
            kind: MarkupKind.Markdown,
            value: [
                "(encoding specific command)",
                "```latex",
                "\\oe",
                "```",
                "[Reference](https://www.latex-project.org/help/documentation/encguide.pdf#section.5).",
            ].join("\n"),
        }
    },
    {
        label: '\\o',
        kind: CompletionItemKind.Text,
        detail: '\\o details',
        documentation: {
            kind: MarkupKind.Markdown,
            value: [
                "(encoding specific command)",
                "```latex",
                "\\o",
                "```",
                "[Reference](https://www.latex-project.org/help/documentation/encguide.pdf#section.5).",
            ].join("\n"),
        }
    },
    {
        label: '\\quotedblbase',
        kind: CompletionItemKind.Text,
        detail: '\\quotedblbase details',
        documentation: {
            kind: MarkupKind.Markdown,
            value: [
                "(encoding specific command)",
                "```latex",
                "\\quotedblbase",
                "```",
                "[Reference](https://www.latex-project.org/help/documentation/encguide.pdf#section.5).",
            ].join("\n"),
        }
    },
    {
        label: '\\quotesinglbase',
        kind: CompletionItemKind.Text,
        detail: '\\quotesinglbase details',
        documentation: {
            kind: MarkupKind.Markdown,
            value: [
                "(encoding specific command)",
                "```latex",
                "\\quotesinglbase",
                "```",
                "[Reference](https://www.latex-project.org/help/documentation/encguide.pdf#section.5).",
            ].join("\n"),
        }
    },
    {
        label: '\\ss',
        kind: CompletionItemKind.Text,
        detail: '\\ss details',
        documentation: {
            kind: MarkupKind.Markdown,
            value: [
                "(encoding specific command)",
                "```latex",
                "\\ss",
                "```",
                "[Reference](https://www.latex-project.org/help/documentation/encguide.pdf#section.5).",
            ].join("\n"),
        }
    },
    {
        label: '\\textasciicircum',
        kind: CompletionItemKind.Text,
        detail: '\\textasciicircum details',
        documentation: {
            kind: MarkupKind.Markdown,
            value: [
                "(encoding specific command)",
                "```latex",
                "\\textasciicircum",
                "```",
                "[Reference](https://www.latex-project.org/help/documentation/encguide.pdf#section.5).",
            ].join("\n"),
        }
    },
    {
        label: '\\textasciitilde',
        kind: CompletionItemKind.Text,
        detail: '\\textasciitilde details',
        documentation: {
            kind: MarkupKind.Markdown,
            value: [
                "(encoding specific command)",
                "```latex",
                "\\textasciitilde",
                "```",
                "[Reference](https://www.latex-project.org/help/documentation/encguide.pdf#section.5).",
            ].join("\n"),
        }
    },
    {
        label: '\\textbackslash',
        kind: CompletionItemKind.Text,
        detail: '\\textbackslash details',
        documentation: {
            kind: MarkupKind.Markdown,
            value: [
                "(encoding specific command)",
                "```latex",
                "\\textbackslash",
                "```",
                "[Reference](https://www.latex-project.org/help/documentation/encguide.pdf#section.5).",
            ].join("\n"),
        }
    },
    {
        label: '\\textbar',
        kind: CompletionItemKind.Text,
        detail: '\\textbar details',
        documentation: {
            kind: MarkupKind.Markdown,
            value: [
                "(encoding specific command)",
                "```latex",
                "\\textbar",
                "```",
                "[Reference](https://www.latex-project.org/help/documentation/encguide.pdf#section.5).",
            ].join("\n"),
        }
    },
    {
        label: '\\textbraceleft',
        kind: CompletionItemKind.Text,
        detail: '\\textbraceleft details',
        documentation: {
            kind: MarkupKind.Markdown,
            value: [
                "(encoding specific command)",
                "```latex",
                "\\textbraceleft",
                "```",
                "[Reference](https://www.latex-project.org/help/documentation/encguide.pdf#section.5).",
            ].join("\n"),
        }
    },
    {
        label: '\\textbraceright',
        kind: CompletionItemKind.Text,
        detail: '\\textbraceright details',
        documentation: {
            kind: MarkupKind.Markdown,
            value: [
                "(encoding specific command)",
                "```latex",
                "\\textbraceright",
                "```",
                "[Reference](https://www.latex-project.org/help/documentation/encguide.pdf#section.5).",
            ].join("\n"),
        }
    },
    {
        label: '\\textcompwordmark',
        kind: CompletionItemKind.Text,
        detail: '\\textcompwordmark details',
        documentation: {
            kind: MarkupKind.Markdown,
            value: [
                "(encoding specific command)",
                "```latex",
                "\\textcompwordmark",
                "```",
                "[Reference](https://www.latex-project.org/help/documentation/encguide.pdf#section.5).",
            ].join("\n"),
        }
    },
    {
        label: '\\textdollar',
        kind: CompletionItemKind.Text,
        detail: '\\textdollar details',
        documentation: {
            kind: MarkupKind.Markdown,
            value: [
                "(encoding specific command)",
                "```latex",
                "\\textdollar",
                "```",
                "[Reference](https://www.latex-project.org/help/documentation/encguide.pdf#section.5).",
            ].join("\n"),
        }
    },
    {
        label: '\\textemdash',
        kind: CompletionItemKind.Text,
        detail: '\\textemdash details',
        documentation: {
            kind: MarkupKind.Markdown,
            value: [
                "(encoding specific command)",
                "```latex",
                "\\textemdash",
                "```",
                "[Reference](https://www.latex-project.org/help/documentation/encguide.pdf#section.5).",
            ].join("\n"),
        }
    },
    {
        label: '\\textendash',
        kind: CompletionItemKind.Text,
        detail: '\\textendash details',
        documentation: {
            kind: MarkupKind.Markdown,
            value: [
                "(encoding specific command)",
                "```latex",
                "\\textendash",
                "```",
                "[Reference](https://www.latex-project.org/help/documentation/encguide.pdf#section.5).",
            ].join("\n"),
        }
    },
    {
        label: '\\textexclamdown',
        kind: CompletionItemKind.Text,
        detail: '\\textexclamdown details',
        documentation: {
            kind: MarkupKind.Markdown,
            value: [
                "(encoding specific command)",
                "```latex",
                "\\textexclamdown",
                "```",
                "[Reference](https://www.latex-project.org/help/documentation/encguide.pdf#section.5).",
            ].join("\n"),
        }
    },
    {
        label: '\\textgreater',
        kind: CompletionItemKind.Text,
        detail: '\\textgreater details',
        documentation: {
            kind: MarkupKind.Markdown,
            value: [
                "(encoding specific command)",
                "```latex",
                "\\textgreater",
                "```",
                "[Reference](https://www.latex-project.org/help/documentation/encguide.pdf#section.5).",
            ].join("\n"),
        }
    },
    {
        label: '\\textless',
        kind: CompletionItemKind.Text,
        detail: '\\textless details',
        documentation: {
            kind: MarkupKind.Markdown,
            value: [
                "(encoding specific command)",
                "```latex",
                "\\textless",
                "```",
                "[Reference](https://www.latex-project.org/help/documentation/encguide.pdf#section.5).",
            ].join("\n"),
        }
    },
    {
        label: '\\textquestiondown',
        kind: CompletionItemKind.Text,
        detail: '\\textquestiondown details',
        documentation: {
            kind: MarkupKind.Markdown,
            value: [
                "(encoding specific command)",
                "```latex",
                "\\textquestiondown",
                "```",
                "[Reference](https://www.latex-project.org/help/documentation/encguide.pdf#section.5).",
            ].join("\n"),
        }
    },
    {
        label: '\\textquotedbl',
        kind: CompletionItemKind.Text,
        detail: '\\textquotedbl details',
        documentation: {
            kind: MarkupKind.Markdown,
            value: [
                "(encoding specific command)",
                "```latex",
                "\\textquotedbl",
                "```",
                "[Reference](https://www.latex-project.org/help/documentation/encguide.pdf#section.5).",
            ].join("\n"),
        }
    },
    {
        label: '\\textquotedblleft',
        kind: CompletionItemKind.Text,
        detail: '\\textquotedblleft details',
        documentation: {
            kind: MarkupKind.Markdown,
            value: [
                "(encoding specific command)",
                "```latex",
                "\\textquotedblleft",
                "```",
                "[Reference](https://www.latex-project.org/help/documentation/encguide.pdf#section.5).",
            ].join("\n"),
        }
    },
    {
        label: '\\textquotedblright',
        kind: CompletionItemKind.Text,
        detail: '\\textquotedblright details',
        documentation: {
            kind: MarkupKind.Markdown,
            value: [
                "(encoding specific command)",
                "```latex",
                "\\textquotedblright",
                "```",
                "[Reference](https://www.latex-project.org/help/documentation/encguide.pdf#section.5).",
            ].join("\n"),
        }
    },
    {
        label: '\\textquoteleft',
        kind: CompletionItemKind.Text,
        detail: '\\textquoteleft details',
        documentation: {
            kind: MarkupKind.Markdown,
            value: [
                "(encoding specific command)",
                "```latex",
                "\\textquoteleft",
                "```",
                "[Reference](https://www.latex-project.org/help/documentation/encguide.pdf#section.5).",
            ].join("\n"),
        }
    },
    {
        label: '\\textquoteright',
        kind: CompletionItemKind.Text,
        detail: '\\textquoteright details',
        documentation: {
            kind: MarkupKind.Markdown,
            value: [
                "(encoding specific command)",
                "```latex",
                "\\textquoteright",
                "```",
                "[Reference](https://www.latex-project.org/help/documentation/encguide.pdf#section.5).",
            ].join("\n"),
        }
    },
    {
        label: '\\textregistered',
        kind: CompletionItemKind.Text,
        detail: '\\textregistered details',
        documentation: {
            kind: MarkupKind.Markdown,
            value: [
                "(encoding specific command)",
                "```latex",
                "\\textregistered",
                "```",
                "[Reference](https://www.latex-project.org/help/documentation/encguide.pdf#section.5).",
            ].join("\n"),
        }
    },
    {
        label: '\\textsection',
        kind: CompletionItemKind.Text,
        detail: '\\textsection details',
        documentation: {
            kind: MarkupKind.Markdown,
            value: [
                "(encoding specific command)",
                "```latex",
                "\\textsection",
                "```",
                "[Reference](https://www.latex-project.org/help/documentation/encguide.pdf#section.5).",
            ].join("\n"),
        }
    },
    {
        label: '\\textsterling',
        kind: CompletionItemKind.Text,
        detail: '\\textsterling details',
        documentation: {
            kind: MarkupKind.Markdown,
            value: [
                "(encoding specific command)",
                "```latex",
                "\\textsterling",
                "```",
                "[Reference](https://www.latex-project.org/help/documentation/encguide.pdf#section.5).",
            ].join("\n"),
        }
    },
    {
        label: '\\texttrademark',
        kind: CompletionItemKind.Text,
        detail: '\\texttrademark details',
        documentation: {
            kind: MarkupKind.Markdown,
            value: [
                "(encoding specific command)",
                "```latex",
                "\\texttrademark",
                "```",
                "[Reference](https://www.latex-project.org/help/documentation/encguide.pdf#section.5).",
            ].join("\n"),
        }
    },
    {
        label: '\\textunderscore',
        kind: CompletionItemKind.Text,
        detail: '\\textunderscore details',
        documentation: {
            kind: MarkupKind.Markdown,
            value: [
                "(encoding specific command)",
                "```latex",
                "\\textunderscore",
                "```",
                "[Reference](https://www.latex-project.org/help/documentation/encguide.pdf#section.5).",
            ].join("\n"),
        }
    },
    {
        label: '\\textvisiblespace',
        kind: CompletionItemKind.Text,
        detail: '\\textvisiblespace details',
        documentation: {
            kind: MarkupKind.Markdown,
            value: [
                "(encoding specific command)",
                "```latex",
                "\\textvisiblespace",
                "```",
                "[Reference](https://www.latex-project.org/help/documentation/encguide.pdf#section.5).",
            ].join("\n"),
        }
    },
    {
        label: '\\th',
        kind: CompletionItemKind.Text,
        detail: '\\th details',
        documentation: {
            kind: MarkupKind.Markdown,
            value: [
                "(encoding specific command)",
                "```latex",
                "\\th",
                "```",
                "[Reference](https://www.latex-project.org/help/documentation/encguide.pdf#section.5).",
            ].join("\n"),
        }
    }
]

export default encoding_specific_commands