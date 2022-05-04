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
        <button className="btn">Entrar</button>
        <button className="btn">Cadastrar</button>
        <button className="btn">Recuperar Acesso</button>
      </article>
    </>
  )
}

export default Auth
