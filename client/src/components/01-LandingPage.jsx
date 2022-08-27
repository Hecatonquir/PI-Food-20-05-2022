import React from 'react';
import {} from '../redux/actions';
import { Link } from 'react-router-dom';
import { MainDiv } from './styles/MainDiv.styled'; // STYLED COMPONENT
import s from './styles/LandingPage.module.css';

export default function LandingPage() {
	return (
		<MainDiv>
			{/* Acá le podría agregar valores independientes, por ejemplo para cambiar el background o algo así */}
			<div className={`${s.Landing}`}>
				<h1>Weolcome to my FoodAp!</h1>
				<Link to='/home'>
					<button>Enter </button>
				</Link>
			</div>
		</MainDiv>
	);
}
