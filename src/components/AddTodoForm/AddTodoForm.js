import React, { useState } from 'react'
import { useStateValue } from '../../store/StateProvider'
import styles from './addTodoForm.module.scss'

const AddTodoForm = () => {
	const [state, dispatch] = useStateValue() // eslint-disable-line
	const [text, setText] = useState('')

	const handleSubmit = e => {
		e.preventDefault()
		dispatch({
			type: 'add',
			payload: { text }
		})

		setText('')
	}

	return (
		<form className={styles.form} onSubmit={handleSubmit}>
			<input type="text" value={text} onChange={e => setText(e.target.value)} />
			<button type="submit">Add</button>
		</form>
	)
}

export default AddTodoForm
