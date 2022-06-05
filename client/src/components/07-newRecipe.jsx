import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { createNewRecipe, getTypes } from '../redux/actions';
import control from './control.jsx';
import './styles/control.css';

export default function NewRecipe() {
	const dispatch = useDispatch();
	const dietTypes = useSelector((state) => state.types);
	const History = useHistory();
	const [verif, setVerif] = useState({});

	let [localInput, setLocalInput] = useState({
		title: '',
		summary: '',
		aggregateLikes: '',
		healthScore: '',
		analyzedInstructions: '',
		image: '',
		diets: [],
	});

	useEffect(() => {
		dispatch(getTypes());
	}, [dispatch]);

	let handleInputChange = (e) => {
		setLocalInput((prev) => ({ ...prev, [e.target.name]: e.target.value }));
		setVerif(
			control({
				...localInput,
				[e.target.name]: e.target.value,
			})
		);
	};
	/* 	let handleCheck = (e) => {
		if (e.target.checked) {
			setLocalInput({
				...localInput,
				diets: e.tarteg.value,
			});
		}
	}; */

	let handleSelect = (e) => {
		setLocalInput({
			...localInput,
			diets: [...localInput.diets, e.target.value],
		});
	};

	let handleSubmit = async (e) => {
		e.preventDefault();
		if (!Object.entries(verif).length) {
			dispatch(createNewRecipe(localInput));
			setLocalInput({
				title: '',
				summary: '',
				aggregateLikes: '',
				healthScore: '',
				analyzedInstructions: '',
				image: '',
			});

			alert('Receta Creada!');
			History.push('/recetasCreadas');
		} else {
			alert('Tiene que insertar los datos correctamente!');
		}
	};

	return (
		<>
			<h3>Estás Create recipe</h3>
			<h3>________________________________________</h3>
			<br /> {/* esto produce un salto de línea (break) */}
			<form onSubmit={(e) => handleSubmit(e)}>
				<div>
					<label>Nombre: </label>
					<input
						type='text'
						name='title' /* este nombre tiene que ser igual al del local state que queremos cambiar */
						value={localInput.title}
						onChange={(e) => handleInputChange(e)}
					/>
					{verif?.title ? <p className='verif'>{verif.title}</p> : null}
				</div>
				<div>
					<label>Summary: </label>
					<input
						type='text'
						name='summary'
						value={localInput.summary}
						onChange={(e) => handleInputChange(e)}
					/>
					{verif?.summary ? <p className='verif'>{verif.summary}</p> : null}
				</div>
				<div>
					<label>AggregateLikes: </label>
					<input
						type='number'
						name='aggregateLikes'
						value={localInput.aggregateLikes}
						onChange={(e) => handleInputChange(e)}
					/>
				</div>
				<div>
					<label>HealthScore: </label>
					<input
						type='number'
						name='healthScore'
						value={localInput.healthScore}
						onChange={(e) => handleInputChange(e)}
					/>

					{verif?.healthScore ? <p className='verif'>{verif.healthScore}</p> : null}
				</div>
				<div>
					<label>Analyzed Instructions: </label>
					<input
						type='text'
						name='analyzedInstructions'
						value={localInput.analyzedInstructions}
						onChange={(e) => handleInputChange(e)}
					/>
				</div>
				<div>
					<label>Image: </label>
					<input
						type='text'
						name='image'
						value={localInput.image}
						onChange={(e) => handleInputChange(e)}
					/>
					{verif?.image ? <p className='verif'>{verif.image}</p> : null}
				</div>

				{/* <div>
					<label>Tipos Dietas: </label>
					<label>
						<input
							type='checkbox'
							name='lacto ovo vegetarian'
							value='lacto ovo vegetarian'
							onChange={(e) => handleCheck(e)}
						/>
						Vegetariano{' '}
					</label>
					<label>
						<input type='checkbox' name='vegan' value='vegan' onChange={(e) => handleCheck(e)} />
						Vegano{' '}
					</label>
					<label>
						<input
							type='checkbox'
							name='gluten free'
							value='gluten free'
							onChange={(e) => handleCheck(e)}
						/>
						Apto para Celíacos{' '}
					</label>
					<label>
						<input
							type='checkbox'
							name='dairy free'
							value='dairy free'
							onChange={(e) => handleCheck(e)}
						/>
						Sin Lactosa{' '}
					</label>
				</div> */}
				<label>Tipos Dietas: </label>
				<select onChange={(e) => handleSelect(e)}>
					{dietTypes.map((d) => {
						return (
							<option key={d.title} value={d.title}>
								{d.title}
							</option>
						);
					})}
				</select>
				<ul className='dietSelection'>
					<li>{localInput.diets?.map((e) => `${e}, `)}</li>
				</ul>
				<button type='submit'> CREAR </button>
				{/* También podría haber usado un boton, pero dentro de un formulario este es mejor ya que guarda todo de una e indica el final del formulario */}
			</form>
		</>
	);
}
