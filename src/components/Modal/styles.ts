import { motion } from 'framer-motion'
import styled from 'styled-components'

export const ModalBackdrop = styled(motion.div)`
  z-index: 1000;
  position: fixed;
  top: 0;
  left: 0;
  min-width: 100vw;
  min-height: 100vh;
  background-color: ${({ theme }) => theme['modal-backdrop']};
  backdrop-filter: blur(0.75px);
  cursor: pointer;
`

export const ModalContent = styled(motion.div)`
  position: fixed;
  z-index: 1200;
  top: 50%;
  margin-top: -300px;
  left: 50%;
  margin-left: -200px;
  width: 400px;
  height: 600px;
  padding: 32px 24px;
  background-color: ${({ theme }) => theme.backgroundColor};
  border-radius: 16px;
  border: 1px solid ${({ theme }) => theme['string-transparent']};

  @media (max-width: 720px) {
    margin-left: -180px;
    width: 360px;
  }
`
export const CloseModalButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: transparent;
  border: none;
  color: ${({ theme }) => theme.red};
  font-size: 32px;
  cursor: pointer;
  line-height: 0;
  transition: 300ms;

  &:hover {
    color: ${({ theme }) => theme['close-button-hover']};
  }
`
export const ImageContainer = styled.div`
  width: 100%;
  height: 186px;
  /* padding: 32px 64px; */

  display: flex;
  align-items: center;
  justify-content: space-between;

  button {
    line-height: 0;
    background: transparent;
    border: none;
    font-size: 36px;
    color: ${({ theme }) => theme['gray-700']};
    cursor: pointer;
    transition: 300ms;

    &:hover {
      color: ${({ theme }) => theme.string};
    }
  }
`
export const Header = styled.div`
  margin-top: 20px;

  h1 {
    font-size: 1.5rem;
    text-align: center;
    color: ${({ theme }) => theme.string};
    margin-bottom: 20px;
  }

  p {
    font-size: 0.875rem;
    color: ${({ theme }) => theme.white};

    a {
      color: ${({ theme }) => theme.link};

      &:hover {
        filter: brightness(0.8);
      }
    }

    & + p {
      margin-top: 8px;
    }
  }
`
export const ProjectDetails = styled.div`
  width: 100%;
  height: 220px;
  margin-top: 20px;
  padding-right: 20px;
  overflow-y: auto;

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

  h2 {
    font-size: 1.25rem;
    color: ${({ theme }) => theme.title};
    margin-bottom: 16px;
  }

  ul {
    margin-bottom: 20px;
    li {
      span {
        font-size: 1rem;
        color: ${({ theme }) => theme['gray-600']};

        display: flex;
        align-items: center;
        gap: 4px;

        span {
          color: ${({ theme }) => theme['gray-600']};
          font-size: 8px;
        }
      }
    }
  }

  p {
    font-size: 1rem;
    color: ${({ theme }) => theme.text};
  }
`
