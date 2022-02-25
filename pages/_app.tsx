import '../styles/globals.css'
import type { AppProps } from 'next/app';
import { ThemeProvider } from '@emotion/react'
import theme from '../theme'
import { CssBaseline } from '@mui/material'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
