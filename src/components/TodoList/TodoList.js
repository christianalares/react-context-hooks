import React from 'react'
import { useStateValue } from '../../store/StateProvider'
import AddTodoForm from '../AddTodoForm/AddTodoForm'
import styles from './todoList.module.scss'

const TodoList = () => {
	const [state, dispatch] = useStateValue()
	const handleClick = id => {
		dispatch({
			type: 'toggleDone',
			payload: { id }
		})
	}
	return (
		<>
			<ul className={styles.test}>
				{state.todos.map(todo => (
					<li className={todo.isDone ? styles.isDone : ''} key={todo.id}>
						{todo.text} <button onClick={() => handleClick(todo.id)}>✓</button>
					</li>
				))}
			</ul>
			<AddTodoForm />
		</>
	)
}

export default TodoList
