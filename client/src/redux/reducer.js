//import { application } from 'express';
export const ALL_FOOD = 'ALL_FOOD';
export const FOOD_NAME = 'FOOD_NAME';
export const FOOD_ID = 'FOOD_ID';
export const NEW_RECIPE = 'NEW_RECIPE';
export const ALL_DIETS = 'ALL_DIETS';
export const SET_DETAIL = 'SET_DETAIL';
export const FILTER_TYPE = 'FILTER_TYPE';
export const FILTER_CREATED = 'FILTER_CREATED';

let index = 1;

const initialState = {
	recipes: [],
	allRecipes: [],
	types: [],
	detail: {},
};

function reducer(state = initialState, action) {
	switch (action.type) {
		case ALL_FOOD:
			return {
				...state,
				recipes: action.payload,
				allRecipes: action.payload,
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
		case FILTER_TYPE:
			const allRecipes = state.allRecipes;
			const statusFiltered =
				action.payload === 'All'
					? allRecipes
					: allRecipes.filter((e) =>
							e.diets
								? e.diets.includes(action.payload)
								: e.dietTypes
								? e.dietTypes.map((e) => e.title.includes(action.payload)).includes(true)
								: null
					  );
			return {
				...state,
				recipes: statusFiltered,
			};
		case FILTER_CREATED:
			const allRecipes2 = state.allRecipes;
			const statusFiltered2 =
				action.payload === 'All'
					? allRecipes2
					: allRecipes2.filter((e) => typeof e.id === 'string');
			return {
				...state,
				recipes: statusFiltered2,
			};
		default:
			return state;
	}
}

export default reducer;
