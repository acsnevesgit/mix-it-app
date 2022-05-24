import React from 'react';
import { GiChiliPepper, GiBowlOfRice, GiCroissant, GiHotDog, GiFlatfish, GiShrimp, GiNoodles, GiPizzaSlice } from "react-icons/gi";

import { LinkCategory, List } from "../styles/myStyledList";

const Cuisine = () => {
  return (
    <List>
      <LinkCategory className='up' to={'/cuisine/American'}>
        <GiHotDog />
        <h4>American</h4>
      </LinkCategory>
      <LinkCategory className='down' to={'/cuisine/Chinese'}>
        <GiBowlOfRice />
        <h4>Chinese</h4>
      </LinkCategory>
      <LinkCategory className='up' to={'/cuisine/French'}>
        <GiCroissant />
        <h4>French</h4>
      </LinkCategory>
      <LinkCategory className='down' to={'/cuisine/Indian'}>
        <GiChiliPepper />
        <h4>Indian</h4>
      </LinkCategory>
      <LinkCategory className='up' to={'/cuisine/Italian'}>
        <GiPizzaSlice />
        <h4>Italian</h4>
      </LinkCategory>
      <LinkCategory className='down' to={'/cuisine/Greek'}>
        <GiFlatfish />
        <h4>Greek</h4>
      </LinkCategory>
      <LinkCategory className='up' to={'/cuisine/Nordic'}>
        <GiShrimp />
        <h4>Nordic</h4>
      </LinkCategory>
      <LinkCategory className='down' to={'/cuisine/Thai'}>
        <GiNoodles />
        <h4>Thai</h4>
      </LinkCategory>
    </List>
  )
};

export default Cuisine;