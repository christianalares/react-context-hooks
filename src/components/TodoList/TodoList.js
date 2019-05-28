import React from 'react'
import StateContext from '../../state/StateContext'

const TodoList = () => {
	return (
		<StateContext.Consumer>{value => console.log(value) || <p>Hejsan</p>}</StateContext.Consumer>
	)
}

export default TodoList
