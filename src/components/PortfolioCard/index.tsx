import { MotionProps } from 'framer-motion'

import { Container, ProjectInfoContainer } from './styles'

import { ReactElement } from 'react'
import { useModal } from '../../hooks/useModal'

interface PortfolioCardProps extends MotionProps {
  id: string
  thumbnail: ReactElement
  title: string
  description: string
}

export function PortfolioCard({
  id,
  thumbnail,
  title,
  description,
}: PortfolioCardProps) {
  const { openModal } = useModal()

  return (
    <Container onClick={openModal}>
      {thumbnail}
      <ProjectInfoContainer>
        <h2>{title}</h2>

        <p>{description}</p>
      </ProjectInfoContainer>
    </Container>
  )
}
