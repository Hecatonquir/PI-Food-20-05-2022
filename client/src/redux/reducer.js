//import { application } from 'express';
export const ALL_FOOD = 'ALL_FOOD';
export const FOOD_NAME = 'FOOD_NAME';
export const FOOD_ID = 'FOOD_ID';
export const NEW_RECIPE = 'NEW_RECIPE';
export const ALL_DIETS = 'ALL_DIETS';
export const SET_DETAIL = 'SET_DETAIL';

let index = 1;

const initialState = {
	recipes: [],
	types: [],
	detail: {},
};

function reducer(state = initialState, action) {
	switch (action.type) {
		case ALL_FOOD:
			return {
				...state,
				recipes: action.payload,
			};
		case FOOD_NAME:
			return {
				...state,
				recipes: action.payload,
			};
		case NEW_RECIPE:
			return {
				...state,
				recipes: [...state.recipes, { ...action.payload, id: index++ }],
			};
		case ALL_DIETS:
			return {
				...state,
				types: action.payload,
			};

		case SET_DETAIL:
			return {
				...state,
				detail: action.payload,
			};
		default:
			return state;
	}
}

export default reducer;
