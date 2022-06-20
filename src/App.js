import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './pages/Login';
import Profile from './pages/Profile';
import RecipeDrinks from './pages/RecipeDrinks';
import RecipeFoods from './pages/RecipeFoods';
import DetailDrinks from './pages/DetailsDrinks';
import DetailsFoods from './pages/DetailsFoods';
import DoneRecipe from './pages/DoneRecipes';
import Drinks from './pages/Drinks';
import Explore from './pages/Explore';
import ExploreDrinks from './pages/ExploreDrinks';
import ExploreDrinksIngredient from './pages/ExploreDrinksIngredient';
import ExploreFoodsIngredients from './pages/ExploreFoodsIngredients';
import ExploreFoodsNationalities from './pages/ExploreFoodsNationalities';
import FavoriteRecipes from './pages/FavoriteRecipes';
import Foods from './pages/Foods';
import ExploreFoods from './pages/ExploreFoods';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={ Login } />
        <Route path="/foods" component={ Foods } />
        <Route path="/drinks" component={ Drinks } />
        <Route path="/foods/{id-da-receita}" component={ DetailsFoods } />
        <Route path="/drinks/{id-da-receita}" component={ DetailDrinks } />
        <Route path="/foods/{id-da-receita}/in-progress" component={ RecipeFoods } />
        <Route path="/drinks/{id-da-receita}/in-progres" component={ RecipeDrinks } />
        <Route path="/explore" component={ Explore } />
        <Route path="/explore/foods" component={ ExploreFoods } />
        <Route path="/explore/drinks" component={ ExploreDrinks } />
        <Route
          path="/explore/foods/ingredients"
          component={ ExploreFoodsIngredients }
        />
        <Route
          path="/explore/drinks/ingredients"
          component={ ExploreDrinksIngredient }
        />
        <Route
          path="/explore/foods/nationalities"
          component={ ExploreFoodsNationalities }
        />
        <Route path="/profile" component={ Profile } />
        <Route path="/done-recipes" component={ DoneRecipe } />
        <Route path="/favorite-recipes" component={ FavoriteRecipes } />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
