import React from 'react';
import { BrowserRouter, Link } from 'react-router-dom';

import logo from "../src/assets/Logo2.gif"; // dynamic logo
// import logo from "../src/assets/Logo.png";  // static logo
import Cuisine from "./components/Cuisine";
import Pages from "./pages/Pages";
import Search from "./components/Search";
import { Logo, Nav } from "./styles/myStyledList";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav>
          <Link to={"/"}>
            <Logo src={logo} alt="logo" />
          </Link>
          <Cuisine />
        </Nav>
        <Search />
        <Pages />
      </BrowserRouter>
    </div>
  );
};

export default App;
