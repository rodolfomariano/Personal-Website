import { AnimateSharedLayout } from 'framer-motion'
import type { AppProps } from 'next/app'

import { ThemeProvider } from 'styled-components'
import { DefaultLayout } from '../layouts/DefaultLayout'
import { GlobalStyled } from '../styles/global'
import { defaultTheme } from '../styles/themes/themes'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={defaultTheme}>
      <AnimateSharedLayout>
        <DefaultLayout>
          <Component {...pageProps} />
        </DefaultLayout>

        <GlobalStyled />
      </AnimateSharedLayout>
    </ThemeProvider>
  )
}

export default MyApp
