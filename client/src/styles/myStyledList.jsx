import styled from "styled-components";

/* eslint-disable no-unused-vars */
export const Wrapper = styled.div`
  margin: 4rem 0rem;
`;

export const Card = styled.div`
  height: 20rem;
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
    height: 40%;
    width: 100%;
    text-align: center;
    font-weight: 600;
    font-size: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(31,31,31,0.5);
  }
`;

export const Gradient = styled.div`
  z-index: 3;
  position: absolute;
  height: 100%,
  width: 100%;
  background: linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0.5));
`;

