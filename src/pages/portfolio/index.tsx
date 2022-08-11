import Head from 'next/head'
import { useState } from 'react'
import { PortfolioCard } from '../../components/PortfolioCard'
import { ProjectsList } from '../../utils/projectsList'

import {
  Container,
  OptionBar,
  PortfolioContent,
  PortfolioOptionsContainer,
  PortfolioTypeButton,
} from './styles'

export default function Portfolio() {
  const [portfolioType, setPortFolioType] = useState<'web' | 'mobile'>('web')

  const projects = ProjectsList.filter(
    (project) => project.type === portfolioType,
  )

  return (
    <>
      <Head>
        <title>Portfólio</title>
      </Head>

      <Container>
        <PortfolioOptionsContainer>
          <PortfolioTypeButton
            onClick={() => setPortFolioType('web')}
            className={portfolioType === 'web' ? 'isActive' : ''}
          >
            Web
          </PortfolioTypeButton>
          <PortfolioTypeButton
            onClick={() => setPortFolioType('mobile')}
            className={portfolioType === 'mobile' ? 'isActive' : ''}
          >
            Mobile
          </PortfolioTypeButton>

          <OptionBar style={{ left: portfolioType === 'web' ? 0 : '50%' }} />
        </PortfolioOptionsContainer>

        <PortfolioContent>
          {projects ? (
            projects.map((project) => {
              return <PortfolioCard key={project.id} data={project} />
            })
          ) : (
            <p>Carregando</p>
          )}
        </PortfolioContent>
      </Container>
    </>
  )
}
