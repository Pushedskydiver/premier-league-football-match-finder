import { createGlobalStyle } from 'styled-components';
import { colors } from './settings.colors.styles';
import typography from './settings.typography.styles';
import spacing from './settings.spacing.styles';

const GlobalStyles = createGlobalStyle`
  :root {
    --background: ${colors.light};
    --foreground: ${colors.dark};
    --font: ${typography.family};
    --copy: inherit;
  }

  *,
  *:before,
  *:after {
    box-sizing: border-box;
    color: inherit;
    font-weight: normal;
  }

  ${'' /* @font-face {
    font-family: 'Avenir Next';
    src: url('./fonts/avenir-next-variable.woff2') format('woff2-variations'), url('./fonts/avenir-next-variable.woff2') format('woff2');
    font-display: swap;
  } */}

  html {
    font-size: 16px;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
  }

  body {
    margin: 0;
    background-color: var(--background);
    color: var(--foreground);
    font-family: var(--font);
    font-variation-settings: 'wght' ${typography.weight.regular};
    line-height: ${typography.lineHeight.body};
    transition: background-color 0.3s ease-in-out;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
  }

  body ::-moz-selection {
    background: var(--foreground);
    color: var(--background);
  }

  body ::selection {
    background: var(--foreground);
    color: var(--background);
  }

  h1,
  h2,
  p {
    margin-top: 0;
    margin-bottom: ${spacing.margin}px;
  }

  thead,
  tbody,
  tr {
    display: contents;
  }
`;

export default GlobalStyles;
