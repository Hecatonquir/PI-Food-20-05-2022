import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getRecipeById } from '../redux/actions';
import Navbar from './00-Navbar';
import { MainDiv } from './styles/MainDiv.styled';

import DetailCss from './styles/DetalleReceta.module.css';

export default function DetalleRecetaCreada(props) {
	let { id } = props.match.params;
	const dispatch = useDispatch();
	React.useEffect(() => {
		dispatch(getRecipeById(id));
	}, [dispatch, id]);
	const foundRecipe = useSelector((state) => state.detail);

	//console.log(foundRecipe);

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
			{foundRecipe ? (
				<div className={DetailCss.Main}>
					<div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-start' }}>
						<img src={image} alt={title} />
						<h2> {title} </h2>
						<span style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start' }}>
							<h3>HealthScore: </h3>
							<h2 style={{ margin: '0rem 4rem' }}>{healthScore}</h2>
						</span>
					</div>
					<div style={{ width: '100%' }}>
						<div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start' }}>
							<h3>Type of Dish:</h3>
							<h4>{dishTypes ? dishTypes : 'No Types Found'}</h4>
						</div>
						<div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start' }}>
							<h3>Diet Types:</h3> <h4>{diets ? diets : 'No Diet Types Found'}</h4>
						</div>
						<div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start' }}>
							<h3>Summary: </h3>
							<h4>
								<div dangerouslySetInnerHTML={{ __html: summary }}></div>
							</h4>
						</div>
						<div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start' }}>
							<h3>Step By Step: </h3>
							<h4>{analyzedInstructions ? analyzedInstructions : 'No Instructions Found'}</h4>
						</div>
					</div>
				</div>
			) : null}
		</MainDiv>
	);
}
