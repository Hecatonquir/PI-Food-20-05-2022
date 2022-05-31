import './App.css';
//import { Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import { Route } from 'react-router-dom';
import Home from './components/Home';
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
			<Route exact path={'/'} component={Home} />
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
