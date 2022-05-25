//import { application } from 'express';
export const GET_FOOD = 'GET_FOOD';

const initialState = {
	recipes: [],
	types: [],
};

function reducer(state = initialState, action) {
	switch (action.type) {
		case GET_FOOD:
			return {
				...state,
				recipes: action.payload,
			};

		default:
			return state;
	}
}

export default reducer;
