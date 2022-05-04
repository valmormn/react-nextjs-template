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
      <article id="about" data-type="">
        <h1>About</h1>
        <p>
          This is a React Next.js project.
        </p>
        <ul className="menu bg-base-100 w-56">
          <li><a>pnpm</a></li>
          <li><a>TailwindCSS</a></li>
          <li><a>daisyUI</a></li>
        </ul>
      </article>
    </>
  )
}

export default About
