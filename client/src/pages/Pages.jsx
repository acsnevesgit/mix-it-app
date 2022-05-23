import React from 'react';
import Home from './Home';
import Cuisine from './Cuisine';
import Recipe from './Recipe';
import Searched from './Searched';
import { Route, Routes, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

const Pages = () => {
  const location = useLocation();
  return (
    <AnimatePresence exitBeforeEnter>
      <Routes Location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/cuisine/:type" element={<Cuisine />} />
        <Route path="/recipes/:type" element={<Recipe />} />
        <Route path="/searched/:search" element={<Searched />} />
      </Routes>
    </AnimatePresence>
  )
};

export default Pages;