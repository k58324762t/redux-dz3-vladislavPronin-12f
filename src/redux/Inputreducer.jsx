import { types } from './types'

const initializeState = {
	data: 0,
}

export const InputReducer = (state = initializeState, action) => {
	switch (action.type) {
		case types.CHANGE_DATA:
			return {
				...state,
				data: {
					[action.payload.name]: +action.payload.value + 10,
				},
			}
		default:
			return state
	}
}
