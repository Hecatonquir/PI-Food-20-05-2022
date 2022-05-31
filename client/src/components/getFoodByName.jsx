//import { useEffect } from 'react';
import { React, useState } from 'react';
import { useDispatch /* , useSelector */ } from 'react-redux';
import { getFoodByName } from '../redux/actions';

// NO PUEDO HACER QUE ME MUESTRE LAS PROPIEDADES RECIBIDAS DE LA PÁG!

export default function GetFoodByName() {
	const dispatch = useDispatch();

	let [localInput, setLocalInput] = useState({
		title: '',
		id: '',
	});

	let handleChange = (e) => {
		setLocalInput((prev) => ({ ...prev, [e.target.name]: e.target.value }));
		console.log(localInput)
	};

	let handleSubmit = (e) => {
		e.preventDefault();
		dispatch(getFoodByName(localInput));
		setLocalInput({
			title: '',
			id: '',
		});
	};

	/* 	const recipe = useSelector((state) => state.recipes);

	useEffect(() => {
		dispatch(getFoodByName());
	}, [dispatch]); */

	return (
		<div>
			<h3>Estás Get Food By Name Or ID</h3>
			<h3>________________________________________</h3>
			<br />
			<form onSubmit={(e) => handleSubmit(e)}>
				<div>
					<label> Nombre </label>
					<input
						type='text'
						name='title'
						value={localInput.title}
						onChange={(e) => handleChange(e)}
						placeholder='insertar nombre'
					/>
				</div>
				<div>
					<label> ID </label>
					<input
						type='number'
						name='id'
						value={localInput.id}
						onChange={(e) => handleChange(e)}
						placeholder='insertar numero de id'
					/>
				</div>
				<input type='submit' value={'Buscar'} />{' '}
			</form>
			{/* 			<div>
				{recipe &&
					recipe.map((e) => {
						return (
							<div key={e.id}>
								<h3>{e.title}</h3>
								<img src={e.image} alt={e.name} />
								<h3>________________________________________</h3>
							</div>
						);
					})}
			</div> */}
		</div>
	);
}
