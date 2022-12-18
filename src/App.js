import React, { useEffect, useState } from "react";
import Recipe from "./components/Recipe";
import "./Recipe.css";

const App = () => {
  const APP_ID = "e0ccc8bf";
  const APP_KEY = "b21d6472bae372b8cbdf6d3117b3b8a7";

  const [recepies, setRecepies] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("");

  useEffect(() => {
    getRecipes();
  }, [query]);

  const getRecipes = async () => {
    const response = await fetch(
      `https://api.edamam.com/api/recipes/v2?type=public&q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
    );

    const data = await response.json();
    // console.log(data.hits);
    // console.log(data);
    setRecepies(data.hits);
  };

  const getSearch = (e) => {
    e.preventDefault();
    setQuery(search);
    setSearch("");
  };

  return (
    <>
      <form onSubmit={getSearch}>
        <div className="MainDiv">
          <input
            type="text"
            value={search}
            placeholder="Search recipe..."
            onChange={(e) => setSearch(e.target.value)}
            className="MainInput"
          />
          <button type="submit" className="MainBtn">
            Search
          </button>
        </div>
      </form>
      {recepies.map((recipe, index) => (
        <Recipe
          key={index}
          title={recipe.recipe.label}
          image={recipe.recipe.image}
          ingredients={recipe.recipe.ingredients}
          healthLabels={recipe.recipe.healthLabels}
          cuisineType={recipe.recipe.cuisineType}
        />
      ))}
    </>
  );
};

export default App;
