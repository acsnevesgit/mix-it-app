import React, { useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';

import { FormStyle } from "../styles/myStyledList";

const Search = () => {
  const [input, setInput] = useState('');
  const navigate = useNavigate();

  const submitHandler = (event) => {
    event.preventDefault();
    navigate('/searched/' + input)
  };

  return (
    <FormStyle onSubmit={submitHandler}>
      <div>
        <FaSearch />
        <input
          onChange={(event) => setInput(event.target.value)}
          type="text"
          value={input} />
      </div>
    </FormStyle>
  )
};

export default Search;