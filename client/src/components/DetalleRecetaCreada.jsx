import React from 'react';
import { connect /* , useDispatch, useSelector */ } from 'react-redux';
import { getDetail } from '../redux/actions';

export function DetalleRecetaCreada(props) {
	let id = props.match.params.id;

	/* 	let dispatch = useDispatch();
	let detail = useSelector((state) => state.detail); */
	/* esto es para el metodo sin usar el connect */

	React.useEffect(() => {
		props.getDetail(id);
	}, [props, id]);
	console.log('PROPS.DETAAAAAAAAAAAAAAAAAAAAAAIIIL');
	console.log(props.detail);
	console.log();
	return (
		<div>
			<h2>El usuario con Id: {id}</h2>
			{Object.keys(props.detail).length > 0 ? (
				<div>
					<h4>ESTO ES EL TITULO: {props.detail.title}</h4>
					<h5>ESTO ES LA IMAGEN: {props.detail.image}</h5>
				</div>
			) : null}
		</div>
	);
}

function mapStateToProps(state) {
	return {
		detail: state.detail,
	};
}

function mapDispatchTo(dispatch) {
	return {
		getDetail: (id) => dispatch(getDetail(id)),
	};
}

export default connect(mapStateToProps, mapDispatchTo)(DetalleRecetaCreada);
