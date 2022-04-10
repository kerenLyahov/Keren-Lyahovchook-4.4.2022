import React from "react";
import { func, string } from "prop-types";
import styled from "styled-components";
const Button = styled.button`
  content: ${({ theme }) => theme.content};
  background: ${({ theme }) => theme.background};
  border: 2px solid ${({ theme }) => theme.toggleBorder};
  color: ${({ theme }) => theme.toggleText};
  font-weight: 400;
  line-height: 1.5;
  cursor: pointer;
  font-family: inherit;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  border-radius: 0.25rem;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
`;
const Toggle = ({ theme, toggleTheme }) => {
  return <Button onClick={toggleTheme}>switch theme</Button>;
};

Toggle.propTypes = {
  theme: string.isRequired,
  toggleTheme: func.isRequired,
};
export default Toggle;
