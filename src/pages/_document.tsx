import React, { ReactElement } from 'react'

import 
  // Document,
 {
  Html,
  Head,
  Main,
  NextScript,
  DocumentInitialProps,
  DocumentContext
} from 'next/document'
import { ServerStyleSheet } from 'styled-components'

// NEXT.JS CUSTOM DOCUMENT
// https://nextjs.org/docs/advanced-features/custom-document
// export default class MyDocument extends Document {
export default function Document() {
  return (
    <Html lang="pt-BR" data-heme="">
      <Head>
        {/* 
            Fonts must be declared within _document.tsx
            https://nextjs.org/docs/messages/no-page-custom-font
          */}
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500&display=optional"
        />
      </Head>

      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
