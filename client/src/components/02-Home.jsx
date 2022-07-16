import { React, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { getAllRecipes, getTypes } from '../redux/actions';
import CardReceta from './03-CardReceta';
import Paginado from './04-Paginado';
import SearchBar from './05-searchBar';
import * as Filter from './Filtros';
import './styles/home.css';

export default function Home() {
	const dispatch = useDispatch();
	const allRecipes = useSelector((state) => state.recipes);

	//------------------------------------ Paginado -------------------------------------
	let [homePage, sethomePage] = useState(1);
	// eslint-disable-next-line no-unused-vars
	let [recipesPerPage, setrecipesPerPage] = useState(10);
	// eslint-disable-next-line no-unused-vars
	let [orden, setOrden] = useState('');
	let lastRecipe = homePage * recipesPerPage;
	let firstRecipe = lastRecipe - recipesPerPage;
	let currentRecipes = allRecipes.slice(firstRecipe, lastRecipe);
	const paginado = (pagenum) => {
		sethomePage(pagenum);
	};
	//-----------------------------------------------------------------------------------

	useEffect(() => {
		dispatch(getAllRecipes());
		dispatch(getTypes());
	}, [dispatch]);

	return (
		<>
			<br />
			<h3>________________________________________</h3>
			<h1> Home </h1>
			<h3>________________________________________</h3>
			<SearchBar />
			<Link to='/recipe'> Crear Receta </Link>
			<br />
			<br />
			<div>
				<Filter.ByTypes />
				<Filter.ByAlphabet sethomePage={sethomePage} setOrden={setOrden} />
				<Filter.ByScore sethomePage={sethomePage} setOrden={setOrden} />
				<Filter.Created />
			</div>
			<Paginado
				recipesPerPage={recipesPerPage}
				allRecipes={allRecipes.length}
				paginado={paginado}
			/>
			<br />
			{console.log(currentRecipes)}
			{currentRecipes.length ? (
				<div className='wrapper'>
					{currentRecipes.map((e) => {
						return (
							<CardReceta
								key={e.id}
								id={e.id}
								title={e.title}
								image={e.image}
								diets={e.diets ? e.diets : e.dietTypes}
							/>
						);
					})}
				</div>
			) : (
				<h1>
					No se encontraron recetas con ese nombre
					<br />
				</h1>
			)}
			<Paginado
				recipesPerPage={recipesPerPage}
				allRecipes={allRecipes.length}
				paginado={paginado}
			/>
			<br />
		</>
	);
}
