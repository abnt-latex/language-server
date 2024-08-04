import { window } from 'vscode'

export async function showQuickPick(itens: Array<string>): Promise<string | undefined> {
	const result = window.showQuickPick(itens, {
		placeHolder: 'Select mode compile latex files',
	})
    return result
}

export async function showInputBox(value: string, description: string): Promise<string | undefined> {
	const result = window.showInputBox({
		value: value,
		placeHolder: description,
		validateInput: text => {
			return text.length <= 0 ? text : null
		}
	})
	return result
}