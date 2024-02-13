"use client";

import { createGlobalStyle } from "styled-components";
const styled = { createGlobalStyle };

import { Saira } from "next/font/google";
const saira = Saira({ subsets: ["latin"] });

const GlobalStyles = styled.createGlobalStyle`
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  html,
  body {
    max-width: 100vw;
    overflow-x: hidden;
    font-family: ${saira.style.fontFamily};
  }

  a {
    color: inherit;
    text-decoration: none;
  }
`;

export default GlobalStyles;
