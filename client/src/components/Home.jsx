import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllRecipes } from '../redux/actions';

function Home() {
	const dispatch = useDispatch();
	const recipe = useSelector((state) => state.recipes);

	useEffect(() => {
		dispatch(getAllRecipes());
	}, [dispatch]);

	return (
		<div>
			{recipe &&
				recipe.map((e) => {
					return (
						<div key={e.id}>
							<h3>{e.title}</h3>
							<img src={e.image} alt={e.name} />
							<h3>________________________________________</h3>
						</div>
					);
				})}
		</div>
	);
}
export default Home;
