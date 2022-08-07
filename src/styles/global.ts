import { createGlobalStyle } from 'styled-components'

export const GlobalStyled = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  html,
  body {
    padding: 0;
    margin: 0;
    font-family: 'Nunito', sans-serif;
      background-color: ${({ theme }) => theme.backgroundColor};
}

a {
  color: inherit;
  text-decoration: none;
}

`
