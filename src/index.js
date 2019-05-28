import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import initialState from './store/initialState'
import App from './components/App/App'

import StateProvider from './store/StateProvider'

const reducer = (state, action) => {
	console.log(action)

	switch (action.type) {
		case 'toggleDone':
			return {
				...state,
				todos: state.todos.map(todo => {
					if (todo.id === action.payload.id) {
						return {
							...todo,
							isDone: !todo.isDone
						}
					}
					return todo
				})
			}

		case 'add':
			const newId = [...state.todos].sort((a, b) => a > b).pop().id + 1

			return {
				...state,
				todos: [
					...state.todos,
					{
						id: newId,
						text: action.payload.text
					}
				]
			}

		case 'delete':
			return {
				...state,
				todos: state.todos.filter(todo => todo.id !== action.payload.id)
			}

		default:
			return state
	}
}

ReactDOM.render(
	<StateProvider initialState={initialState} reducer={reducer}>
		<App />
	</StateProvider>,
	document.getElementById('root')
)
