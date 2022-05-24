//import { application } from 'express';
export const GET_FOOD = 'GET_FOOD';

const initialState = {
	foods: [],
	types: [],
};

function reducer(state = initialState, action) {
	switch (action.type) {
		case GET_FOOD:
			return {
				...state,
				foods: action.payload,
			};

		default:
			return state;
	}
}

export default reducer;
