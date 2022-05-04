// import type { NextPage } from 'next'
import Head from 'next/head'
// import Image from 'next/image'

// import file from './text.mdx'
// import { Example } from './example.mdx'

const Auth = () => {
  return (
    <>
      <Head>
        <title>Auth</title>
      </Head>
      <article id="auth" data-type={Math.random()}>
        <h1>Auth</h1>
        <p>
          We want to be the first choice for our customers providing customized
          solutions.
        </p>
      </article>
    </>
  )
}

export default Auth
