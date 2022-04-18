import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  h1, h2, h3, h4, h5, h6, p, li {
		margin: 0;
    font-family: "Open Sans", sans-serif;
		font-weight: 400;
  }
	
	body {
		margin: 0;
	}
	
	body  {
		height: 100vh;
		& > div {
      height: 100%;
			& > div {
        height: 100%;
      }
		}
	}
`;

export default GlobalStyle;
