import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";

import { Card, Gradient, Wrapper } from "../styles/myStyledList";

const Vegetarian = () => {
  const [vegetarian, setVegetarian] = useState([]);

  const getVegetarian = async () => {
    const check = localStorage.getItem("vegetarian");

    if (check) {
      setVegetarian(JSON.parse(check));
    } else {
      const data = await fetch(`https://api.spoonacular.com/recipes/random?number=10&apiKey=${process.env.REACT_APP_SPOONACULAR_API_KEY}&tags=vegetarian`);
      const vegetarianData = await data.json();
      localStorage.setItem("vegetarian", JSON.stringify(vegetarianData.recipes));
      setVegetarian(vegetarianData.recipes);
    }
  };

  useEffect(() => {
    getVegetarian();
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
          {vegetarian.map((recipe) => {
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

export default Vegetarian;