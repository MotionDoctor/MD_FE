import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  /* GmarketSans Medium */
  @font-face {
    font-family: 'Gmarket Sans TTF';
    src: url('/fonts/GmarketSansTTF/GmarketSansTTFMedium.ttf') format('truetype');
    font-weight: 500;
    font-style: normal;
  }

  /* GmarketSans Bold */
  @font-face {
    font-family: 'Gmarket Sans TTF';
    src: url('/fonts/GmarketSansTTF/GmarketSansTTFBold.ttf') format('truetype');
    font-weight: 700;
    font-style: normal;
  }
    
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html,
  body {
    width: 100%;
    max-width: 100vw;
    overflow-x: hidden;
  }

  body::-webkit-scrollbar {
    display: none; /* Chrome/Safari/Webkit */
  }

  body {
    background-color: #f0f0f0;
    height: 100%;
    font-weight: 500; /* 기본 weight는 중간으로 해도 됨 */
    font-family: 'GmarketSans', sans-serif;
  }

  #root {
    height: 100%;
  }
`;

export default GlobalStyle;
