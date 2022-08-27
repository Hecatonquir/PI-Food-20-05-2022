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
		<div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
			<input type='text' onChange={(e) => handleChange(e)} placeholder='Search By Name' />
			<button type='submit' onClick={(e) => handleSearch(e)}>
				Search
			</button>
		</div>
	);
}
