import React from 'react';
import PaginadoCss from './styles/Paginado.module.css';

export default function Paginado({ recipesPerPage, allRecipes, paginado, actualPage }) {
	const amountOfPages = Math.ceil(allRecipes / recipesPerPage);
	const pageArr = [];
	for (let i = 1; i <= amountOfPages; i++) {
		pageArr.push(i);
	}

	return (
		<React.Fragment>
			<nav className={PaginadoCss.Main}>
				{pageArr?.map((n) => (
					// eslint-disable-next-line jsx-a11y/anchor-is-valid
					<button
						key={n}
						onClick={() => paginado(n)}
						className={n === actualPage ? PaginadoCss.active : ''}>
						{n}
					</button>
				))}
			</nav>
		</React.Fragment>
	);
}
