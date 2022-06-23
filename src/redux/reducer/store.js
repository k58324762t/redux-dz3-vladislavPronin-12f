import { combineReducers, createStore, applyMiddleware } from 'redux'
import { InputReducer } from '../Inputreducer'
import { titleReducer } from './titleReducer'
import { userReducer } from './usersReducer'
import logger from 'react-logger'

export const rootReducer = combineReducers({
	title: titleReducer,
	data: InputReducer,
	users: userReducer,
})

export const store = createStore(rootReducer, applyMiddleware(logger))
