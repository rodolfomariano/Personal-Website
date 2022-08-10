import { motion } from 'framer-motion'
import styled from 'styled-components'

export const Container = styled(motion.div)`
  width: 272px;

  display: flex;
  flex-direction: column;
  gap: 16px;
`

export const ImageContainer = styled.div`
  width: 272px;
  height: 272px;
  background-color: ${({ theme }) => theme['gray-800-transparent']};
  border-radius: 8px;

  display: flex;
  align-items: flex-end;
  justify-content: center;

  svg {
    width: 200px;
    height: 260px;
  }
`
export const ResumeLink = styled(motion.a)`
  width: 100%;
  padding: 8px 0;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.primary};
  border: none;
  cursor: pointer;
  transition: 300ms;
  color: ${({ theme }) => theme.backgroundColor};

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;

  &:hover {
    filter: brightness(0.8);
  }
`
export const SocialMediaContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

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
