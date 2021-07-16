



import 'bootstrap/dist/css/bootstrap.min.css'
import "./styles.css";

import Recipes from "./components/Recipes";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './components/Home';
import RecipeForm from './containers/RecipeForm';
export default function App() {
  

  return (
    <Router>
    <main>
      {/* navbar */}
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/recipes' exact component={Recipes} />
        <Route exact path='/recipes/new' component={RecipeForm}/>
        
      </Switch>
    </main>
  </Router>
  );
}
