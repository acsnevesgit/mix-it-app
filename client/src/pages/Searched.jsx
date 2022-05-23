import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

import { CardSearched, GridSearched } from "../styles/myStyledList";

const Searched = () => {
  const [searchedRecipes, setSearchedRecipes] = useState([]);
  let params = useParams();

  const getSearched = async (name) => {
    const data = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_SPOONACULAR_API_KEY}&query=${name}`);
    const recipes = await data.json();
    setSearchedRecipes(recipes.results);
  };

  useEffect(() => {
    getSearched(params.search);
  }, [params.search]);

  return (
    <GridSearched>
      {searchedRecipes.map((item) => {
        return (
          <CardSearched key={item.id}>
            <Link to={'/recipes/' + item.id}>
              <img src={item.image} alt='' />
              <h4>{item.title}</h4>
            </Link>
          </CardSearched>
        )
      })}
    </GridSearched>
  )
};

export default Searched;