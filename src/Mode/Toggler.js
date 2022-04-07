import React from "react";
import { func, string } from "prop-types";
import styled from "styled-components";
const Button = styled.button`
  content: ${({ theme }) => theme.content};
  background: ${({ theme }) => theme.background};
  border: 2px solid ${({ theme }) => theme.toggleBorder};
  color: ${({ theme }) => theme.toggleText};
  padding: 0 0.5rem;
  border-radius: 0.2rem;
  font-weight: 400;
  line-height: 1.5;
  font-size: 1rem;
  border-radius: 0.25rem;
  cursor: pointer;
  font-family: inherit;
`;
const Toggle = ({ theme, toggleTheme }) => {
  return <Button onClick={toggleTheme}>Switch theme</Button>;
};

Toggle.propTypes = {
  theme: string.isRequired,
  toggleTheme: func.isRequired,
};
export default Toggle;
