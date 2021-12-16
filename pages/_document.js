import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
          <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;300;400;600;700&display=swap" />
          <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@700&display=swap" />
          <meta property="og:site_name" content="SSoumendu Das' Portfolio" />
          <meta property="og:title" content="Portfolio" />
          <meta property="og:description" content="I am SOUMENDU DAS. Passionate and creative full-stack software engineer based in India. I consider myself a curious and inquisitive person, so in my spare time I like to work on side projects and try to constantly learn something new to improve my skillset." />
          <meta property="og:image" itemProp="image" content="https://i.ibb.co/8Pm7LxS/Capture.png" />
          <meta property="og:type" content="website" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument