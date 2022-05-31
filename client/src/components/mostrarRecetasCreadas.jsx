import React from 'react';
import { connect } from 'react-redux';
import Receta from './receta';

export function RecetasCreadas({ recipes }) {
	let handleDelete = (e) => {
		e.preventDefault();
		
	};

	return (
		<div>
			{recipes?.map((e) => (
				<div>
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
				</div>
			))}
		</div>
	);
}

function mapStateToProps(state) {
	return {
		recipes: state.recipes,
	};
}

export default connect(mapStateToProps, null)(RecetasCreadas);
