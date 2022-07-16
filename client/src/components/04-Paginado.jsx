import React from 'react';

export default function Paginado({ recipesPerPage, allRecipes, paginado }) {
	const amountOfPages = Math.ceil(allRecipes / recipesPerPage);
	const pageArr = [];
	for (let i = 1; i <= amountOfPages; i++) {
		pageArr.push(i);
	}
	
	return (
		<React.Fragment>
			<nav className='paginado'>
				{pageArr?.map((n) => (
					// eslint-disable-next-line jsx-a11y/anchor-is-valid
					<a className='pageNum' key={n}>
						<button key={n} onClick={() => paginado(n)}>{n}</button>
					</a>
				))}
			</nav>
		</React.Fragment>
	);
}
