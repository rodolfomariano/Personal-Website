import styled from 'styled-components'

export const LayoutContainer = styled.div`
  min-width: 100wh;
  min-height: 100vh;
`

export const LayoutContent = styled.div`
  position: relative;
  z-index: 500;
  max-width: 1300px;
  height: 100vh;
  margin: 0 auto;
  padding: 24px 32px;
`

export const DotsContainer = styled.div`
  position: absolute;
  top: 24px;
  left: 56px;
`

export const MenuList = styled.nav`
  position: absolute;
  z-index: 900;
  top: 24px;
  right: 56px;

  ul {
    margin-left: auto;

    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 16px;

    li {
      list-style: none;

      display: flex;
      align-items: center;

      & + li::before {
        content: '/';
        margin-right: 16px;
        font-size: 10px;
      }

      a {
        text-transform: uppercase;
        color: ${({ theme }) => theme.white};
        transition: 300ms;

        &.isActive {
          color: ${({ theme }) => theme.primary};
        }

        &:hover {
          color: ${({ theme }) => theme.primary};
        }
      }
    }
  }
`

export const CodeImageContainer = styled.div`
  position: absolute;
  bottom: 56px;
  right: 56px;
`

export const ReactLogoContainer = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;

  display: flex;
  align-items: center;
  justify-content: center;
`

export const SocialMediaContainer = styled.div`
  position: absolute;
  z-index: 900;
  bottom: 56px;
  left: 56px;

  h3 {
    font-family: 'Outfit';
    font-weight: 300;
    text-transform: uppercase;
    font-size: 20px;
    line-height: 25px;
    letter-spacing: 0.2em;
    color: ${({ theme }) => theme['gray-400']};
  }

  ul {
    margin-top: 10px;

    display: flex;
    gap: 12px;

    li {
      color: ${({ theme }) => theme['gray-600']};

      &:hover {
        filter: brightness(0.8);
      }
    }
    span {
      color: ${({ theme }) => theme['gray-600']};
    }
  }
`

export const Content = styled.main`
  position: relative;
  z-index: 800;
  width: 100%;
  height: 100%;
`
