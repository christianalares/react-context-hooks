import React from 'react'
import { useStateValue } from '../../store/StateProvider'
import AddTodoForm from '../AddTodoForm/AddTodoForm'
import styles from './todoList.module.scss'

const TodoList = () => {
	const [state, dispatch] = useStateValue()
	const handleToggleDoneClick = id => {
		dispatch({
			type: 'toggleDone',
			payload: { id }
		})
	}

	const handleDeleteClick = id => {
		dispatch({
			type: 'delete',
			payload: { id }
		})
	}
	return (
		<>
			<ul className={styles.todoList}>
				{state.todos.map(todo => (
					<li className={todo.isDone ? styles.isDone : ''} key={todo.id}>
						<span>{todo.text}</span>
						<div>
							<button onClick={() => handleToggleDoneClick(todo.id)}>
								{todo.isDone ? '👎' : '👍'}
							</button>
							<button onClick={() => handleDeleteClick(todo.id)}>🗑</button>
						</div>
					</li>
				))}
			</ul>
			<AddTodoForm />
		</>
	)
}

export default TodoList
