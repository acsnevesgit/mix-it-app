import React from 'react';
import { BrowserRouter, Link } from 'react-router-dom';
import styled from "styled-components";
import { GiKnifeFork } from "react-icons/gi";

import logo from "../src/assets/Logo.png";
import Category from "./components/Category";
import Pages from "./pages/Pages";
import Search from "./components/Search";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav>
          {/* <GiKnifeFork /> */}
          <Logo src={logo} />
          {/* <Logo to={"/"}>Tasty</Logo> */}
          <Category />
        </Nav>
        <Search />
        <Pages />
      </BrowserRouter>
    </div>
  );
};

const Nav = styled.div`
  padding: 1rem 0;
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    font-size: 2rem;
  }
`;

const Logo = styled.img`
  height: 16rem;
  width: 16rem;
  margin-right: 2rem;
`;

export default App;
