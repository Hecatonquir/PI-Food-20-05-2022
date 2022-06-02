import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import './styles/Navbar.css';

export default function Navbar() {
	return (
		<nav>
			<ul>
				<li>
					<NavLink to='/home'> Home </NavLink>
				</li>
				<li>
					<Link to='/allrecipes'> All recipes </Link>
				</li>
				<li>
					<NavLink to='/recipes'> Get recipes by name or ID </NavLink>
				</li>
				<li>
					<NavLink to='/types'> Load diet types </NavLink>
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
