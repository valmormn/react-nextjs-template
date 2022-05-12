import Head from 'next/head'
import type { AppProps } from 'next/app'

import '../styles/globals.css'
import 'tailwindcss/tailwind.css'

import Layout from '$components/Layout'
import { createContext } from 'react'

const theme = ''
const ThemeContext = createContext(theme)

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeContext.Provider value={theme}>
        <Head>
          <title>My page title</title>
        </Head>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeContext.Provider>
    </>
  )
}

export default App
