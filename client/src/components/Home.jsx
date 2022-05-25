//import e from 'express';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllFood } from '../redux/actions';

function Home() {
	const dispatch = useDispatch();
	const food = useSelector((state) => state.foods);

	useEffect(() => {
		dispatch(getAllFood());
	}, [dispatch]);

	return (
		<div>
			{food &&
				food.map((e) => {
					return (
						<div key={e.id}>
							<h3>{e.name}</h3>
							<img src={e.image} alt={e.name} />
						</div>
					);
				})}
		</div>
	);
}
export default Home;
