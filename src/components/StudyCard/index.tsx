import { Link } from 'phosphor-react'
import { MotionProps } from 'framer-motion'

import { Container } from './styles'

interface StudyCardProps extends MotionProps {
  title: string
  link?: string
  month: string
  year: string
  institution: string
}

export function StudyCard({
  title,
  link,
  month,
  year,
  institution,
  ...res
}: StudyCardProps) {
  return (
    <Container {...res}>
      <header>
        <h3>{title}</h3>

        {link && (
          <div>
            <a href={link} target="_blank" rel="noreferrer">
              cretificado
            </a>
            <Link />
          </div>
        )}
      </header>
      <span>
        {month} &#9679; {year}{' '}
      </span>

      <p>{institution}</p>
    </Container>
  )
}
