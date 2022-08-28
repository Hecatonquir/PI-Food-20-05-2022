import styled from 'styled-components';

export const MainDiv = styled.div`
	/* Acá le podría agregar valores independientes, por ejemplo para cambiar el background o algo así. Para recibir esos valores, tengo que poner: (props) => props.ALGO; */
	display: flex;
	flex-direction: column;
	margin: 1rem;
	padding: 1rem;
	min-height: 90vh;
	//justify-content: space-between;
	align-items: center;
	align-content: center;
	border: 0.5rem solid var(--bronce-color);
`;

/* div.wrapper {
	display: grid;
	grid-template-rows: 540px 540px 540px;
	grid-template-columns: 540px 540px 540px;
	border-radius: 10%;
}

background-color: ${({ theme }) => theme.colors['Color-1']};

	h1 {
		color: ${({ theme }) => theme.colors['Color-5'] || 'white'};
	}

h4 {
	background-color: aquamarine;
} */
