import './App.css';
import { Route } from 'react-router-dom';

import Navbar from './components/00-Navbar';
import LandingPage from './components/01-LandingPage';
import Home from './components/02-Home';
import NewRecipe from './components/07-CreateRecipe';
import DetalleRecetaCreada from './components/06-DetalleReceta';
import RecetasCreadas from './components/08-mostrarRecetasCreadas';

function App() {
	return (
		<div className='App'>
			<Route path={'/'} component={Navbar} /> {/*IDEM A: <Navbar />*/}
			<h3> MAXI FOOD </h3>
			<Route exact path={'/'} component={LandingPage} />
			<Route exact path={'/home'} component={Home} />
			<Route exact path={'/recipe'} component={NewRecipe} />
			<Route exact path={'/recipes/:id'} component={DetalleRecetaCreada} />
			<Route exact path={'/recetasCreadas'} component={RecetasCreadas} />
		</div>
	);
}

export default App;
