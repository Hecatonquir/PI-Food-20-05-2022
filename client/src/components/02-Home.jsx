import { React, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import {
	getAllRecipes,
	getTypes,
	filterByTypes,
	filterCreatedRecipes,
	filteredByNames,
	filteredByScores,
} from '../redux/actions';
import CardReceta from './03-CardReceta';
import Paginado from './04-Paginado';
import SearchBar from './05-searchBar';

export default function Home() {
	const dispatch = useDispatch();
	const allRecipes = useSelector((state) => state.recipes);
	const dietTypes = useSelector((state) => state.types);
	//------------------------------------ Paginado -----------------------------------
	let [homePage, sethomePage] = useState(1);
	// eslint-disable-next-line no-unused-vars
	let [recipesPerPage, setrecipesPerPage] = useState(9);
	// eslint-disable-next-line no-unused-vars
	let [orden, setOrden] = useState('');
	let lastRecipe = homePage * recipesPerPage;
	let firstRecipe = lastRecipe - recipesPerPage;
	let currentRecipes = allRecipes.slice(firstRecipe, lastRecipe);

	const paginado = (pagenum) => {
		sethomePage(pagenum);
	};

	//------------------------------------ Paginado -----------------------------------

	useEffect(() => {
		/* dispatch(()) */
		dispatch(getAllRecipes());
		dispatch(getTypes());
	}, [dispatch]);

	function handleClick(e) {
		e.preventDefault();
		dispatch(getAllRecipes());
	}

	function handleFilterTypes(e) {
		dispatch(filterByTypes(e.target.value));
	}
	function handleFilterCreated(e) {
		dispatch(filterCreatedRecipes(e.target.value));
	}
	function handleFilterName(e) {
		e.preventDefault();
		dispatch(filteredByNames(e.target.value));
		sethomePage(1);
		setOrden(`Ordenado ${e.target.value}`);
	}

	function handleFilterScore(e) {
		e.preventDefault();
		dispatch(filteredByScores(e.target.value));
		sethomePage(1);
		setOrden(`Ordenado ${e.target.value}`);
	}

	return (
		<>
			<h1>Estás En Home</h1>
			<SearchBar />
			<br />
			<Link to='/recipe'> Crear Receta </Link>
			<br />
			<button onClick={(e) => handleClick(e)}> Volver a cargar todas las Recetas</button>
			<div>
				<select onChange={(e) => handleFilterTypes(e)}>
					<option value='sin'> Tipos de dietas </option>
					{dietTypes.map((d) => {
						return (
							<option key={d.title} value={d.title}>
								{d.title}
							</option>
						);
					})}
				</select>
				<select onChange={(e) => handleFilterName(e)}>
					<option value='sin'> Ordenar Alfabeticamente </option>
					<option value='asc'>Nombre Ascendente</option>
					<option value='desc'>Nombre Descendente</option>
				</select>
				<select onChange={(e) => handleFilterScore(e)}>
					<option value='sin'> Ordenar por HealthScore </option>
					<option value='asc'>Puntuación Ascendente</option>
					<option value='desc'>Puntuación Descendente</option>
				</select>
				<select onChange={(e) => handleFilterCreated(e)}>
					<option value='All'> Recetas </option>
					<option value='created'> Creadas </option>
					{/* <option value='api'> Existentes </option> */}
				</select>
				<br />
				<Paginado
					recipesPerPage={recipesPerPage}
					allRecipes={allRecipes.length}
					paginado={paginado}
				/>
				<br />

				{currentRecipes?.map((e) => {
					return (
						<div key={e.id}>
							<CardReceta
								key={e.id}
								id={e.id}
								title={e.title}
								image={e.image}
								diets={e.diets ? e.diets : e.dietTypes}
							/>
						</div>
					);
				})}
				<Paginado
					recipesPerPage={recipesPerPage}
					allRecipes={allRecipes.length}
					paginado={paginado}
				/>
			</div>
		</>
	);
}
