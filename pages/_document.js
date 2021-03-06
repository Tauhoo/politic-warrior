import Document, { Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'

export default class MyDocument extends Document {
  render() {
    const sheet = new ServerStyleSheet()
    const main = sheet.collectStyles(<Main />)
    const styleTags = sheet.getStyleElement()

    return (
      <html>
        <Head>
          <title>Politic Warrior</title>
          {styleTags}
          <style>{`body, html { margin: 0; font-size: 16px; background-color: white; overflow-x: hidden;}
          `}</style>
          <link rel="icon" href="/static/logo.svg" />
          <meta name="viewport" content="width=device-width" />
          <link
            href="https://fonts.googleapis.com/css?family=Roboto"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css?family=Sofia"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css?family=K2D"
            rel="stylesheet"
          />
        </Head>
        <body>
          <div className="root">{main}</div>
          <NextScript />
        </body>
      </html>
    )
  }
}
