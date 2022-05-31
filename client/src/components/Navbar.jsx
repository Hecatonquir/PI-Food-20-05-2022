import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Navbar() {
	return (
		<nav>
			{/*<nav> es CASI lo mismo que usar <div> o usar <react.fragment>*/}

			<NavLink to='/'> Home </NavLink>
			<br />
			<NavLink to='/allrecipes'> All recipes </NavLink>
			<br />
			<NavLink to='/recipes'> Get recipes by name or ID </NavLink>
			<br />
			{/* <NavLink to='/recipes/:idReceta'> Get Recipe by ID </NavLink> */}
			<NavLink to='/types'> Load diet types </NavLink>
			<br />
			<NavLink to='/recipe'> Create recipe </NavLink>
			<br />
			<NavLink to='/recetasCreadas'> Recetas Creadas </NavLink>
		</nav>
	);
}
