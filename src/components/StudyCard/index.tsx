import { Link } from 'phosphor-react'
import { Container } from './styles'

interface StudyCardProps {
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
}: StudyCardProps) {
  return (
    <Container>
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
