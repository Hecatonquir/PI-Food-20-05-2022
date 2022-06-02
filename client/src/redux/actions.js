import axios from 'axios';
import * as R from './reducer';

export function getAllRecipes() {
	return async (dispatch) => {
		return axios
			.get('http://localhost:3001/allrecipes')
			.then((res) => dispatch({ type: R.ALL_FOOD, payload: res.data }));
	};
}

export function getTypes() {
	return async (dispatch) => {
		return axios('http://localhost:3001/types').then((res) =>
			dispatch({ type: R.ALL_DIETS, payload: res.data })
		);
	};
}

export function getFoodByName(info) {
	let title = '';
	if (info) title = info.title;

	return async (dispatch) => {
		return axios(`http://localhost:3001/recipes?name=${title}`).then((res) =>
			dispatch({ type: R.FOOD_NAME, payload: res.data })
		);
	};
}

export function createRecipe(info) {
	return { type: R.NEW_RECIPE, payload: info };
}

export function getDetail(id) {
	return async function (dispatch) {
		return fetch(`http://localhost:3001/recipes/${id}`)
			.then((res) => res.json())
			.then((post) => dispatch({ type: R.SET_DETAIL, payload: post }));
	};
}

export function filterByTypes(payload) {
	return { type: R.FILTER_TYPE, payload };
}

export function filterCreatedRecipes(payload) {
	return { type: R.FILTER_CREATED, payload };
}
