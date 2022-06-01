import React from 'react';
import {} from '../redux/actions';
import { Link } from 'react-router-dom';

export default function LandingPage() {
	return (
		<div>
			<h3>________________________________________</h3>
			<h1>Estás en Landing Page</h1>
			<h3>________________________________________</h3>
			<Link to='/home'><button>Ingresar</button></Link>
		</div>
	);
}
