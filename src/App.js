import React, { useEffect, useState } from "react";
import "./App.css";
import "./components/styles.css";
import Recipe from "./components/recipe";

const App = () => {
  const APP_ID = "babfb8be";
  const APP_KEY = "c0ad6eefeb4d6abb001e92ee78930336";

  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    getRecipes();
  }, []);

  const getRecipes = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    const data = await response.json();
    setRecipes(data.hits);
    console.log(data.hits);
  };

  return (
    <div className="container">
      <form className="form">
        <div className="form-group">
          <input
            type="email"
            className="form-control"
            placeholder="Type Here To Search"
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
