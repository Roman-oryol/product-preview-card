import { createGlobalStyle } from 'styled-components';
import montserratMedium from '../../assets/fonts/montserrat/Montserrat-Medium.ttf';
import montserratBold from '../../assets/fonts/montserrat/Montserrat-Bold.ttf';
import frauncesBold from '../../assets/fonts/fraunces/Fraunces_72pt-Bold.ttf';

const GlobalStyle = createGlobalStyle`
@font-face {
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 500;
  font-display: swap;
  font-optical-sizing: auto;
  src: local("Montserrat Medium"), local("Montserrat-Medium"), url(${montserratMedium}) format("truetype");
}

@font-face {
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 700;
  font-display: swap;
  font-optical-sizing: auto;
  src: local("Montserrat Bold"), local("Montserrat-Bold"), url(${montserratBold}) format("truetype");
}

@font-face {
  font-family: "Fraunces";
  font-style: normal;
  font-weight: 700;
  font-display: swap;
  font-optical-sizing: auto;
  src: local("Fraunces Bold"), local("Fraunces-Bold"), url(${frauncesBold}) format("truetype");
}


:root {
  --width-mobile: 375px;
  --width-desktop: 1440px;
  --color-dark-cyan: hsl(158, 36%, 37%);
  --color-cream: hsl(30, 38%, 92%);
  --color-very-dark-blue: hsl(212, 21%, 14%);
  --color-dark-grayish-blue: hsl(228, 12%, 48%);
  --color-white: hsl(0, 0%, 100%);
  --font-primary: "Montserrat", "Arial", sans-serif;
  --font-secondary: "Fraunces", "Times New Roman", serif;
}

html {
  font-size: 62.5%;
}

*,
*::after,
*::before {
    box-sizing: border-box;
}

* {
  margin: 0;
  padding: 0;

  border: none;
  background: none;
}


body {
  min-width: var(--width-mobile);
  font-family: var(--font-primary);
  font-size: 1.4rem;
  font-style: normal;
  font-weight: 500;
  color: var(--color-dark-grayish-blue);
}
`;

export default GlobalStyle;
