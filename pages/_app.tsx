import '../styles/globals.css'
import { ThemeProvider } from '@mui/material'
import CssBaseline from '@mui/material/CssBaseline'
import type { AppProps } from 'next/app'
import { lightTheme } from '../themes'
import { BareFetcher, SWRConfig } from 'swr'

const fetcher: BareFetcher = (url: string) => fetch(url).then((res) => res.json())
export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SWRConfig value={{ refreshInterval: 40000, fetcher }}>
      <ThemeProvider theme={lightTheme}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </SWRConfig>
  )
}
