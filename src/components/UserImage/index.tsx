import Link from 'next/link'
import { DownloadSimple } from 'phosphor-react'

import {
  Container,
  ImageContainer,
  ResumeButton,
  SocialMediaContainer,
} from './stiles'

import PersonalPicture from '../../assets/personal-picture.svg'

export function UserImage() {
  return (
    <Container>
      <ImageContainer>
        <PersonalPicture />
      </ImageContainer>

      <ResumeButton>
        <DownloadSimple size={16} />
        Curriculum
      </ResumeButton>

      <SocialMediaContainer>
        <ul>
          <li>
            <Link href="https://br.linkedin.com/in/rodolfo-mariano-de-souza-75106249">
              <a target="_blank">Linkedin</a>
            </Link>
          </li>
          <span>&#9679;</span>
          <li>
            <Link href="https://github.com/rodolfomariano">
              <a target="_blank">GitHub</a>
            </Link>
          </li>
        </ul>
      </SocialMediaContainer>
    </Container>
  )
}
