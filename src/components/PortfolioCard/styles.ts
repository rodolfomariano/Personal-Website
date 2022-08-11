import styled from 'styled-components'
import { motion } from 'framer-motion'

export const Container = styled(motion.button)`
  flex: none;
  position: relative;
  width: 277px;
  height: 157px;
  padding: 8px 16px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme['gray-750']};
  overflow: hidden;
  border: 1px solid ${({ theme }) => theme['string-transparent']};
  cursor: pointer;
  transition: 300ms;

  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 180px;
    height: 125px;
  }

  &:hover {
    border: 1px solid ${({ theme }) => theme.string};
  }
`
export const ProjectInfoContainer = styled.div`
  position: absolute;
  z-index: 200;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: ${({ theme }) => theme['gray-750-transparent']};
  padding: 0 24px;
  text-align: center;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;

  h2 {
    font-size: 1.5rem;
    color: ${({ theme }) => theme.string};
    font-weight: 400;
  }

  p {
    color: ${({ theme }) => theme.text};
  }
`
