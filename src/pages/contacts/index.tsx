import { GetStaticProps } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import { At, Phone, WhatsappLogo } from 'phosphor-react'

import {
  ContactsContent,
  Container,
  ImageContainer,
  Separator,
  SocialIconsContainer,
} from './styles'

import LinkedinLogo from '../../assets/social-icons/linkedin.svg'
import GitHubLogo from '../../assets/social-icons/github.svg'
import InstagramLogo from '../../assets/social-icons/instagram.svg'
import MessagesImage from '../../assets/messages.svg'

export default function Contacts() {
  return (
    <>
      <Head>
        <title>Contatos</title>
      </Head>

      <Container
        animate={{
          scale: [0, 1],
          opacity: [0, 1],
        }}
        transition={{
          duration: 0.5,
        }}
      >
        <ContactsContent>
          <h1>Contatos</h1>

          <div className="contacts-info">
            <div>
              <span>
                <At />
              </span>

              <div>
                <h2>E-mail</h2>
                <a href="mailto:rodolfo.mariano@outlook.com">
                  rodolfo.mariano@outlook.com
                </a>
              </div>
            </div>

            <div>
              <span>
                <Phone />
              </span>

              <div>
                <h2>Telefone</h2>
                <a
                  href="https://wa.me/5519998133263"
                  target="_blank"
                  rel="noreferrer"
                >
                  <WhatsappLogo />
                  (19) 9 9813-3263
                </a>
              </div>
            </div>
          </div>

          <Separator />

          <SocialIconsContainer>
            <Link href="https://br.linkedin.com/in/rodolfo-mariano-de-souza-75106249">
              <a target="_blank">
                <LinkedinLogo />
              </a>
            </Link>

            <Link href="https://github.com/rodolfomariano">
              <a target="_blank">
                <GitHubLogo />
              </a>
            </Link>
            <Link href="https://instagram.com/rodolfomdsouza/">
              <a target="_blank">
                <InstagramLogo />
              </a>
            </Link>
          </SocialIconsContainer>
        </ContactsContent>

        <ImageContainer>
          <MessagesImage />
        </ImageContainer>
      </Container>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {},
    revalidate: 60 * 60 * 24,
  }
}
