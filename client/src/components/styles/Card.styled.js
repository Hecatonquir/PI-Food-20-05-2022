import styled from 'styled-components';
import CardReceta from './03-CardReceta';

export const CardStyled = styled.CardReceta`
	/* Acá le podría agregar valores independientes, por ejemplo para cambiar el background o algo así. Para recibir esos valores, tengo que poner: (props) => props.ALGO; */
	.Main {
		background-image: url('https://cdn.pixabay.com/photo/2017/06/13/13/51/marble-2398946_1280.jpg');
		color: var(--brown-color);
		border-radius: 5px;
		font-weight: bolder;
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
	}
	.Main a {
		font-family: var(--font-base);
		font-size: 35px;
		font-weight: bolder;
		color: var(--black-color);
	}

	.Main a:hover {
		transition: 0.5s;
		color: var(--gold-color);
	}
	.Main h3 {
		color: var(--gold-color);
	}

	.img__wrap {
		position: relative;
		height: 100%;
		width: 100%;
	}
	.img__img {
		width: 100%;
	}
	.img__wrap:hover .img__img {
		transform: scale(1.1);
		transition: 1s;
	}
	.img__wrap:hover .img__description {
		visibility: visible;
		opacity: 1;
		transform: scale(1.1);
		transition: 1s;
	}
	.img__description {
		position: absolute;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		visibility: hidden;
		opacity: 0;
		transition: opacity 0.2s, visibility 0.2s;
		background: rgba(0, 0, 0, 0.6);
		height: 98.7%;
	}
`;
