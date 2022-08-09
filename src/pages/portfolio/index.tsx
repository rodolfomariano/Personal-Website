import Head from 'next/head'

import { Container } from './styles'

import { UserImage } from '../../components/UserImage'

export default function Portfolio() {
  return (
    <>
      <Head>
        <title>Portfólio</title>
      </Head>

      <Container>
        <UserImage />

        <h1>Portfólio</h1>
      </Container>
    </>
  )
}
