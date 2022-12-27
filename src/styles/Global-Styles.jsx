import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
* {
    margin:0;
    padding: 0;
    background: #eee;
    box-sizing: border-box;
    /* outline:solid red 1px; */

}
body {
   margin: 0;
   font-family: sans-serif;

  }

`;
export default GlobalStyle;
