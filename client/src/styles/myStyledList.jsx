import styled from "styled-components";
import { NavLink } from "react-router-dom";

/* eslint-disable no-unused-vars */
export const Wrapper = styled.div`
  margin: 3rem 0rem;
`;

export const Card = styled.div`
  height: 18rem;
  border-radius: 2rem;
  overflow: hidden;
  position: relative;

  img {
    border-radius: 2rem;
    position: absolute;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  p {
    position: absolute;
    z-index: 10;
    left: 50%;
    bottom: 0%;
    transform: translate(-50%, 0%);
    color: white;
    height: 30%;
    width: 100%;
    text-align: center;
    font-weight: 600;
    font-size: .9rem;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(31,31,31,0.5);
  }
`;

export const Gradient = styled.div`
  z-index: 3;
  position: absolute;
  height: 100%;
  width: 100%;
  background: linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0.5));
`;

export const Nav = styled.div`
  padding: 1rem 0;
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    font-size: 2rem;
  }
`;

export const Logo = styled.img`
  height: 10rem;
  width: 10rem;
  margin-right: 4rem;

  &:hover {
    transform: scale(1.05);
  }
`;

export const ImageInstructions = styled.img`
  height: 18rem;
  width: 24rem;
`;

export const CardCuisine = styled.div`
  img {
    width: 100%;
    border-radius: 2rem;
  }

  a {
    text-decoration: none;
  }

  h4 {
    text-align: center;
    padding: 1rem;
  }
`;

export const RecipeWrapper = styled.div`
  margin: 5rem 0;
  display: flex;
  overflow-x: auto;

  .active {
    background: linear-gradient(35deg, #494949, #313131);
    color: white;
  }

  h2 {
    font-size: 1.6rem;
    margin-bottom: 2rem;
    max-width: fit-content;
  }

  h3 {
    font-size: 1.2rem;
    margin-top: 2rem;
  }

  li {
    font-size: 1em;
    line-height: 2.2rem;
    text-align: justify;
    ::marker {
      font-weight: bold;
    };
  }

  ul {
    font-size: 1rem;
    margin-top: 1rem;
    text-align: justify;
  }

  p {
    margin-top: 1rem;
    font-size: 1rem;
    line-height: 2.2rem;
    text-align: justify;
  }
`;

export const Button = styled.button`
  padding: 1rem 2rem;
  color: #313131;
  background: white;
  border: 2px solid black;
  margin-right: 2rem;
  font-weight: 600;
`;

export const Info = styled.div`
  margin:0 10rem 0 5rem;

  p {
    font-size: 1rem;
    line-height: 2.2rem;
  }

  a {
    font-size: 1rem;
    line-height: 2.2rem;
  }
`;

export const FormStyle = styled.form`
margin: 0 20rem;

div {
  width: 100%;
  position: relative;
}

input {
  width: 100%;
  border: none;
  background: linear-gradient(35deg, #494949, #313131);
  font-size: 1.2rem;
  color: white;
  padding: 1rem 3rem;
  border: none;
  border-radius: 1rem;
  outline: none;
}

svg {
  position: absolute;
  top: 50%;
  left: 0%;
  transform: translate(100%, -50%);
  color: white;
}
`;

export const GridSearched = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
`;

export const CardSearched = styled.div`
  justify-content: space-between;
  margin-top: 5rem;
  img {
    width: 100%;
    border-radius: 2rem;
    padding: 0 1rem;
  }

  a {
    text-decoration: none;
  }

  h4 {
    text-align: center;
    padding: 1rem;
  }
`;

export const List = styled.div`
  display: flex;
  justify-content: center;
  margin: 1rem 0;
`;

export const LinkCategory = styled(NavLink)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  margin-right: 1rem;
  text-decoration: none;
  background: linear-gradient(35deg, #494949, #313131);
  height: 8rem;
  width: 8rem;
  transform: scale(0.8);
  cursor: pointer;

  h4 {
    color: white;
    font-size: 1rem;
  }

  svg {
    color: white;
    font-size: 1.8rem;
  }

  &:hover {
    background: linear-gradient(to right bottom, #868F96, #596164);
    transition: transform 500ms;
    transform: scale(.9);

    svg {
      color: white;
    }

    h4 {
      color: white;
    }

  }

 &.active {
    background: linear-gradient(to right bottom, #868F96, #596164);

    svg {
      color: white;
    }

    h4 {
      color: white;
    }
  }
`;
