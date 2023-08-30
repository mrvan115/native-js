import { ChangeEvent } from 'react'

export const User = () => {
	const deleteUser = () => {
		alert('user have been deleted')
	}
	const saveUser = () => {
		alert('user have been saved')
	}

	const onNameChanged = (e: ChangeEvent<HTMLTextAreaElement>) => {
		console.log('name changed' + ' ' + e.currentTarget.value)
	}

	const focusLostHandler = () => {
		console.log('focus lost')
	}
	return (
		<div>
			<textarea onChange={onNameChanged}>Dimych</textarea>
			<input onBlur={focusLostHandler} />
			<button onClick={deleteUser}>delete</button>
			<button onClick={saveUser}>save</button>
		</div>
	)
}
