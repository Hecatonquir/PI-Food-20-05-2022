import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteDBRecipes, getAllRecipes } from '../redux/actions';
import { MainDiv } from './styles/MainDiv.styled';
import Navbar from './00-Navbar';
import CardReceta from './03-CardReceta';
import HomeCss from './styles/Home.module.css';

export default function RecetasCreadas(props) {
	const dispatch = useDispatch();
	const allRecipes = useSelector((state) => state.recipes);
	const [deleteR, setDeleteR] = useState(false);

	const createdRecipes = allRecipes.filter((r) => !r.idAPI);

	let HandleDelete = (ev, id) => {
		dispatch(deleteDBRecipes(id));
		setDeleteR(true);
	};
	React.useEffect(() => {
		dispatch(getAllRecipes());
		setDeleteR(false);
	}, [dispatch, deleteR]);

	return (
		<MainDiv>
			<Navbar />
			<h1
				style={{
					backgroundColor: 'var(--black-color)',
					color: 'var(--bronce-color)',
					borderRadius: '10px',
					padding: '0.5rem',
				}}>
				Recently Created Recipes:
			</h1>
			<div className={`${HomeCss.Cards}`}>
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
						<button
							onClick={(ev) => HandleDelete(ev, e.id)}
							style={{
								color: 'red',
								padding: '0.5rem',
							}}>
							DELETE
						</button>

						<br />
					</div>
				))}
			</div>
		</MainDiv>
	);
}
