import React from 'react';
import { FaHamburger, FaPizzaSlice } from "react-icons/fa";
import {GiChiliPepper, GiChopsticks, GiCroissant, GiFlatfish, GiDonerKebab, GiNoodles, GiSushis, GiTacos } from "react-icons/gi";

import { LinkCategory, List } from "../styles/myStyledList";

const Category = () => {
  return (
    <List>
      <LinkCategory to={'/cuisine/American'}>
        <FaHamburger />
        <h4>American</h4>
      </LinkCategory>
      <LinkCategory to={'/cuisine/Chinese'}>
        <GiChopsticks />
        <h4>Chinese</h4>
      </LinkCategory>
      <LinkCategory to={'/cuisine/French'}>
        <GiCroissant />
        <h4>French</h4>
      </LinkCategory>
      <LinkCategory to={'/cuisine/Indian'}>
        <GiChiliPepper />
        <h4>Indian</h4>
      </LinkCategory>
      <LinkCategory to={'/cuisine/Italian'}>
        <FaPizzaSlice />
        <h4>Italian</h4>
      </LinkCategory>
      <LinkCategory to={'/cuisine/Mediterranean'}>
        <GiFlatfish />
        <h4>Mediterranean</h4>
      </LinkCategory>
      <LinkCategory to={'/cuisine/Middle Eastern'}>
        <GiDonerKebab />
        <h4>Middle Eastern</h4>
      </LinkCategory>
      <LinkCategory to={'/cuisine/Thai'}>
        <GiNoodles />
        <h4>Thai</h4>
      </LinkCategory>
    </List>
  )
};

export default Category;