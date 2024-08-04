import { CodeLens, CodeLensParams, Command, Range, TextDocuments } from "vscode-languageserver"
import { TextDocument } from "vscode-languageserver-textdocument"

const handlerCodeLens = (documents: TextDocuments<TextDocument>, params: CodeLensParams, config = true): CodeLens[] => {
    try {
        const uri = params.textDocument.uri

		const document = documents.get(uri)
    	if (!document) throw new Error('TextDocument undefined')

		const codeLensList: CodeLens[] = []

		if (config) {
			const regex = new RegExp('((\\\\label)\\b(?:\\[.*\\])?(?:(?:\\{)(.*)(?:\\})))', 'g')
			let match = null

			while ((match = regex.exec(document.getText())) !== null) {
				const offset = match.index
				const length = match[0].length

				const regexBegin = new RegExp('((?:\\\\)(begin|section|subsection|subsubsection)(\\*)?(?:(?:\\[).*?(?:\\])|(?:\\{)(.*?)(?:\\})))', 'g')
				let matchBegin = null
				let lastOffset, lastLength 
				while ((matchBegin = regexBegin.exec(document.getText().substring(0, offset + length))) !== null) {
					lastOffset = matchBegin.index
					lastLength = matchBegin[1].length
				}

				if (lastOffset && lastLength) {
					const labelRef = document.getText().substring(offset + match[2].length + 1, offset + match[2].length + match[3].length + 1)

					codeLensList.push(CodeLens.create(
						Range.create(document.positionAt(lastOffset), document.positionAt(lastOffset + lastLength)),
						{ text: document.getText(), labelRef: labelRef }
					))
				}
			}
		}
		
		return codeLensList
	} catch (error) {
        console.error('LaTeX CodeLens Error:', error)
        return []
    }
}

const handlerCodeLensResolve = (codeLens: CodeLens): CodeLens => {
	const labelRef = codeLens.data.labelRef
	const text = codeLens.data.text

	const regexRef = new RegExp(`((?:\\\\)(ref|hyperref)(\\*)?((\\{|\\[)(${ labelRef })(\\}|\\])))`, 'g')
	let matchRef = null
	let amountRefs = 0
	while ((matchRef = regexRef.exec(text)) !== null) {
		amountRefs++
	}

    codeLens.command = Command.create(
		`${ amountRefs } References`, 
		'LaTeX.findReferences',
		[ labelRef ])

	return codeLens
}

export { handlerCodeLens, handlerCodeLensResolve }