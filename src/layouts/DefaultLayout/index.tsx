import { ReactNode, useEffect, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { motion } from 'framer-motion'

import {
  CodeImageContainer,
  Content,
  DotsContainer,
  LayoutContainer,
  LayoutContent,
  MenuList,
  ReactLogoContainer,
  SocialMediaContainer,
} from './styles'

import DotsContainerImage from '../../assets/dots-container.svg'
import CodeImage from '../../assets/code-background.svg'
import ReactImage from '../../assets/reactjs-icon-big.svg'
import { Modal } from '../../components/Modal'
import { useModal } from '../../hooks/useModal'

interface DefaultLayoutProps {
  children: ReactNode
}

export function DefaultLayout({ children }: DefaultLayoutProps) {
  const [isMobile, setIsMobile] = useState(false)
  const { asPath } = useRouter()

  const { modalIsOpen } = useModal()

  useEffect(() => {
    const checkDevice = () => {
      if (
        navigator.userAgent.match(/Android/i) ||
        navigator.userAgent.match(/webOS/i) ||
        navigator.userAgent.match(/iPhone/i) ||
        navigator.userAgent.match(/iPad/i) ||
        navigator.userAgent.match(/iPod/i) ||
        navigator.userAgent.match(/BlackBerry/i) ||
        navigator.userAgent.match(/Windows Phone/i)
      ) {
        return setIsMobile(true)
      } else {
        return setIsMobile(false)
      }
    }

    checkDevice()
  }, [])

  return (
    <LayoutContainer>
      <DotsContainer>
        <DotsContainerImage />
      </DotsContainer>

      <MenuList>
        <ul>
          <li>
            <Link href={'/'}>
              <a className={asPath === '/' ? 'isActive' : ''}>Home</a>
            </Link>
          </li>
          <li>
            <Link href={'/about'}>
              <a className={asPath === '/about' ? 'isActive' : ''}>Sobre</a>
            </Link>
          </li>
          <li>
            <Link href={'/portfolio'}>
              <a className={asPath === '/portfolio' ? 'isActive' : ''}>
                Portfólio
              </a>
            </Link>
          </li>
          <li>
            <Link href={'/contacts'}>
              <a className={asPath === '/contacts' ? 'isActive' : ''}>
                Contato
              </a>
            </Link>
          </li>
        </ul>
      </MenuList>

      <LayoutContent>
        {asPath === '/' && (
          <ReactLogoContainer>
            <ReactImage />
          </ReactLogoContainer>
        )}

        <Content>{children}</Content>
      </LayoutContent>

      {asPath === '/' && !isMobile && (
        <SocialMediaContainer>
          <h3>Mídias Sociais</h3>

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
      )}

      <CodeImageContainer>
        <CodeImage />
      </CodeImageContainer>

      {modalIsOpen && <Modal />}
    </LayoutContainer>
  )
}
