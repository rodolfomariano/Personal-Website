import { Card, Circle, Container, Triangle } from './styles'

interface TimeLineCardProps {
  period: string
  office: string
  occupation: string
}

export function TimeLineCard({
  period,
  office,
  occupation,
}: TimeLineCardProps) {
  return (
    <Container>
      <Circle>
        <span>{period}</span>
      </Circle>

      <Card whileHover={{ scale: 1.03 }} transition={{ duration: 0.3 }}>
        <h2>{office}</h2>

        <p>{occupation}</p>

        <Triangle />
      </Card>
    </Container>
  )
}
