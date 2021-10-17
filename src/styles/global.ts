import {createGlobalStyle} from 'styled-components'

export default createGlobalStyle`
  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    text-decoration: none;
    list-style: none;
  }
  
  body {
    font-family: Roboto, sans-serif;
    background: linear-gradient(110.48deg, #2D2D2D 0%, #121212 100%);
  }

  button {
    cursor: pointer;
  }

  button, input {
    border: 0;
    outline: 0;
  }
`;