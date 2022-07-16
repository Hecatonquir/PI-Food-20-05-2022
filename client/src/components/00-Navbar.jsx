import React from 'react';
import { NavLink } from 'react-router-dom';
import './styles/Navbar.css';

export default function Navbar() {
	return (
		<nav>
			<ul>
				<li key='1'>
					<NavLink to='/home'> Home </NavLink>
				</li>
				<li key='2'>
					<NavLink to='/recipe'> Create recipe </NavLink>
				</li>
				<li key='3'>
					<NavLink to='/recetasCreadas'> Recetas Creadas </NavLink>
				</li>
			</ul>
		</nav>
	);
}
