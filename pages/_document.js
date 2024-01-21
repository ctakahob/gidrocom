import {Head, Html, Main, NextScript} from 'next/document'

export default function Document() {
  return (
    <Html lang="ru">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin/>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Pacifico:wght@400&display=swap"/>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;600;700&display=swap"
        />
      </Head>
      <body>
      <Main/>
      <NextScript/>
      </body>
    </Html>
  )
}
