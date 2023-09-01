import { createGlobalStyle } from "styled-components";
import { reset } from "styled-reset";

const GlobalStyle = createGlobalStyle`
  ${reset}

  #root, 
  body,html {
    margin: 0;
    padding: 0;

    width: 100%;
    height: 100%;
    margin: 0 auto;
    font-size: 62.5%;

    -webkit-touch-callout:none;
    -webkit-user-select:none;
    -webkit-tap-highlight-color:rgba(0,0,0,0);


  }

  
  * {
    box-sizing: border-box;
	}

  button:hover {
    cursor: pointer;
  }
  
  a, a:visited {
    text-decoration: none;
    color: black;
  }
  input:focus {
    outline: none;
  }
  textarea:focus {
    outline: none;
  }

  *::-webkit-scrollbar {
      width: 0.4em
  }
  *::-webkit-scrollbar-track{
      -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.00)
  }
  *::-webkit-scrollbar-thumb {
      background-color: rgba(0,0,0,.1);
  }
`;

export default GlobalStyle;
