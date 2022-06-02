import React from 'react';
import { Link } from 'react-router-dom';

export default function CardReceta({ id, title, image, diets, dietTypes }) {

	return (
		<div key={id}>
			<img src={image} alt={title} />
			<br />
			<br />
			<Link to={`/recipes/${id} `}> {title} </Link>
			<div>
				Diet Types:{' '}
				{diets?.length
					? diets[0].title
						? diets.map((e) => e.title).join(' - ')
						: diets.join(' - ')
					: 'No se encontraron Dietas'}
			</div>
			<br />
			<br />
		</div>
	);
}
