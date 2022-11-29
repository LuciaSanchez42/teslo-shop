import { ThemeProvider } from '@mui/material'
import CssBaseline from '@mui/material/CssBaseline'
import type { AppProps } from 'next/app'
import { lightTheme } from '../themes/lightTheme'

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={lightTheme}>
      <CssBaseline />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}
