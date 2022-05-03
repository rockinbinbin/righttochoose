import Head from 'next/head'
import { useRouter } from 'next/router'
import Navbar from 'components/ui/Navbar'
import Footer from 'components/ui/Footer'
import { ReactNode } from 'react'
import { ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import theme from 'styles/theme'

interface Props {
  children: ReactNode
}

export default function Layout({ children }: Props) {
  const router = useRouter()
  const meta = {
    title: 'Right 2 Choose',
    description: '',
    cardImage: '/og.png'
  }

  return (
    <>
      <Head>
        <title>{meta.title}</title>
        <meta name="robots" content="follow, index" />
        <link href="/favicon.ico" rel="shortcut icon" />
        <meta content={meta.description} name="description" />
        <meta property="og:url" content={`https://subscription-starter.vercel.app${router.asPath}`} />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content={meta.title} />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:image" content={meta.cardImage} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@vercel" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={meta.cardImage} />
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Navbar />
        <main id="skip">{children}</main>
        <Footer />
      </ThemeProvider>
    </>
  )
}
