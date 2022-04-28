import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

import styles from './home.module.css'

const Home: NextPage = () => {
  return (
    <div id="home" className={styles.container}>
      <h1 className={styles.title}>
        Welcome to <a href="https://nextjs.org">Next.js!</a>
      </h1>

      <h2 className="text-3xl font-bold underline hover:decoration-blue-400">
        Alguma coisa aqui!
      </h2>

      <p className={styles.description}>
        Get started by editing
        <code className={styles.code}>pages/index.tsx</code>
      </p>
    </div>
  )
}

export default Home
