import { ReactNode } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

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

interface DefaultLayoutProps {
  children: ReactNode
}

export function DefaultLayout({ children }: DefaultLayoutProps) {
  const { asPath } = useRouter()

  return (
    <LayoutContainer>
      <DotsContainer>
        <DotsContainerImage />
      </DotsContainer>

      <LayoutContent>
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
                  Portifólio
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

        {asPath === '/' && (
          <ReactLogoContainer>
            <ReactImage />
          </ReactLogoContainer>
        )}

        <Content>{children}</Content>
      </LayoutContent>

      {asPath === '/' && (
        <SocialMediaContainer>
          <h3>Mídias Sociais</h3>

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
      )}

      <CodeImageContainer>
        <CodeImage />
      </CodeImageContainer>
    </LayoutContainer>
  )
}
