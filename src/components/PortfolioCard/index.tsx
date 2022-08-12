import Image from 'next/image'
import { MotionProps } from 'framer-motion'

import { Container, ProjectInfoContainer } from './styles'

import { useModal } from '../../hooks/useModal'

interface PortfolioCardProps extends MotionProps {
  data: {
    id: string
    title: string
    type: string
    description: string
    technologies: string[]
    projectLink?: string
    githubLink?: string
    thumbnail: string | any
    images: string[]
    learnings: string
  }
}

export function PortfolioCard({ data, ...rest }: PortfolioCardProps) {
  const { openModal } = useModal()

  const { thumbnail, title, description } = data

  return (
    <Container onClick={() => openModal(data)} {...rest}>
      <Image src={thumbnail} alt="" width={180} height={125} />
      <ProjectInfoContainer>
        <h2>{title}</h2>

        <p>{description}</p>
      </ProjectInfoContainer>
    </Container>
  )
}
