import React from 'react';
import { Link } from 'react-router-dom';
import './styles/CardReceta.css';

export default function CardReceta({ id, title, image, diets }) {
	return (
		<React.Fragment key={id}>
			<img src={image} alt={title} />
			<br />
			<br />
			<Link to={`/recipes/${id} `}>{title}</Link>
			<div className='DietTypes'>
				Tipo de dieta:{' '}
				{diets[0]?.title ? diets.map((e) => e.title).join(' - ') : diets.join(' - ')}
			</div>
			<br />
			<br />
		</React.Fragment>
	);
}
