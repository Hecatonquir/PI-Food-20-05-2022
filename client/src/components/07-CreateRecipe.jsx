import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { createNewRecipe, getTypes } from '../redux/actions';
import control from './09-control.jsx';
import Navbar from './00-Navbar';

import { MainDiv } from './styles/MainDiv.styled';
import FormCSS from './styles/CreateRecipe.module.css';

export default function NewRecipe() {
	const dispatch = useDispatch();
	const dietTypes = useSelector((state) => state.types);
	dietTypes.pop();
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

			alert('New Recipe Created!');
			History.push('/recetasCreadas');
		} else {
			alert('Tiene que insertar los datos correctamente!');
		}
	};

	return (
		<MainDiv>
			<Navbar />
			<div className={FormCSS.Main}>
				<h1 style={{ display: 'flex', justifyContent: 'center' }}> Create Your Own Recipe! </h1>
				<form onSubmit={(e) => handleSubmit(e)}>
					<div className='wraper'>
						<div className={FormCSS.Zone}>
							<label>Name: </label>
							<div className={FormCSS.Input}>
								<input
									type='text'
									name='title' /* este nombre tiene que ser igual al del local state que queremos cambiar */
									value={localInput.title}
									onChange={(e) => handleInputChange(e)}
									placeholder='Pleas Insert A Name'
								/>
								{verif?.title ? <span className={FormCSS.Verif}>{verif.title}</span> : null}
							</div>
						</div>
						<div className={FormCSS.Zone}>
							<label>Summary: </label>
							<div className={FormCSS.Input}>
								<input
									type='text'
									name='summary'
									value={localInput.summary}
									onChange={(e) => handleInputChange(e)}
									placeholder='Pleas Insert A Description'
								/>
								{verif?.summary ? <span className={FormCSS.Verif}>{verif.summary}</span> : null}
							</div>
						</div>
						<div className={FormCSS.Zone}>
							<label>HealthScore: </label>
							<div className={FormCSS.Input}>
								<input
									type='number'
									name='healthScore'
									value={localInput.healthScore}
									onChange={(e) => handleInputChange(e)}
									placeholder='Insert Level Of Healthiness'
								/>
								{verif?.healthScore ? <span className={FormCSS.Verif}>{verif.healthScore}</span> : null}
							</div>
						</div>
						<div className={FormCSS.Zone}>
							<label>Analyzed Instructions: </label>
							<div className={FormCSS.Input}>
								<input
									type='text'
									name='analyzedInstructions'
									value={localInput.analyzedInstructions}
									onChange={(e) => handleInputChange(e)}
									placeholder='Pleas Insert Some Instructions'
								/>
								{verif?.analyzedInstructions ? (
									<span className={FormCSS.Verif}>{verif.analyzedInstructions}</span>
								) : null}
							</div>
						</div>
						<div className={FormCSS.Zone}>
							<label>Image: </label>
							<div className={FormCSS.Input}>
								<input
									type='text'
									name='image'
									value={localInput.image}
									onChange={(e) => handleInputChange(e)}
									placeholder='Pleas Insert An Image'
								/>
								{verif?.image ? <span className={FormCSS.Verif}>{verif.image}</span> : null}
							</div>
						</div>
						<div className={FormCSS.Zone}>
							<label>Type Of Dish: </label>
							<div className={FormCSS.typeOfDish}>
								<select onChange={(e) => handleSelect(e)} className={FormCSS.SelectList}>
									{dishTypes.map((d) => {
										return (
											<option key={d} value={d}>
												{d}
											</option>
										);
									})}
								</select>
								<ul className={FormCSS.dietSelection}>
									<li>
										{localInput.dishTypes.length ? localInput.dishTypes.map((e) => `${e} / `) : ''}
									</li>
								</ul>
							</div>
						</div>
						<div className={FormCSS.Zone}>
							<label>Diet Types: </label>
							<div className={FormCSS.Input}>
								<ul className={FormCSS.Checkbox}>
									{dietTypes.map((d) => {
										return (
											<li key={d.title} className={FormCSS.List}>
												<h3 style={{ width: '99%' }}>{d.title}</h3>
												<input
													type='checkbox'
													name='dietTypes'
													value={d.title}
													onChange={(e) => handleCheckBox(e)}
													placeholder='Pleas Insert Diet Tipes'
													className={FormCSS.InputDietTypes}
												/>
											</li>
										);
									})}
								</ul>
								<ul className={FormCSS.dietSelection}>
									<li>{localInput.diets?.map((e) => `${e} / `)}</li>
								</ul>
							</div>
						</div>
					</div>
					<div style={{ display: 'flex', justifyContent: 'center' }}>
						<button type='submit'>CREAR</button>
					</div>
				</form>
			</div>
		</MainDiv>
	);
}
