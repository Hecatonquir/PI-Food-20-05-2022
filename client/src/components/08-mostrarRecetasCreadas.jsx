import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Receta from './03-CardReceta';
import { getDBRecipes, deleteDBRecipes } from '../redux/actions';
import { MainDiv } from './styles/MainDiv.styled';
import Navbar from './00-Navbar';

export default function RecetasCreadas(props) {
	const dispatch = useDispatch();
	let dbRecipes = useSelector((state) => state.dbrecipes);
	let HandleDelete = (ev, id) => {
		dispatch(deleteDBRecipes(id));
	};
	React.useEffect(() => {
		dispatch(getDBRecipes());
	}, [dispatch]);

	return (
		<MainDiv>
			<Navbar />

			<h1>These are the created Recipes:</h1>

			<div>
				{dbRecipes?.map((e) => (
					<div key={e.id}>
						<Receta
							key={e.id}
							id={e.id}
							title={e.title}
							summary={e.summary}
							aggregateLikes={e.aggregateLikes}
							healthScore={e.healthScore}
							analyzedInstructions={e.analyzedInstructions}
							diets={e.dietTypes.map((e) => e.title)}
							image={e.image}
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
