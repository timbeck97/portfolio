import { createGlobalStyle } from "styled-components"


export default createGlobalStyle`
  
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }
  html, body, #root {
    height: 100%;
  }
  body {
    font: 15px 'Comfortaa', sans-serif;
    background: #131313;
    color: #FFFFFF;
    -webkit-font-smoothing: antialiased !important;
  }
  div{
    display:flex;
    flex-direction:column;
    align-items:center;
    width:100%;
  }
  ul {
    list-style: none;
  }
`