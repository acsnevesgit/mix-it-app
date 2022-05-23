import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Splide, SplideSlide } from "@splidejs/react-splide";

import {Card, Gradient, Wrapper } from "../styles/myStyledList";

const Cuisine = () => {
  const [cuisine, setCuisine] = useState([]);
  const [diet, setDiet] = useState();
  let params = useParams();

  const getCuisine = async (name) => {
    const check = localStorage.getItem(`${name}`);

    if (check) {
      setDiet(`${name}`);
      setCuisine(JSON.parse(check));
    } else {
      const data = await fetch(`https://api.spoonacular.com/recipes/complexSearch?number=4&apiKey=${process.env.REACT_APP_SPOONACULAR_API_KEY}&cuisine=${name}`);
      const cuisineData = await data.json();
      localStorage.setItem(`${name}`, JSON.stringify(cuisineData.results));
      setDiet(`${name}`);
      setCuisine(cuisineData.results);
    }
  };

  useEffect(() => {
    getCuisine(params.type);
  }, [params.type]);

  return (
    <div>
    <Wrapper>
      <h3>{diet} Cuisine</h3>
      <Splide options={{
        perPage: 4,
        arrows: true,
        pagination: false,
        drag: "free",
        gap: "5rem",
      }}>
        {cuisine.map((recipe) => {
          return (
            <SplideSlide key={recipe.id}>
              <Card>
                <Link to={'/recipes/' + recipe.id}>
                  <p>{recipe.title}</p>
                  <img src={recipe.image} alt={recipe.title}></img>
                  <Gradient />
                </Link>
              </Card>
            </SplideSlide>
          )
        })}
      </Splide>
    </Wrapper>
  </div>
  )
};

export default Cuisine;