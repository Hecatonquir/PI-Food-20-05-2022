import React from 'react';
import { Link } from 'react-router-dom';
import CardCSS from './styles/CardReceta.module.css';

export default function CardReceta({ id, title, image, diets, dish, cuisines, healthScore }) {
	return (
		<div key={id} className={CardCSS.Main}>
			<div className={CardCSS.img__wrap}>
				<img src={image} alt={title} className={CardCSS.img__img} />
				<div className={CardCSS.img__description}>
					<h3>Diets: {diets.join(', ')}</h3>
					<br />
					<h3>Dish: {dish}</h3>
					<br />
					<h3>Cuisine: {cuisines.length ? cuisines.join(', ') : 'Global'}</h3>
					{/* <br />
					<h3>{healthScore}</h3> */}
				</div>
			</div>
			<br />
			<div style={{ height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
				{title ? (
					<Link to={`/recipes/${id} `}>{title}</Link>
				) : (
					<h3>'No se encontraron Recetas en la api, seguro te quedaste sin Apikeys'</h3>
				)}
			</div>
			{/* <div key={id} className='DietTypes'>
				{diets ? 'Tipo de dieta: ' : null}
				{diets
					? diets[0]?.title
						? diets.map((e) => e.title).join(' - ')
						: diets.join(' - ')
					: ''}
			</div> */}
		</div>
	);
}
