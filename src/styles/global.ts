import { createGlobalStyle } from 'styled-components'

export const GlobalStyled = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;

    scrollbar-color: ${({ theme }) => theme['gray-700']} ${({ theme }) =>
  theme['gray-800']};
  }

  @media (max-width: 1080px) {
    html {
      font-size: 93.75%;
    }
  }

  @media (max-width: 720px) {
    html {
      font-size: 87.5%;
    }
  }

  html,
  body {
    padding: 0;
    margin: 0;
    font-family: 'Nunito', sans-serif;
    background-color: ${({ theme }) => theme.backgroundColor};
    color: ${({ theme }) => theme.text};
    -webkit-font-smoothing: antialiased;

    &::-webkit-scrollbar {
      width: 8px;
    }

    &::-webkit-scrollbar-track {
      background-color: ${({ theme }) => theme['gray-700']};
      border-radius: 4px;
    }

    &::-webkit-scrollbar-thumb {
      background-color: ${({ theme }) => theme['gray-800']};
      border-radius: 4px;
    }
  }


  a {
    color: inherit;
    text-decoration: none;
    cursor: pointer;
  }

  li {
    list-style: none;
  }

`
