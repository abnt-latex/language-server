import { Range, SymbolKind } from "vscode-languageserver";
import { TextDocument } from "vscode-languageserver-textdocument";

function getCommand(document: TextDocument, line: number, character: number) {
    let content = document.getText()
    if (!content) return

    let lines = content.split("\n")
    let str = lines[line]

    // check right
    let initialPosition = character
    while (initialPosition > 0) {
        initialPosition--

        if (/[\\%]/.test(str.substring(initialPosition, initialPosition + 1))) {
            break
        }
    }

    // check left
    let finalPosition = initialPosition
    let amountBrackets = 0
    let beginBrackets = -1
    let positionCursorInBrackets = -1
	let positionBeginBracket = initialPosition
	let positionEndBracket = initialPosition
	let params = []
    while (finalPosition < str.length) {
        finalPosition++

        if (finalPosition === character && amountBrackets > 0) {
            positionCursorInBrackets = beginBrackets
        }

        if (/[\{\[]/.test(str.substring(finalPosition, finalPosition + 1))) {
			if (amountBrackets === 0) positionBeginBracket = finalPosition + 1

            amountBrackets++
            beginBrackets++
        }

        if (amountBrackets <= 0) {
            if (!(/[a-zA-Z0-9=, ]/.test(str.substring(finalPosition, finalPosition + 1)))) {
                break
            }
        }
        
        if (/[\}\]]/.test(str.substring(finalPosition, finalPosition + 1))) {
            amountBrackets--

			if (amountBrackets === 0) {
				positionEndBracket = finalPosition
				params.push(str.substring(positionBeginBracket, positionEndBracket))
			}
		}
    }

    let def = str.substring(initialPosition, finalPosition).replace(/(?<=\{).*?(?=\})|(?<=\[).*?(?=\])/g, '')
    let match = null

    if ((match = /^([\\a-zA-Z0-9\{\}\[\]]+)*/i.exec(def))) {
        return { word: match[1], bracketPosition: positionCursorInBrackets, params }
    }

    return null
}

interface DocumentParams {
	name: string,
    detail?: string,
    kind: SymbolKind,
    range: Range,
    selectionRange: Range,
	children: Array<DocumentParams>,
	parent?: DocumentParams
}

function createTree(document: TextDocument): DocumentParams[] {
	let current: DocumentParams = {
		name: 'root',
		detail: 'root detail',
		kind: SymbolKind.Function,
		children: [],
		range: Range.create(document.positionAt(0), document.positionAt(0)),
		selectionRange: Range.create(document.positionAt(0), document.positionAt(0))
	}

	const regex = new RegExp('(?:\\\\)(begin|end)(?:(?:\\[).*?(?:\\])|(?:\\{)(.*?)(?:\\}))', 'g')
	let match = null
	while ((match = regex.exec(document.getText())) !== null) {
		const offset = match.index
		const length = match[0].length

		if (match[1] === 'begin') {
			if (current.children && match[2]) {
				current.children.push({
					name: match[2],
					detail: `${ match[1] } detail`,
					kind: SymbolKind.Function,
					children: [],
					range: Range.create(document.positionAt(offset), document.positionAt(offset + length)),
					selectionRange: Range.create(document.positionAt(offset), document.positionAt(offset + length)),
					parent: current
				})
				current = current.children[current.children.length - 1]
			}
		} else if (match[1] === 'end') {
			if (current.parent && match[2]) {
				let temp = current
				current.range = Range.create(current.selectionRange.start, document.positionAt(offset + length))
				current = current.parent
				delete temp.parent
			}
		}
	}
	
	return current.children
}

export { getCommand, createTree }