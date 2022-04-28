import Head from 'next/head'
import type { AppProps } from 'next/app'

import '../styles/globals.css'
import 'tailwindcss/tailwind.css'

import Layout from '$components/Layout'

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>My page title</title>
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}

export default App
