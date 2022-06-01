import React from 'react';
import { connect } from 'react-redux';
import Receta from './03-CardReceta';

export function RecetasCreadas({ recipes }) {
	let createdRecipes = recipes.filter((e) => typeof e.id === typeof e.id.toString());
	console.log(createdRecipes);
	let handleDelete = (e) => {
		e.preventDefault();
	};

	return (
		<React.Fragment>
			<div>
				{createdRecipes?.map((e) => (
					<div key={e.id}>
						<Receta
							key={e.id}
							id={e.id}
							title={e.title}
							summary={e.summary}
							aggregateLikes={e.aggregateLikes}
							healthScore={e.healthScore}
							analyzedInstructions={e.analyzedInstructions}
							image={e.image}
						/>
						<button onClick={(ev) => handleDelete(ev, e.id)}>ELIMINAR</button>
						<h3>_______________________________</h3>
						<br />
					</div>
				))}
			</div>
		</React.Fragment>
	);
}

function mapStateToProps(state) {
	return {
		recipes: state.recipes,
	};
}

export default connect(mapStateToProps, null)(RecetasCreadas);
