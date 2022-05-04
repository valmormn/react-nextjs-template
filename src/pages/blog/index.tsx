// import type { NextPage } from 'next'
import Head from 'next/head'
// import Image from 'next/image'

// import file from './text.mdx'
// import { Example } from './example.mdx'

const Blog = () => {
  return (
    <>
      <Head>
        <title>Blog</title>
      </Head>
      <article id="blog" data-type={Math.random()}>
        <h1>Blog</h1>
        <p>
          We want to be the first choice for our customers providing customized
          solutions.
        </p>
      </article>
    </>
  )
}

export default Blog
