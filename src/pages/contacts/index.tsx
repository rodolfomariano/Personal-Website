import Head from 'next/head'
import { At, Phone } from 'phosphor-react'
import {
  ContactsContent,
  Container,
  ImageContainer,
  Separator,
  SocialIconsContainer,
} from './styles'

import LinkedinLogo from '../../assets/social-icons/linkedin.svg'
import GitHubLogo from '../../assets/social-icons/github.svg'
import Link from 'next/link'
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
                <a href="tel:+5519998133263">(19) 9 9813-3263</a>
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
          </SocialIconsContainer>
        </ContactsContent>

        <ImageContainer>
          <MessagesImage />
        </ImageContainer>
      </Container>
    </>
  )
}
