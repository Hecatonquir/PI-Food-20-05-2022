import axios from 'axios';
import { GET_FOOD } from './reducer';

export function getAllFood() {
	return (dispatch) => {
		return axios('http://localhost:3001/recipes?name=smoothie').then((res) =>
			dispatch({ type: GET_FOOD, payload: res })
		);
	};
}
