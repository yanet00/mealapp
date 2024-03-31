import React from "react";


function RecipeCard({ recipe }) {
  
  const idMeal = recipe.idMeal;
  const strMeal = recipe.strMeal;
  const strCategory = recipe.strCategory;
  const strMealThumb = recipe.strMealThumb;

  
  return (
    <div className="card">
      
      <img src={strMealThumb} alt={strMeal} className="card-image" />
      
      <div className="card-body">
        <span className="category">{strCategory}</span>
        <h3>{strMeal}</h3>
        
        <a href={"https://www.themealdb.com/meal/" + idMeal} target="_blank" rel="noopener noreferrer">Instruktioner</a>
      </div>
    </div>
  );
}
export default RecipeCard;
