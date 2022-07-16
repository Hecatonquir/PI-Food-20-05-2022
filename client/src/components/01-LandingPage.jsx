import React from 'react';
import {} from '../redux/actions';
import { Link } from 'react-router-dom';
import './styles/home.css';

export default function LandingPage() {
	return (
		<div className='landing'>
			<br />
			<h3>________________________________________</h3>
			<h1>¡Bienvenido a FoodAp!</h1>
			<h3>________________________________________</h3>
			<Link to='/home'>
				<button>Ingresar</button>
			</Link>
		</div>
	);
}
