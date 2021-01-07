import React, { useEffect, useState } from "react";
import "./App.css";
import "./components/styles.css";
import Recipe from "./components/recipe";

const App = () => {
  const APP_ID = "babfb8be";
  const APP_KEY = "c0ad6eefeb4d6abb001e92ee78930336";

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("chicken");

  useEffect(() => {
    getRecipes();
  }, [query]);

  const getRecipes = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
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
    <div className="container">
      <form onSubmit={getSearch} className="form">
        <div className="form-group">
          <input
            type="text"
            className="form-control search-field"
            placeholder="Type To Search"
            value={search}
            onChange={updateSearch}
          />
          <button type="submit" className="btn btn-info btn-md">
            Search
          </button>
        </div>
      </form>
      <div className="cards">
        {recipes.map((recipe, index) => (
          <Recipe
            key={index}
            url={recipe.recipe.url}
            title={recipe.recipe.label}
            calories={recipe.recipe.calories}
            image={recipe.recipe.image}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
