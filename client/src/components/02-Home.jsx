import { React, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { getAllRecipes } from '../redux/actions';
import CardReceta from './03-CardReceta';
import Paginado from './04-Paginado';

export default function Home() {
	const dispatch = useDispatch();
	const allRecipes = useSelector((state) => state.recipes); // esto es lo mismo que hacer el mapStateToProps
	//------------------------------------ Paginado -----------------------------------
	let [homePage, sethomePage] = useState(1);
	// eslint-disable-next-line no-unused-vars
	let [recipesPerPage, setrecipesPerPage] = useState(9);

	let lastRecipe = homePage * recipesPerPage;
	let firstRecipe = lastRecipe - recipesPerPage;
	let currentRecipes = allRecipes.slice(firstRecipe, lastRecipe);
	console.log(currentRecipes);
	const paginado = (pagenum) => {
		sethomePage(pagenum);
	};

	//------------------------------------ Paginado -----------------------------------

	useEffect(() => {
		dispatch(getAllRecipes());
	}, [dispatch]);

	function handleClick(e) {
		e.preventDefault();
		dispatch(getAllRecipes());
	}

	return (
		<>
			<Link to='/recipe'> Crear Receta</Link>
			<h1>Estás En Home</h1>
			<button onClick={(e) => handleClick(e)}> Volver a cargar todas las Recetas</button>
			<div>
				<select>
					<option value='Vege'> Vegetariano </option>
					<option value='Vegg'> Vegano</option>
					<option value='SinG'> Sin Gluten</option>
				</select>
				<select>
					<option value='Nasc'>Nombre Ascendente</option>
					<option value='Ndesc'>Nombre Descendente</option>
				</select>
				<select>
					<option value='Pasc'>Puntuación Ascendente</option>
					<option value='Pdesc'>Puntuación Descendente</option>
				</select>
				<Paginado
					recipesPerPage={recipesPerPage}
					allRecipes={allRecipes.length}
					paginado={paginado}
				/>

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
			</div>
		</>
	);
}
