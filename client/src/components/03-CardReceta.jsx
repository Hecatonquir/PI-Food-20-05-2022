import React from 'react';
import { Link } from 'react-router-dom';
import './styles/CardReceta.css';

export default function CardReceta({ id, title, image, diets }) {
	return (
		<div key={id}>
			{image ? <img src={image} alt={title} /> : ''}
			<br />
			{title ? (
				<Link to={`/recipes/${id} `}>{title}</Link>
			) : (
				<h3>'No se encontraron Recetas en la api, seguro te quedaste sin Apikeys'</h3>
			)}
			<br />
			<div key={id} className='DietTypes'>
				{diets ? 'Tipo de dieta: ' : null}
				{diets
					? diets[0]?.title
						? diets.map((e) => e.title).join(' - ')
						: diets.join(' - ')
					: ''}
			</div>
		</div>
	);
}
