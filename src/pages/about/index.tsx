import Head from 'next/head'
import { Book, Clock, Sparkle, User } from 'phosphor-react'
import { useEffect, useState } from 'react'
import { TimeLineCard } from '../../components/TimeLineCard'
import { UserImage } from '../../components/UserImage'
import {
  Container,
  PersonalData,
  PersonalDescription,
  Row,
  Skills,
  Study,
  TabesHeaderButton,
  TableContent,
  TableSelected,
  TabsContainer,
  TabsHeader,
  TimeLine,
  TimeLineContent,
} from './styles'

export default function About() {
  const [tableSelected, setTableSelected] = useState(0)

  useEffect(() => {
    const tabs = document.getElementById('tabsContainer')
    const widthOfTheObject = tabs?.getBoundingClientRect().width

    if (widthOfTheObject) {
      const toMoveTable =
        tableSelected === 0
          ? 0
          : tableSelected === 25
          ? widthOfTheObject
          : tableSelected === 50
          ? widthOfTheObject * 2
          : widthOfTheObject * 3

      tabs?.scroll(toMoveTable, 0)
    }
  }, [tableSelected])

  return (
    <>
      <Head>
        <title>Sobre</title>
      </Head>

      <Container>
        <UserImage />

        <PersonalData>
          <TabsHeader>
            <TabesHeaderButton
              onClick={() => setTableSelected(0)}
              className={tableSelected === 0 ? 'active' : ''}
            >
              <User size={16} />
              Sobre
            </TabesHeaderButton>
            <TabesHeaderButton
              onClick={() => setTableSelected(25)}
              className={tableSelected === 25 ? 'active' : ''}
            >
              <Clock size={16} />
              Histórico
            </TabesHeaderButton>
            <TabesHeaderButton
              onClick={() => setTableSelected(50)}
              className={tableSelected === 50 ? 'active' : ''}
            >
              <Book size={16} />
              Estudos
            </TabesHeaderButton>
            <TabesHeaderButton
              onClick={() => setTableSelected(75)}
              className={tableSelected === 75 ? 'active' : ''}
            >
              <Sparkle size={16} />
              Habilidades
            </TabesHeaderButton>

            <TableSelected style={{ left: `${tableSelected}%` }} />
          </TabsHeader>

          <TabsContainer id="tabsContainer">
            <TableContent>
              <PersonalDescription>
                <h1>Rodolfo Mariano de Souza</h1>

                <p>
                  Sou formado em Ciência da Computação, pós graduando em
                  Desenvolvimento Mobile Mult Plataforma, sempre gostei do
                  aspécto visual das páginas e plataformas digitais, levando
                  isso em conta, dedico o meu tempo estudando e praticando tudo
                  relacionado ao designer visual.
                </p>

                <p>
                  Em meu tempo livre, gosto de assistir filmes e séries, em
                  especial de ação e de aventura, também gosto de ver programas
                  de reforma e artes marciais.
                </p>
              </PersonalDescription>
            </TableContent>

            <TableContent>
              <TimeLine>
                <h1>Linha do tempo</h1>

                <TimeLineContent>
                  <TimeLineCard
                    period="Agora"
                    office="Em transição de carreira"
                    occupation="Buscado minha primeira oportunidade como dev"
                  />

                  <TimeLineCard
                    period="Fev 2014 à Jan 2022"
                    office="Assistente de informática"
                    occupation="Fazia a manutenção dos computadores e suporte em departamentos."
                  />

                  <Row />
                </TimeLineContent>
              </TimeLine>
            </TableContent>

            <TableContent>
              <Study>
                <h1>Rodolfo Mariano de Souza3</h1>
              </Study>
            </TableContent>

            <TableContent>
              <Skills>
                <h1>Rodolfo Mariano de Souza4</h1>
              </Skills>
            </TableContent>
          </TabsContainer>
        </PersonalData>
      </Container>
    </>
  )
}
