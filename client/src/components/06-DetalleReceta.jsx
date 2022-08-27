import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getRecipeById } from '../redux/actions';
import Navbar from './00-Navbar';
import './styles/DetalleReceta.css';
import { MainDiv } from './styles/MainDiv.styled';

export default function DetalleRecetaCreada(props) {
	let { id } = props.match.params;
	const dispatch = useDispatch();
	React.useEffect(() => {
		dispatch(getRecipeById(id));
	}, [dispatch, id]);
	const foundRecipe = useSelector((state) => state.detail);

	console.log(foundRecipe);

	const image = foundRecipe[0] ? foundRecipe.find((e) => e.image)?.image : foundRecipe.image;
	const title = foundRecipe[0] ? foundRecipe.find((e) => e.title)?.title : foundRecipe.title;
	const dishTypes = foundRecipe[0]
		? foundRecipe.find((e) => e.dishTypes)?.dishTypes.join(' - ')
		: foundRecipe.dishTypes;
	const diets = foundRecipe[0]
		? foundRecipe.find((e) => e.diets)?.diets.join(' - ')
		: foundRecipe.dietTypes?.map((e) => e.title).join(' - ');
	const summary = foundRecipe[0] ? foundRecipe.find((e) => e.summary)?.summary : foundRecipe.summary;
	const healthScore = foundRecipe[0]
		? foundRecipe.find((e) => e.healthScore)?.healthScore
		: foundRecipe.healthScore;
	const analyzedInstructions = foundRecipe[0]
		? foundRecipe
				.find((e) => e.analyzedInstructions)
				?.analyzedInstructions[0]?.steps.map((e) => `[${e.number}º]: ${e.step}`)
				.flat(Infinity)
				.join('\n\n')
		: foundRecipe.analyzedInstructions;

	return (
		<MainDiv>
			<Navbar />
			<div>
				{foundRecipe ? (
					<div key={id}>
						<br />
						<img src={image} alt={title} />
						<h4>Nombre: {title} </h4>
						<h3>Tipo de Plato: {dishTypes ? dishTypes : 'No se encontró el tipo de plato'}</h3>
						<div className='DietTypes'>Tipos de dietas: {diets ? diets : 'No Encontré Dietas'}</div>
						<h4>
							Resumen del plato: <div dangerouslySetInnerHTML={{ __html: summary }}></div>{' '}
						</h4>
						<h3>Health Score: {healthScore}</h3>
						<h4>
							Paso a paso: {analyzedInstructions ? analyzedInstructions : 'No encontré pasos a seguir'}
						</h4>
					</div>
				) : null}
			</div>
		</MainDiv>
	);
}
