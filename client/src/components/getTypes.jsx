import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getTypes } from '../redux/actions';

function DietTypes() {
	const dispatch = useDispatch();
	const recipe = useSelector((state) => state.types);
	useEffect(() => {
		dispatch(getTypes());
	}, [dispatch]);

	return (
		<div>
			<h1>Estas en Diet Types</h1>
			<h1>_________________________________</h1>
			{recipe &&
				recipe.map((e) => {
					return (
						<div>
							<h3>{e}</h3>

							<h3>_________________________________</h3>
						</div>
					);
				})}
		</div>
	);
}
export default DietTypes;
