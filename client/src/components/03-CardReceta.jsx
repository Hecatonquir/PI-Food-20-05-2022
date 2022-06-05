import React from 'react';
import { Link } from 'react-router-dom';
import './styles/CardReceta.css';

export default function CardReceta({ id, title, image, diets }) {
	return (
		<div key={id}>
			<img src={image} alt={title} />
			<br />
			<Link to={`/recipes/${id} `}>{title}</Link>
			<br />
			<div className='DietTypes'>
				Tipo de dieta:{' '}
				{diets[0]?.title ? diets.map((e) => e.title).join(' - ') : diets.join(' - ')}
			</div>
			<br />
			<br />
		</div>
	);
}
