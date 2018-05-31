import styled, { setTheme, injectGlobal } from "styled-elements";

injectGlobal`
 body {
    position: relative;
    font-size: 16px;
    -webkit-font-smoothing: antialiased;
    height: 100vh;
    min-height: 100vh;
    min-width: 100%;
    width: 100%;
    overflow-x: hidden;
  }

  select,
  textarea,
  input-placeholder {
      font-family: var(--ff-base);
      color: var(--c-grey-dark);
  }

  input:-webkit-autofill {
      -webkit-box-shadow: 0 0 0px 1000px white inset;
  }

  button:focus {
      outline: 0 !important;
  }

  h2 {
      font-size: var(--fs-title);
  }

  button {
  }

  * {
      font-family: var(--c-grey-light);
      box-sizing: border-box;
  }

`;

export default {};
