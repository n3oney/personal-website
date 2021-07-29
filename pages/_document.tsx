import Document, { DocumentContext, Head, Html, Main, NextScript } from 'next/document';
import React from 'react';

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);

    return initialProps;
  }

  render() {
    return (
      <Html>
        <Head>
          <link
            href='https://fonts.googleapis.com/css2?family=Inter:wght@500;700&display=swap'
            rel='stylesheet'
          />
        </Head>
        <body className='bg-gray-0 text-gray-6'>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument;