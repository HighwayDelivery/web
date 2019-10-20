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
      <Html lang="en">
        <Head>
          <meta name="theme-color" content="#55EFC4" />
          <link rel="manifest" href="/manifest.json" />
          <link rel="apple-touch-icon" sizes="57x57" href="/images/icon-57.png" />
          <link rel="apple-touch-icon" sizes="60x60" href="/images/icon-60.png" />
          <link rel="apple-touch-icon" sizes="72x72" href="/images/icon-72.png" />
          <link rel="apple-touch-icon" sizes="76x76" href="/images/icon-76.png" />
          <link rel="apple-touch-icon" sizes="114x114" href="/images/icon-114.png" />
          <link rel="apple-touch-icon" sizes="120x120" href="/images/icon-120.png" />
          <link rel="apple-touch-icon" sizes="144x144" href="/images/icon-144.png" />
          <link rel="apple-touch-icon" sizes="152x152" href="/images/icon-152.png" />
          <link rel="apple-touch-icon" sizes="180x180" href="/images/icon-180.png" />
          <link rel="icon" type="image/png" sizes="192x192" href="/images/icon-192.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/images/icon-32.png" />
          <link rel="icon" type="image/png" sizes="96x96" href="/images/icon-96.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/images/icon-16.png" />
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
