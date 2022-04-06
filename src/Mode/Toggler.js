import React from "react";
import { func, string } from "prop-types";
import styled from "styled-components";
const Button = styled.button`
  content: ${({ theme }) => theme.content};
  background: ${({ theme }) => theme.background};
  border: 2px solid ${({ theme }) => theme.toggleBorder};
  color: ${({ theme }) => theme.toggleText};
  border-radius: 15px;
  cursor: pointer;
  padding: 5px 10px;
  font-family: "Balsamiq Sans", cursive;
  float: right;
  position: relative;
  right: 10px;
`;
const Toggle = ({ theme, toggleTheme }) => {
  return <Button onClick={toggleTheme}>Switch theme</Button>;
};

Toggle.propTypes = {
  theme: string.isRequired,
  toggleTheme: func.isRequired,
};
export default Toggle;
