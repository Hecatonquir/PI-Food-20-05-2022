import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllRecipes } from '../redux/actions';
import { Link } from 'react-router-dom';

function AllRecipes() {
	const dispatch = useDispatch();
	const recipe = useSelector((state) => state.recipes);

	useEffect(() => {
		dispatch(getAllRecipes());
	}, [dispatch]);

	return (
		<div>
			<h1>Estas en All Recipes</h1>
			<h1>_________________________________</h1>
			{recipe &&
				recipe.map((e) => {
					return (
						<div key={e.id}>
							<Link to={`/recipes/${e.id}`}>{e.title}</Link>
							<br />
							<img src={e.image} alt={e.name} />

							<h3>________________________________________</h3>
						</div>
					);
				})}
		</div>
	);
}
export default AllRecipes;
