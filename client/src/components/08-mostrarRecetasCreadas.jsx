import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteDBRecipes, getAllRecipes } from '../redux/actions';
import { MainDiv } from './styles/MainDiv.styled';
import Navbar from './00-Navbar';
import CardReceta from './03-CardReceta';

export default function RecetasCreadas(props) {
	const dispatch = useDispatch();
	const allRecipes = useSelector((state) => state.recipes);

	const createdRecipes = allRecipes.filter((r) => !r.idAPI);

	let HandleDelete = (ev, id) => {
		dispatch(deleteDBRecipes(id));
	};
	React.useEffect(() => {
		dispatch(getAllRecipes());
	}, [dispatch]);

	return (
		<MainDiv>
			<Navbar />
			<h1>These are the created Recipes:</h1>
			<div>
				{createdRecipes?.map((e) => (
					<div key={e.id}>
						<CardReceta
							id={e.id}
							title={e.title}
							image={e.image}
							diets={e.dietTypes}
							dietsAPI={e.dietsAPI}
							dish={e.dishTypes}
							cuisines={e.cuisines}
							healthScore={e.healthScore}
						/>
						<button onClick={(ev) => HandleDelete(ev, e.id)}>ELIMINAR</button>
						<h3>_______________________________</h3>
						<br />
					</div>
				))}
			</div>
		</MainDiv>
	);
}
