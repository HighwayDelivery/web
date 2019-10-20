import React from "react"
import { default as NextDocument, Html, Head, Main, NextScript } from "next/document"
import { ServerStyleSheet } from "styled-components"
export default class Document extends NextDocument {
  static async getInitialProps(context) {
    const sheet = new ServerStyleSheet()
    const originalRender = context.renderPage
    try {
      context.renderPage = () =>
        originalRender({
          enhanceApp: App => props => sheet.collectStyles(<App {...props} />)
        })
      const initialProps = await NextDocument.getInitialProps(context)
      return {
        ...initialProps,
        styles: sheet.getStyleElement()
      }
    } finally {
      sheet.seal()
    }
  }

  render() {
    return (
      <Html>
        <Head>
          <link
            href="https://fonts.googleapis.com/css?family=Spectral:200,400,600,800&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
