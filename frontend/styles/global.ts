import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @tailwind base;
  @tailwind components;
  @tailwind utilities;

  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
`;

const theme = {
  colors: {
    colorPrimary: 'rgba(48,46,83,1)',
    colorPrimaryOpacity: 'rgba(48,46,83,0.5)',
    colorSecundary: 'rgba(30,32,34,1)',
    colorSecundaryopacity: 'rgba(30,32,34,0.5)',
    colorActive: 'rgba(208,112,23,1)',
    colorActiveOpacity: 'rgba(208,112,23,0.8)',
    backgroundPrimary: 'rgba(248,248,255,1)'
  }
}

// font-family: 'Roboto Condensed', sans-serif;

export { GlobalStyle, theme };