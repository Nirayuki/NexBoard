import { createGlobalStyle } from 'styled-components';
 
const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background: #1C1C1C;
    font-family: Open-Sans, Helvetica, Sans-Serif;

    input:focus{
      outline: none;
    }

    textarea:focus{
      outline: none;
    }
     
    &::-webkit-scrollbar{
        border: none;
        width: 10px;
        height: 0.1rem;
        border-radius: 5px;

    }

    &::-webkit-scrollbar-thumb{
        background-color: #5b5b5b;
        border-radius: 5px;
    }

  }
`;
 
export default GlobalStyle;