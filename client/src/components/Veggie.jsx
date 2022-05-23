import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";

import {Card, Gradient, Wrapper } from "../styles/myStyledList";

const Veggie = () => {
  const [veggie, setVeggie] = useState([]);

  const getVeggie = async () => {
    const check = localStorage.getItem("veggie");

    if (check) {
      setVeggie(JSON.parse(check));
    } else {
      const api = await fetch(`https://api.spoonacular.com/recipes/random?number=10&apiKey=${process.env.REACT_APP_SPOONACULAR_API_KEY}&tags=vegetarian`);
      const data = await api.json();
      localStorage.setItem("veggie", JSON.stringify(data.recipes));
      setVeggie(data.recipes);
    }
  };

  useEffect(() => {
    getVeggie();
  }, []);

  return (
    <div>
      <Wrapper>
        <h3>Vegetarian Choices</h3>
        <Splide options={{
          perPage: 4,
          arrows: true,
          pagination: false,
          drag: "free",
          gap: "5rem",
        }}>
          {veggie.map((recipe) => {
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

export default Veggie;