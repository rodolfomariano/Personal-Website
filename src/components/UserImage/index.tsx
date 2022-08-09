import Link from 'next/link'
import { DownloadSimple } from 'phosphor-react'
import { motion } from 'framer-motion'

import {
  Container,
  ImageContainer,
  ResumeButton,
  SocialMediaContainer,
} from './stiles'

import { ProfileImg } from '../ProfileImg'

export function UserImage() {
  return (
    <Container
      transition={{ duration: 0.8 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <ImageContainer>
        <ProfileImg size="small" />
      </ImageContainer>

      <ResumeButton
        transition={{ delay: 0.8 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <DownloadSimple size={16} />
        Curriculum
      </ResumeButton>

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
        </motion.ul>
      </SocialMediaContainer>
    </Container>
  )
}
