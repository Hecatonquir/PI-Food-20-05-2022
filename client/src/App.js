import './App.css';
import { Route } from 'react-router-dom';

import Navbar from './components/00-Navbar';
import LandingPage from './components/01-LandingPage';
import Home from './components/02-Home';
import RecipeName from './components/getFoodByName';
import loadDietTypes from './components/getTypes';
import NewRecipe from './components/newRecipe';
import AllRecipes from './components/AllRecipes';
import DetalleRecetaCreada from './components/DetalleRecetaCreada';
import RecetasCreadas from './components/mostrarRecetasCreadas';

function App() {
	return (
		<div className='App'>
			<Route path={'/'} component={Navbar} /> {/*IDEM A: <Navbar />*/}
			<h3>MAXI FOOD</h3>
			<Route exact path={'/'} component={LandingPage} />
			<Route exact path={'/home'} component={Home} />
			<Route exact path={'/recipes'} component={RecipeName} />
			{/* <Route exact path={'/recipes/:idReceta'} component={getFoodByID} /> */}
			{/* CREO q a estas 2 las puedo poner en una sola url que reciba datos por query */}
			<Route exact path={'/types'} component={loadDietTypes} />
			<Route exact path={'/recipe'} component={NewRecipe} />
			<Route exact path={'/allrecipes'} component={AllRecipes} />
			<Route exact path={'/recipes/:id'} component={DetalleRecetaCreada} />
			<Route exact path={'/recetasCreadas'} component={RecetasCreadas} />
		</div>
	);
}

export default App;
