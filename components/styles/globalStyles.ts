// styles/global.js
import css from 'styled-jsx/css';
import { colors } from './theme';

export default css.global`
  @import url('https://fonts.googleapis.com/css?family=Quicksand:400,700');

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    position: relative;
    background: ${colors.secondaryBackground};
    font-family: 'Quicksand', sans-serif;
    color: ${colors.secondary};
  }

  @media only screen and (max-width: 1024px) {
    html {
      font-size: 85%;
    }
  }

  @media only screen and (max-width: 768px) {
    html {
      font-size: 70%;
    }
  }

  @media only screen and (max-width: 414px) {
    html {
      font-size: 60%;
      background: ${colors.mainBackground};
    }
  }

  h2 {
    margin-bottom: 2rem;
    font-size: 4rem;
    color: ${colors.darkPrimary};
    border-bottom: 3px solid ${colors.primary};
  }

  h3 {
    margin-bottom: 1.5rem;
    font-size: 2.5rem;
  }

  p {
    margin-bottom: 1rem;
    font-size: 1.25rem;
    line-height: 1.7;
  }

  .primary-color {
    color: ${colors.primary};
  }

  ol {
    margin-bottom: 1.5rem;
    margin-left: 1rem;
    list-style: square;
  }

  ol li {
    font-size: 1.3rem;
    padding: 0.5rem 0;
  }

  pre {
    white-space: pre-wrap;
    font-size: 1.4rem;
  }
`;
