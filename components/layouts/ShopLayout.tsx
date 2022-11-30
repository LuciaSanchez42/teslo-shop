import Head from 'next/head'
import { FunctionComponent, ReactNode } from 'react'
import { Navbar, SideMenu } from '../custom'

interface Props {
  children: ReactNode
  title: string
  pageDescription: string
  imageUrl?: string
}

const ShopLayout: FunctionComponent<Props> = ({ children, title, pageDescription, imageUrl }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name='og:title' content='initial-scale=1.0, width=device-width' />
        <meta name='og:description' content={pageDescription} />
        {imageUrl && <meta name='og:image' content={imageUrl} />}
      </Head>
      <nav>
        <Navbar />
      </nav>
      <SideMenu />
      <main
        style={{
          margin: '80px auto',
          maxWidth: '1440px',
          padding: '0 30px'
        }}>
        {children}
      </main>
    </>
  )
}

export default ShopLayout
