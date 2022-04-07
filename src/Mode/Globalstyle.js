import { createGlobalStyle } from "styled-components";
export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    transition: all 0.50s linear;
  }
  a {
    color: ${({ theme }) => theme.text};
  }

  .submit-btn, .unit-btn{
     background-color: ${({ theme }) => theme.buttonBackground}; 
     border: 2px solid ${({ theme }) => theme.buttonBorder};
  }

.search{
    background-color: ${({ theme }) => theme.searchBackground}; 
}
.forecast{
    border-top: 3px solid ${({ theme }) => theme.forecastBackground};
    border-bottom: 3px solid ${({ theme }) => theme.forecastBackground};
}
  `;
