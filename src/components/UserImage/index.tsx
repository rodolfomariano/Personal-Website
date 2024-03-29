import Link from 'next/link'
import { DownloadSimple } from 'phosphor-react'
import { motion } from 'framer-motion'

import {
  Container,
  ImageContainer,
  ResumeLink,
  SocialMediaContainer,
} from './stiles'

import { ProfileImg } from '../ProfileImg'

export function UserImage() {
  const urlToDownload =
    'https://firebasestorage.googleapis.com/v0/b/imagens-3dce0.appspot.com/o/Rodolfo%20Curriculum%202023.pdf?alt=media&token=2d7c30f4-7726-424d-9b88-186869ee7ffd'

  return (
    <Container
      transition={{ duration: 0.8 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <ImageContainer>
        <ProfileImg size="small" />
      </ImageContainer>

      <ResumeLink
        href={urlToDownload}
        download="rms.pdf"
        target="_blank"
        rel="noreferrer"
        transition={{ delay: 0.8 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <DownloadSimple size={16} />
        Curriculum
      </ResumeLink>

      <SocialMediaContainer>
        <motion.ul layoutId="links-container" transition={{ duration: 0.8 }}>
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
          <span>&#9679;</span>
          <li>
            <Link href="https://instagram.com/rodolfomdsouza/">
              <a target="_blank">Instagram</a>
            </Link>
          </li>
        </motion.ul>
      </SocialMediaContainer>
    </Container>
  )
}
