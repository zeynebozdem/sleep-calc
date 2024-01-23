
import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          {/* Özel başlık */}
          <title>My Custom Next.js App</title>

          {/* Meta etiketleri */}
          <meta name="description" content="My custom Next.js app description" />
          <meta charSet="utf-8" />

          {/* Favicon eklemek için örnek */}
          <link rel="icon" href="/appicon.svg" />

          {/* Özel CSS bağlantısı */}
          <link rel="stylesheet" href="/styles/custom.css" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;