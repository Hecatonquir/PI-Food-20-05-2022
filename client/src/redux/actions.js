import axios from 'axios';
import { GET_FOOD } from './reducer';

export function getAllRecipes() {
	return async (dispatch) => {
		return axios('http://localhost:3001/allrecipes').then((res) =>
			dispatch({ type: GET_FOOD, payload: res.data })
		);
	};
}
