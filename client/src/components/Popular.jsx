import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";

import {Card, Gradient, Wrapper } from "../styles/myStyledList";

const Popular = () => {
  const [popular, setPopular] = useState([]);

  const getPopular = async () => {
    const check = localStorage.getItem("popular");

    if (check) {
      setPopular(JSON.parse(check));
    } else {
      const data = await fetch(`https://api.spoonacular.com/recipes/random?number=10&apiKey=${process.env.REACT_APP_SPOONACULAR_API_KEY}`);
      const popularData = await data.json();
      localStorage.setItem("popular", JSON.stringify(popularData.recipes));
      setPopular(popularData.recipes);
    }
  };

  useEffect(() => {
    getPopular();
  }, []);

  return (
    <div>
      <Wrapper>
        <h3>Popular Choices</h3>
        <Splide options={{
          perPage: 4,
          arrows: true,
          pagination: false,
          drag: "free",
          gap: "5rem",
        }}>
          {popular.map((recipe) => {
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

export default Popular;