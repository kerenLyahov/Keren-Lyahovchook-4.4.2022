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
  h1{
    color:${({ theme }) => theme.header};
  }
   #truncated, .submit{
     background-color: ${({ theme }) => theme.buttonBackground}; 
     border: 2px solid ${({ theme }) => theme.buttonBorder};
  }
.search{
    background-color: ${({ theme }) => theme.searchBackground}; 
}
  `;
