
import Recipe from "../components/RecipeCard";

import React, { useEffect, useState } from "react";


export default function Recipes() {
  const APP_KEY = "2853e9ccf22f104dab4034e2f9766207";
  const APP_ID = "6957ebee";

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("kale");

  const url = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`;

  useEffect(() => {
    getRecipes();
  }, [query]);

  const getRecipes = async () => {
    const response = await fetch(url);
    const data = await response.json();
    setRecipes(data.hits);
    console.log(data.hits);
  };

  const updateSearch = (e) => {
    setSearch(e.target.value);
  };

  const getSearch = (e) => {
    e.preventDefault();
    setQuery(search);
  };

  return (
    <div className="App">
      <div className="hero">
       
        <div>
          <h1 className="hero-title">Recipe app</h1>
          
          
        </div>

        <form onSubmit={getSearch} className="search-form" placeholder="Search for recipes">
          <input
            className="search-bar"
            value={search}
            onChange={updateSearch}
          />
          <button className="search-btn" type="submit">
            search
          </button>
        </form>
    
      </div>
      <div className="wrapper">
        {recipes.map((recipe) => (
          <Recipe
            key={recipe.recipe.calories}
            title={recipe.recipe.label}
            cal={recipe.recipe.calories}
            image={recipe.recipe.image}
            ingredients={recipe.recipe.ingredients}
            time={recipe.recipe.totalTime}
            source={recipe.recipe.url}
            servings={recipe.recipe.yeild}
          />
        ))}
      </div>
    </div>
  );
}
