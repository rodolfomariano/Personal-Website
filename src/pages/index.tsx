import { GetStaticProps } from 'next'
import NoSSR from 'react-no-ssr'

import Head from 'next/head'
import { Container, Content, PictureContainer } from '../styles/Home.styles'

import { ProfileImg } from '../components/ProfileImg'

export default function Home() {
  return (
    <Container>
      <Head>
        <title>Home</title>
      </Head>

      <Content
        transition={{ delay: 0.8 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <h1>
          <span className="emphasisTitle">Olá</span>, Eu Sou{' '}
          <strong>Rodolfo</strong>
        </h1>
        <p>
          Desenvolvedor
          <span className="emphasisSubTitle">
            <NoSSR>
              <ul>
                <li>
                  <span>Web</span>
                </li>
                <li>
                  <span>Mobile</span>
                </li>
              </ul>
            </NoSSR>
          </span>
        </p>

        <pre>
          <code>
            <span className="tag">{`<FavoriteTechs`}</span> <br />
            <span className="props">{`    language`}</span>=
            <span className="string">{`"javascript"`}</span> <br />
            <span className="props">{`    lib`}</span>=
            <span className="string">{`"React"`}</span> <br />
            <span className="props">{`    typescript`}</span> <br />
            <span className="props">{`    styles`}</span>=
            <span className="string">{`"Styled Components"`}</span>
            <br />
            <span className="props">{`    framework`}</span>
            {`={`}
            <span className="variable">{` projectType`}</span>
            <span className="operator"> === </span>
            <span className="string">{`"web"`}</span>
            <span className="operator"> ? </span>
            <span className="string">{`"NextJs"`}</span>
            <span className="operator"> : </span>
            <span className="string">{`"Expo"`}</span> <span>{`}`}</span> <br />
            <span>{`    {`}</span>
            <span className="operator">{`...`}</span>
            <span className="variable">{`rest`}</span>
            <span>{`}`}</span> <br />
            <span className="tag">{`/>`}</span>
          </code>
        </pre>
      </Content>

      <PictureContainer>
        <ProfileImg size="large" />
      </PictureContainer>
    </Container>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {},
    revalidate: 60 * 60 * 24, // 24 horas
  }
}
