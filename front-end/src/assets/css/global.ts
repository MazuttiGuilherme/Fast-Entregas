import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
   body{ 
    font-family: 'Lato', sans-serif;
 }
 a {
   color: #1117A3;
   text-decoration: none;
 }
 html, body, #root {
    height: 100%;
    }
    #root {
        display: flex;
        flex-direction: column;
    }
    #root > main {
        flex: 1;
    }
`