import { ReactElement } from 'react'
import { MotionProps } from 'framer-motion'

import { Container } from './styles'

interface SkillCardProps extends MotionProps {
  title: string
  icon: ReactElement
}

export function SkillCard({ title, icon, ...rest }: SkillCardProps) {
  return (
    <Container {...rest}>
      {icon}
      <strong>{title}</strong>
    </Container>
  )
}
