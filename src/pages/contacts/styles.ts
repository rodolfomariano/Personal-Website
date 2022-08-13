import { motion } from 'framer-motion'
import styled from 'styled-components'

export const Container = styled(motion.div)`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-around;
`

export const ContactsContent = styled.section`
  width: 100%;
  max-width: 360px;

  h1 {
    font-size: 1.5rem;
    color: ${({ theme }) => theme.string};
  }

  & .contacts-info {
    margin-top: 40px;

    display: flex;
    flex-direction: column;
    gap: 22px;

    & > div {
      display: flex;
      align-items: center;
      gap: 10px;

      span {
        font-size: 32px;
        color: ${({ theme }) => theme.string};
      }

      div {
        display: flex;
        flex-direction: column;
        gap: 12px;

        h2 {
          font-size: 1.25rem;
          color: ${({ theme }) => theme.title};
          line-height: 0;
        }

        a {
          font-size: 0.875rem;
          color: ${({ theme }) => theme.link};
        }
      }
    }
  }
`
export const Separator = styled.div`
  width: 100%;
  height: 1px;
  margin-top: 32px;
  margin-bottom: 14px;
  background-color: ${({ theme }) => theme['gray-700-transparent']};
`

export const SocialIconsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;

  a:hover {
    svg {
      filter: brightness(0.8);
    }
  }
`
export const ImageContainer = styled.div`
  @media (max-width: 720px) {
    display: none;
  }
`
