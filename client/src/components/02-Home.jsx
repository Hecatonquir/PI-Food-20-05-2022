import { React, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
//import { Link } from 'react-router-dom';

import { getAllRecipes, getTypes } from '../redux/actions';
import CardReceta from './03-CardReceta';
import Paginado from './04-Paginado';
import SearchBar from './05-searchBar';
import * as Filter from './Filtros';
import Navbar from './00-Navbar';

import { MainDiv } from './styles/MainDiv.styled'; // STYLED COMPONENT
import HomeCss from './styles/Home.module.css';

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
	console.log('🟢🟢🟢 / file: 02-Home.jsx / line 28 / Home / currentRecipes', currentRecipes);
	const paginado = (pagenum) => {
		sethomePage(pagenum);
	};
	//-----------------------------------------------------------------------------------

	useEffect(() => {
		dispatch(getAllRecipes());
		dispatch(getTypes());
	}, [dispatch]);

	return (
		<MainDiv>
			<Navbar />
			<div className={`${HomeCss.Header}`}>
				<SearchBar />
				<Filter.ByTypes />
				<Filter.ByAlphabet sethomePage={sethomePage} setOrden={setOrden} />
				<Filter.ByScore sethomePage={sethomePage} setOrden={setOrden} />
				<Filter.Created />
			</div>
			<Paginado
				recipesPerPage={recipesPerPage}
				allRecipes={allRecipes.length}
				paginado={paginado}
				actualPage={homePage}
			/>

			{currentRecipes.length ? (
				typeof currentRecipes !== 'string' ? (
					<div className={`${HomeCss.Cards}`}>
						{currentRecipes.map((e) => {
							return (
								<CardReceta
									key={e.id}
									id={e.id}
									title={e.title}
									image={e.image}
									diets={e.diets ? e.diets : e.dietsAPI}
									dish={e.dishTypes}
									cuisines={e.cuisines}
									healthScore={e.healthScore}
								/>
							);
						})}
					</div>
				) : (
					<h1>No recipes Found</h1>
				)
			) : (
				<h1>Loading...</h1>
			)}
			<Paginado
				recipesPerPage={recipesPerPage}
				allRecipes={allRecipes.length}
				paginado={paginado}
				actualPage={homePage}
			/>
		</MainDiv>
	);
}
