import React, { useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { FaSearch } from 'react-icons/fa';

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
        onChange={(event) => (event.target.value) }
        type="text"
        value={input} />
      </div>
    </FormStyle>
  )
};

const FormStyle = styled.form`
margin: 0 20rem;

div {
  width: 100%;
  position: relative;
}

input {
  width: 100%;
  border: nine;
  background: linear-gradient(35deg, #494949, #313131);
  font-size: 1.5rem;
  color: white;
  padding: 1rem 3 rem;
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

export default Search;