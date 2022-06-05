import { React, useState } from 'react';
import { useDispatch } from 'react-redux';

import { getFoodByName } from '../redux/actions';

export default function SearchBar() {
	const dispatch = useDispatch();

	let [searchInput, setSearchInput] = useState('');

	let handleChange = (e) => {
		setSearchInput(e.target.value);
	};

	let handleSearch = (e) => {
		e.preventDefault();
		dispatch(getFoodByName(searchInput));
		setSearchInput('');
	};

	return (
		<>
			<input type='text' onChange={(e) => handleChange(e)} placeholder='Insertar nombre...' />
			<br />
			<button type='submit' onClick={(e) => handleSearch(e)}>
				Buscar
			</button>
		</>
	);
}
