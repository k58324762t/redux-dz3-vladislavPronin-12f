import { types } from '../types'

const initializeState = {
	title: 'hello world',
}

export const titleReducer = (state = initializeState, action) => {
	switch (action.type) {
		case types.CHANGE_TITLE:
			return { ...state, title: 'I new title' }
		default:
			return state
	}
}
