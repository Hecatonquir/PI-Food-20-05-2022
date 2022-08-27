import './App.css';
import { Route } from 'react-router-dom';
import LandingPage from './components/01-LandingPage';
import Home from './components/02-Home';
import NewRecipe from './components/07-CreateRecipe';
import DetalleRecetaCreada from './components/06-DetalleReceta';
import RecetasCreadas from './components/08-mostrarRecetasCreadas';
//import { ThemeProvider } from 'styled-components';
//import { theme } from './components/styles/Theme'; // AL FINAL NO USO ESTO

function App() {
	return (
		//<ThemeProvider theme={theme}>
		<div className='App'>
			<Route exact path={'/'} component={LandingPage} />
			<Route exact path={'/home'} component={Home} />
			<Route exact path={'/recipe'} component={NewRecipe} />
			<Route exact path={'/recipes/:id'} component={DetalleRecetaCreada} />
			<Route exact path={'/recetasCreadas'} component={RecetasCreadas} />
		</div>
		//</ThemeProvider>
	);
}

export default App;
