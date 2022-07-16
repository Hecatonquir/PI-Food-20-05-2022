import axios from 'axios';
import * as R from './reducer';

export function getAllRecipes() {
	return async (dispatch) => {
		return await axios
			.get('http://localhost:3001/allrecipes')
			.then((res) => dispatch({ type: R.ALL_FOOD, payload: res.data }))
			.catch('Te quedaste sin apiKeys');
	};
}

export function getDBRecipes() {
	return async (dispatch) => {
		return await axios
			.get('http://localhost:3001/dbrecipes')
			.then((res) => dispatch({ type: R.DB_RECIPES, payload: res.data }))
			.catch('Te quedaste sin apiKeys');
	};
}

export function getFoodByName(info) {
	return async (dispatch) => {
		return await axios
			.get(`http://localhost:3001/recipes?name=${info}`)
			.then((res) => dispatch({ type: R.FOOD_NAME, payload: res.data }));
	};
}

export function getRecipeById(id) {
	return async (dispatch) => {
		try {
			let dataid = await axios.get(`http://localhost:3001/recipes/${id}`);
			return dispatch({ type: R.FOOD_ID, payload: dataid.data });
		} catch (error) {
			console.log('Seguro te quedaste sin apiKeys');
		}
	};
}

export function getTypes() {
	return async (dispatch) => {
		return await axios
			.get('http://localhost:3001/types')
			.then((res) => dispatch({ type: R.All_TYPES, payload: res.data }));
	};
}

export function createNewRecipe(info) {
	return async () => {
		return await axios({
			method: 'post',
			url: 'http://localhost:3001/recipe',
			data: info,
		});
	};
}

export function deleteDBRecipes(id) {
	return async (dispatch) => {
		return await axios({
			method: 'delete',
			url: `http://localhost:3001/recipes/${id}`,
		}).then((res) => dispatch({ type: R.DELETED, payload: res.data }));
	};
}

export function filterByTypes(payload) {
	return { type: R.FILTER_TYPE, payload };
}

export function filterCreatedRecipes(payload) {
	return { type: R.FILTER_CREATED, payload };
}

export function filteredByNames(payload) {
	return { type: R.FILTERED_NAMES, payload };
}

export function filteredByScores(payload) {
	return { type: R.FILTERED_SCORE, payload };
}
