// import type { NextPage } from 'next'
import Head from 'next/head'
// import Image from 'next/image'

// import file from './text.mdx'
// import { Example } from './example.mdx'

const About = () => {
  return (
    <>
      <Head>
        <title>About</title>
      </Head>
      <article id="about" data-type={Math.random()}>
        <h1>About</h1>
        <p>
          We want to be the first choice for our customers providing customized
          solutions.
        </p>
      </article>
    </>
  )
}

export default About
