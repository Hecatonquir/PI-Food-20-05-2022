export const ALL_FOOD = 'ALL_FOOD';
export const DB_RECIPES = 'DB_RECIPES';
export const FOOD_NAME = 'FOOD_NAME';
export const FOOD_ID = 'FOOD_ID';
export const NEW_RECIPE = 'NEW_RECIPE';
export const All_TYPES = 'All_TYPES';
export const SET_DETAIL = 'SET_DETAIL';
export const FILTER_TYPE = 'FILTER_TYPE';
export const FILTER_CREATED = 'FILTER_CREATED';
export const FILTERED_NAMES = 'FILTERED_NAMES';
export const FILTERED_SCORE = 'FILTERED_SCORE';
export const DELETED = 'DELETED';

const initialState = {
	recipes: [],
	allRecipes: [],
	dbrecipes: [],
	types: [],
	dbtypes: [],
	detail: [],
};

function reducer(state = initialState, action) {
	switch (action.type) {
		case ALL_FOOD:
			return {
				...state,
				recipes: action.payload,
				allRecipes: action.payload,
			};
		case FOOD_ID:
			return {
				...state,
				detail: action.payload,
			};
		case FOOD_NAME:
			return {
				...state,
				recipes: action.payload,
			};
		case DB_RECIPES:
			return {
				...state,
				dbrecipes: action.payload,
			};
		case NEW_RECIPE:
			return {
				...state,
			};
		case All_TYPES:
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
		case FILTERED_NAMES:
			const allRecipes3 = state.allRecipes;
			const statusFiltered3 =
				action.payload === 'All'
					? allRecipes3
					: action.payload === 'asc'
					? allRecipes3.sort((a, b) => (a.title > b.title ? 1 : -1))
					: allRecipes3.sort((a, b) => (a.title > b.title ? -1 : 1));
			return {
				...state,
				recipes: statusFiltered3,
			};
		case FILTERED_SCORE:
			const allRecipes4 = state.allRecipes;
			const statusFiltered4 =
				action.payload === 'All'
					? allRecipes4
					: action.payload === 'asc'
					? allRecipes4.sort((a, b) => (a.healthScore > b.healthScore ? 1 : -1))
					: allRecipes4.sort((a, b) => (a.healthScore > b.healthScore ? -1 : 1));
			return {
				...state,
				recipes: statusFiltered4,
			};
		case DELETED:
			return {
				...state,
				dbrecipes: action.payload,
			};
		default:
			return state;
	}
}

export default reducer;
