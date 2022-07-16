import { React, useState } from 'react';
import { useDispatch } from 'react-redux';

import { getFoodByName } from '../redux/actions';

export default function SearchBar() {
	const dispatch = useDispatch();

	let [searchInput, setSearchInput] = useState('');

	const handleChange = (e) => {
		setSearchInput(e.target.value);
	};

	const handleSearch = (e) => {
		e.preventDefault();
		dispatch(getFoodByName(searchInput));
		setSearchInput('');
	};

	return (
		<>
			<input type='text' onChange={(e) => handleChange(e)} placeholder='Buscar Receta...' />
			<br />
			<button type='submit' onClick={(e) => handleSearch(e)}>
				Buscar
			</button>
			<br />
			<br />
		</>
	);
}
