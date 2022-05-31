import { React, /* useEffect, */ useState } from 'react';
import { /* connect, */ useDispatch /*  useSelector */ } from 'react-redux';
import { /* getFoodByName ,*/ createRecipe } from '../redux/actions';

// ME FALTA CARGAR ESTO A LA BASE DE DATOS!!!!!!!!!!!!!!!!!!!!!------------------------

/* Componente de función */
export default function NewRecipe(/* props */) {
	let [localInput, setLocalInput] = useState({
		title: '',
		summary: '',
		aggregateLikes: '',
		healthScore: '',
		analyzedInstructions: '',
		image: '',
	});
	let handleChange = (e) => {
		setLocalInput((prev) => ({ ...prev, [e.target.name]: e.target.value }));
	};

	const dispatch = useDispatch();
	//const recipe = useSelector((state) => state.recipes);

	/* useEffect(() => {
		dispatch(getFoodByName());
	}, [dispatch]); */

	let handleSubmit = (e) => {
		e.preventDefault();
		dispatch(/* props. */ createRecipe(localInput));
		setLocalInput({
			title: '',
			summary: '',
			aggregateLikes: '',
			healthScore: '',
			analyzedInstructions: '',
			image: '',
		});
	};

	return (
		<div>
			<h3>Estás Create recipe</h3>
			<h3>________________________________________</h3>
			<br /> {/* esto produce un salto de línea (break) */}
			<form onSubmit={(e) => handleSubmit(e)}>
				<div>
					<label> Nombre </label>
					<input
						type='text'
						name='title' /* este nombre tiene que ser igual al del local state que queremos cambiar */
						value={localInput.title}
						onChange={(e) => handleChange(e)}
					/>
				</div>
				<div>
					<label> Summary </label>
					<input
						type='text'
						name='summary'
						value={localInput.summary}
						onChange={(e) => handleChange(e)}
					/>
				</div>
				<div>
					<label> aggregateLikes </label>
					<input
						type='number'
						name='aggregateLikes' /* este nombre tiene que ser igual al del local state que queremos cambiar */
						value={localInput.aggregateLikes}
						onChange={(e) => handleChange(e)}
					/>
				</div>
				<div>
					<label> healthScore </label>
					<input
						type='number'
						name='healthScore' /* este nombre tiene que ser igual al del local state que queremos cambiar */
						value={localInput.healthScore}
						onChange={(e) => handleChange(e)}
					/>
				</div>
				<div>
					<label> analyzedInstructions </label>
					<input
						type='text'
						name='analyzedInstructions' /* este nombre tiene que ser igual al del local state que queremos cambiar */
						value={localInput.analyzedInstructions}
						onChange={(e) => handleChange(e)}
					/>
				</div>
				<div>
					<label> image </label>
					<input
						type='text'
						name='image' /* este nombre tiene que ser igual al del local state que queremos cambiar */
						value={localInput.image}
						onChange={(e) => handleChange(e)}
					/>
				</div>
				<br />
				<input type='submit' value={'CREAR'} />{' '}
				{/* También podría haber usado un boton, pero dentro de un formulario este es mejor ya que guarda todo de una e indica el final del formulario */}
			</form>
		</div>
	);
}

/* 	esto sería lo mismo que lo que hice en las líneas 7 y 29  */

/* function mapDispatchToProps(dispatch) {
	return {
		createRecipe: (info) => {
			dispatch(createRecipe(info));
		},
	};
}
export default connect(null, mapDispatchToProps)(NewRecipe); */

/* 	Además tengo que poner en la función que NewRecipe ({createRecipe}) para que las líneas	3 y 4 de este mismo codigo funcionen */
