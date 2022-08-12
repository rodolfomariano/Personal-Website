import { motion } from 'framer-motion'
import styled from 'styled-components'

export const Container = styled(motion.div)`
  width: 200px;
  height: 156px;
  background-color: ${({ theme }) => theme['gray-800']};
  padding: 8px;
  border-radius: 8px;
  flex: none;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 16px;

  strong {
    color: ${({ theme }) => theme['gray-600']};
    text-align: center;
  }

  @media (max-width: 768px) {
    width: 160px;
  }
`
