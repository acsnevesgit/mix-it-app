import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { ImageInstructions, Info, RecipeWrapper, Button } from "../styles/myStyledList";

const Recipe = () => {
  let params = useParams();
  const [activeTab, setActiveTab] = useState("instructions");
  const [recipe, setRecipe] = useState({});

  console.log('recipe', recipe);

  // Alternative 1 -> ingredients in bullet list format
  const getRecipe = async (id) => {
    const check = localStorage.getItem("recipe");

    if (check) {
      setRecipe(JSON.parse(check));
    } else {
      const data = await fetch(`https://api.spoonacular.com/recipes/${id}/information?apiKey=${process.env.REACT_APP_SPOONACULAR_API_KEY}`);
      const recipeData = await data.json();
      localStorage.setItem("recipe", JSON.stringify(recipeData));
      setRecipe(recipeData);
    }
  };

  useEffect(() => {
    getRecipe(params.type);
  }, [params.type]);

  return (
    <div>
      <RecipeWrapper>
        <div>
          <h2>{recipe.title}</h2>
          <ImageInstructions src={recipe.image} alt="details" />
          {/* <h3>Dietary Restrictions</h3>
          <ul>
            {recipe.diets.map((diet) => (
              <li key={diet.id}>{diet}</li>
            ))}
          </ul> */}
        </div>
        <Info>
          <Button className={activeTab === "instructions" ? "active" : ""} onClick={() => setActiveTab("instructions")}>Instructions</Button>
          <Button className={activeTab === "ingredients" ? "active" : ""} onClick={() => setActiveTab("ingredients")}>Ingredients</Button>
          {activeTab === "instructions" && (
            <div>
              <h3>Summary</h3>
              <p dangerouslySetInnerHTML={{ __html: recipe.summary }}></p>
              <h3>Step-by-step</h3>
              <p dangerouslySetInnerHTML={{ __html: recipe.instructions }}></p>
            </div>
          )}
          {activeTab === "ingredients" && (
            <div>
              <h3>Ingredients</h3>
              <ul>
                {recipe.extendedIngredients.map((ingredient) => (
                  <li key={ingredient.id}>{ingredient.original}</li>
                ))}
              </ul>
            </div>
          )}
        </Info>
      </RecipeWrapper>
    </div>
  )
};

export default Recipe;