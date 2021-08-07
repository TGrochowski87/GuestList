import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body{
    font-family: 'Montserrat', sans-serif;
    width: 100%;
    background-color: #3B325D;
    color: whitesmoke;
}

`;

export default GlobalStyles;
