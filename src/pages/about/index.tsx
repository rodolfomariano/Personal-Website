import Head from 'next/head'
import { Book, Clock, GraduationCap, Sparkle, User } from 'phosphor-react'
import { useEffect, useState } from 'react'

import { StudyCard } from '../../components/StudyCard'
import { TimeLineCard } from '../../components/TimeLineCard'
import { UserImage } from '../../components/UserImage'

import {
  Container,
  PersonalData,
  PersonalDescription,
  Row,
  Skills,
  Study,
  StudyCardContainer,
  StudyOptionButton,
  StudyOptionsContainer,
  TabesHeaderButton,
  TableContent,
  TableSelected,
  TabsContainer,
  TabsHeader,
  TimeLine,
  TimeLineContent,
} from './styles'

interface StudyOptions {
  option: 'university-graduate' | 'free-course'
}

export default function About() {
  const [tableSelected, setTableSelected] = useState(0)
  const [studyOption, setStudyOption] = useState<StudyOptions | string>(
    'university-graduate',
  )

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

        <PersonalData
          transition={{ duration: 1.5 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <TabsHeader
            transition={{ duration: 1.5 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
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

          <TabsContainer
            id="tabsContainer"
            transition={{ duration: 1.5 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
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
                <StudyOptionsContainer>
                  <StudyOptionButton
                    className={
                      studyOption === 'university-graduate' ? 'active' : ''
                    }
                    onClick={() => setStudyOption('university-graduate')}
                  >
                    <GraduationCap />
                    Graduação
                  </StudyOptionButton>

                  <StudyOptionButton
                    className={studyOption === 'free-course' ? 'active' : ''}
                    onClick={() => setStudyOption('free-course')}
                  >
                    <Book />
                    Cursos
                  </StudyOptionButton>
                </StudyOptionsContainer>

                <StudyCardContainer>
                  <StudyCard
                    title="Pós - Desenvolvimento Mobile Mult Plataforma"
                    month="Dezembro"
                    year="2022"
                    institution="Faculdade Descomplica"
                    animate={{
                      scale:
                        studyOption === 'university-graduate' ? [0, 1] : [1, 0],
                      opacity: [0, 1],
                      display:
                        studyOption === 'university-graduate'
                          ? 'block'
                          : 'none',
                    }}
                    transition={{ duration: 0.5 }}
                  />

                  <StudyCard
                    title="Bacharel - Ciência da Computação"
                    month="Dezembro"
                    year="2013"
                    institution="Faculdade de Americana"
                    animate={{
                      scale:
                        studyOption === 'university-graduate' ? [0, 1] : [1, 0],
                      opacity: [0, 1],
                      display:
                        studyOption === 'university-graduate'
                          ? 'block'
                          : 'none',
                    }}
                    transition={{
                      duration: 0.5,
                      delay: studyOption === 'university-graduate' ? 0.2 : 0,
                    }}
                  />

                  <StudyCard
                    title="Docker"
                    month="Fevereiro"
                    year="2022"
                    institution="Full Cycle"
                    link="https://fullcycle.com.br/certificado/5b9657e8-1de6-4497-b65c-90c35fde6af7/"
                    animate={{
                      scale: studyOption === 'free-course' ? [0, 1] : [1, 0],
                      opacity: [0, 1],
                      display: studyOption === 'free-course' ? 'block' : 'none',
                    }}
                    transition={{ duration: 0.5 }}
                  />

                  <StudyCard
                    title="Ignite - React Native"
                    month="Julho"
                    year="2021"
                    institution="Rocketseat"
                    link="https://app.rocketseat.com.br/certificates/6dd6ebe0-b240-409e-b0d9-d33712f4e0ff"
                    animate={{
                      scale: studyOption === 'free-course' ? [0, 1] : [1, 0],
                      opacity: [0, 1],
                      display: studyOption === 'free-course' ? 'block' : 'none',
                    }}
                    transition={{
                      duration: 0.5,
                      delay: studyOption === 'free-course' ? 0.2 : 0,
                    }}
                  />

                  <StudyCard
                    title="Ignite - React.JS"
                    month="Março"
                    year="2021"
                    institution="Rocketseat"
                    link="https://app.rocketseat.com.br/certificates/957a083c-76db-4fe4-ba26-8fa886dda38b"
                    animate={{
                      scale: studyOption === 'free-course' ? [0, 1] : [1, 0],
                      opacity: [0, 1],
                      display: studyOption === 'free-course' ? 'block' : 'none',
                    }}
                    transition={{
                      duration: 0.5,
                      delay: studyOption === 'free-course' ? 0.5 : 0,
                    }}
                  />
                </StudyCardContainer>
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
