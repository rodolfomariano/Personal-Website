import type { AppProps } from 'next/app'

import { ThemeProvider } from 'styled-components'
import { GlobalStyled } from '../styles/global'
import { defaultTheme } from '../styles/themes/themes'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Component {...pageProps} />

      <GlobalStyled />
    </ThemeProvider>
  )
}

export default MyApp
