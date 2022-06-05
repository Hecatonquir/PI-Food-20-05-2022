import React from 'react';
import { NavLink } from 'react-router-dom';
import './styles/Navbar.css';

export default function Navbar() {
	return (
		<nav>
			<ul>
				<li>
					<NavLink to='/home'> Home </NavLink>
				</li>
				<li>
					<NavLink to='/recipe'> Create recipe </NavLink>
				</li>
				<li>
					<NavLink to='/recetasCreadas'> Recetas Creadas </NavLink>
				</li>
			</ul>
		</nav>
	);
}
