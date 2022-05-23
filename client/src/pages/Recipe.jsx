import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { ImageInstructions, Info, DetailWrapper, Button } from "../styles/myStyledList";

const Recipe = () => {
  let params = useParams();
  const [activeTab, setActiveTab] = useState("instructions");
  const [details, setDetails] = useState({});
  const [ingredientsPics, setIngredientsPics] = useState({});

  console.log('activeTab', activeTab);
  console.log('details', details);

  const getDetails = async (id) => {
    const data = await fetch(`https://api.spoonacular.com/recipes/${id}/information?apiKey=${process.env.REACT_APP_SPOONACULAR_API_KEY}`);
    const detailData = await data.json();
    console.log('detailData', detailData);
    setDetails(detailData);
  };

  // const getIngredientsPics = async (id) => {
  //   const data = await fetch(`https://api.spoonacular.com/recipes/${id}/ingredientWidget?apiKey=${process.env.REACT_APP_SPOONACULAR_API_KEY}`);
  //   const ingredientsPics = await data.json();
  //   console.log('ingredientsData', ingredientsPics);
  //   setIngredientsPics(ingredientsPics);
  // };

  useEffect(() => {
    getDetails(params.type);
  }, [params.type]);

  return (
    <div>

      <DetailWrapper>
        <div>
          <h2>{details.title}</h2>
          <ImageInstructions src={details.image} alt="details" />
        </div>
        <Info>
          <Button className={activeTab === "instructions" ? "active" : ""} onClick={() => setActiveTab("instructions")}>Instructions</Button>
          <Button className={activeTab === "ingredients" ? "active" : ""} onClick={() => setActiveTab("ingredients")}>Ingredients</Button>
          {activeTab === "instructions" && (
            <div>
              <h3>Summary</h3>
              <p dangerouslySetInnerHTML={{ __html: details.summary }}></p>
              <h3>Step-by-step</h3>
              <p dangerouslySetInnerHTML={{ __html: details.instructions }}></p>
            </div>
          )}
          {activeTab === "ingredients" && (
            <div>
              <h3>Ingredients</h3>
              <ul>
                {details.extendedIngredients.map((ingredient) => (
                  <li key={ingredient.id}>{ingredient.original}</li>
                ))}
              </ul>
            </div>
          )}
        </Info>
      </DetailWrapper>
    </div>
  )
};

export default Recipe;