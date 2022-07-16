import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { createNewRecipe, getTypes } from '../redux/actions';
import control from './09-control.jsx';
import './styles/CreateRecipe.css';

export default function NewRecipe() {
	const dispatch = useDispatch();
	const dietTypes = useSelector((state) => state.types);
	const History = useHistory();
	const [verif, setVerif] = useState({});
	const dishTypes = [
		'main course',
		'side dish',
		'dessert',
		'appetizer',
		'salad',
		'bread',
		'breakfast',
		'soup',
		'beverage',
		'sauce',
		'marinade',
		'fingerfood',
		'snack',
		'drink',
	];

	let [localInput, setLocalInput] = useState({
		title: '',
		summary: '',
		healthScore: '',
		analyzedInstructions: '',
		image: '',
		dishTypes: [],
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

	let handleCheckBox = (e) => {
		if (!localInput.diets.includes(e.target.value)) {
			setLocalInput({
				...localInput,
				diets: [...localInput.diets, e.target.value],
			});
		} else {
			setLocalInput({
				...localInput,
				diets: localInput.diets.filter((d) => d !== e.target.value),
			});
		}
	};

	let handleSelect = (e) => {
		if (!localInput.dishTypes.includes(e.target.value)) {
			setLocalInput({
				...localInput,
				dishTypes: [...localInput.dishTypes, e.target.value],
			});
		} else {
			setLocalInput({
				...localInput,
				dishTypes: localInput.dishTypes.filter((d) => d !== e.target.value),
			});
		}
	};

	let handleSubmit = async (e) => {
		e.preventDefault();

		if (verif.check === 'bien') {
			dispatch(createNewRecipe(localInput));
			setLocalInput({
				title: '',
				summary: '',
				dishTypes: '',
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
			<br />
			<h3>________________________________________</h3>
			<h1> ¡Crea tu propia Receta! </h1>
			<h3>________________________________________</h3>
			<br />
			<form onSubmit={(e) => handleSubmit(e)}>
				<div className='wraper'>
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
					{verif?.analyzedInstructions ? (
						<p className='verif'>{verif.analyzedInstructions}</p>
					) : null}
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
					<div>
						<label>Tipo de plato: </label>
						<select onChange={(e) => handleSelect(e)}>
							{dishTypes.map((d) => {
								return (
									<option key={d} value={d}>
										{d}
									</option>
								);
							})}
						</select>
						<ul className='dietSelection'>
							<li>
								{localInput.dishTypes.length ? localInput.dishTypes.map((e) => `${e}, `) : ''}
							</li>
						</ul>
					</div>
					<div>
						<label>Tipos Dietas: </label>
						<ul className='checkbox'>
							{dietTypes.map((d) => {
								return (
									<li key={d.title}>
										{d.title}
										<input
											type='checkbox'
											name='dietTypes'
											value={d.title}
											onChange={(e) => handleCheckBox(e)}
										/>
									</li>
								);
							})}
						</ul>
						<ul className='dietSelection'>
							<li>{localInput.diets?.map((e) => `${e}, `)}</li>
						</ul>
					</div>
				</div>
				<button type='submit'> CREAR </button>
			</form>
		</>
	);
}
