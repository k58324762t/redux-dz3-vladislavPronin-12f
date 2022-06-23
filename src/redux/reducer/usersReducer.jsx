import { types } from '../types'

const initializeState = {
	users: [],
}

export const userReducer = (state = initializeState, action) => {
	switch (action.type) {
		case types.ADD_USER:
			return { ...state, users: [...state.users, action.payload] }
		default:
			return state
	}
}
