import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './components/App/App'

import StateContext from './state/StateContext'
import initialState from './state/initialState'

ReactDOM.render(
	<StateContext.Provider value={initialState}>
		<App />
	</StateContext.Provider>,
	document.getElementById('root')
)
