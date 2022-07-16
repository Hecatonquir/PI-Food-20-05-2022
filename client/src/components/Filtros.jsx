import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
	filterByTypes,
	filterCreatedRecipes,
	filteredByNames,
	filteredByScores,
} from '../redux/actions';

export function ByTypes() {
	const dispatch = useDispatch();
	const dietTypes = useSelector((state) => state.types);

	function handleFilterTypes(e) {
		dispatch(filterByTypes(e.target.value));
	}

	return (
		<select onChange={(e) => handleFilterTypes(e)}>
			<option value='All'> Tipos de dietas </option>
			{typeof dietTypes != 'string'
				? dietTypes.map((d) => {
						return (
							<option key={d.title} value={d.title}>
								{d.title}
							</option>
						);
				  })
				: dietTypes}
		</select>
	);
}

export function Created() {
	const dispatch = useDispatch();

	function handleFilterCreated(e) {
		dispatch(filterCreatedRecipes(e.target.value));
	}

	return (
		<select onChange={(e) => handleFilterCreated(e)}>
			<option value='All'>Recetas</option>
			<option value='created'>Creadas</option>
		</select>
	);
}

export function ByAlphabet(todo) {
	const dispatch = useDispatch();
	let { sethomePage, setOrden } = todo;

	function handleFilterByAlphabet(e) {
		e.preventDefault();
		dispatch(filteredByNames(e.target.value));
		sethomePage(1);
		setOrden(`Ordenado ${e.target.value}`);
	}

	return (
		<select onChange={(e) => handleFilterByAlphabet(e)}>
			<option value='All'>Ordenar Alfabeticamente</option>
			<option value='asc'>Nombre Ascendente</option>
			<option value='desc'>Nombre Descendente</option>
		</select>
	);
}

export function ByScore(todo) {
	const dispatch = useDispatch();
	let { sethomePage, setOrden } = todo;

	function handleFilterByScore(e) {
		e.preventDefault();
		dispatch(filteredByScores(e.target.value));
		sethomePage(1);
		setOrden(`Ordenado ${e.target.value}`);
	}

	return (
		<select onChange={(e) => handleFilterByScore(e)}>
			<option value='All'>Ordenar por HealthScore</option>
			<option value='asc'>Puntuación Ascendente</option>
			<option value='desc'>Puntuación Descendente</option>
		</select>
	);
}
