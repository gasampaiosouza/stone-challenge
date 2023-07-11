import { createGlobalStyle } from 'styled-components';
 
const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
  }

  body, button, input {
    color: #2E3742;
    font-family: Roboto, Helvetica, Sans-Serif;
  }
`;
 
export default GlobalStyle;