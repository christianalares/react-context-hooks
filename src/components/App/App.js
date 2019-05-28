import React from 'react'
import styles from './App.module.css'
import TodoList from '../TodoList/TodoList'

const App = () => {
	return (
		<div className={styles.container}>
			<TodoList />
		</div>
	)
}

export default App
