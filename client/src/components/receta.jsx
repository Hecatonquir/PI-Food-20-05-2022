import React from 'react';
import { Link } from 'react-router-dom';

export default function Receta({
	id,
	title,
	summary,
	aggregateLikes,
	healthScore,
	analyzedInstructions,
	image,
}) {
	return (
		<div>
			<Link to={`/recipes/${id}`}> nombre: {title} </Link>
			<div>ID: {id} </div>
			<div>summary: {summary}</div>
			<div>aggregateLikes: {aggregateLikes}</div>
			<div>healthScore: {healthScore}</div>
			<div>analyzedInstructions: {analyzedInstructions}</div>
			<div>image: {image}</div>
			<br />
		</div>
	);
}
