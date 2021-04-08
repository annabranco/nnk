import { css } from 'frontity';

export const globalStyles = css`
  html,
  body,
  div,
  span,
  object,
  iframe,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  blockquote,
  pre,
  a,
  abbr,
  img,
  ol,
  ul,
  li,
  fieldset,
  form,
  label,
  legend,
  table,
  caption,
  tbody,
  tfoot,
  thead,
  tr,
  th,
  td,
  article,
  aside,
  canvas,
  details,
  embed,
  figure,
  figcaption,
  footer,
  header,
  hgroup,
  menu,
  main,
  nav,
  section,
  summary,
  time,
  mark,
  audio,
  video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }

  article,
  aside,
  details,
  div,
  figcaption,
  figure,
  footer,
  header,
  hgroup,
  main,
  menu,
  nav,
  section {
    display: block;
    box-sizing: border-box;
  }
  body {
    line-height: 1;
  }
  ol,
  ul {
    list-style: none;
  }
  blockquote,
  q {
    quotes: none;
  }
  blockquote:before,
  blockquote:after,
  q:before,
  q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
  button {
    outline: none;
  }
  a {
    color: black;
    &:hover {
      color: red;
    }
  }
  html {
    font-size: 10px;

    @media only screen and (min-width: 768px) {
      font-size: 15px;
    }
    @media only screen and (min-width: 1024px) {
      font-size: 16px;
    }
  }
  &::-webkit-scrollbar {
    background: red;
    border-radius: 10px;
  }
  ::-webkit-scrollbar-track {
    background: linear-gradient(90deg, #434343, #434343 1px, #111 0, #111);
  }
  ::-webkit-scrollbar-thumb {
    background: #434343;
    border-radius: 5px;
    box-shadow: inset 2px 2px 2px hsla(0, 0%, 100%, 0.25),
      inset -2px -2px 2px rgba(0, 0, 0, 0.25);
  }
`;

export const NotDisplayed = css`
  display: none;
`;

export const Hidden = css`
  visibility: hidden;
`;

export const FullScreen = css`
  height: 100vh;
  padding: 60px;
`;
