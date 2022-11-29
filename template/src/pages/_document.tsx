//import { createGetInitialProps } from '@mantine/next';
import Document, {
    Html,
    Head,
    Main,
    NextScript,
  } from 'next/document'
  
  //const getInitialProps = createGetInitialProps();

  class MyDocument extends Document {
    //static getInitialProps = getInitialProps;
    static async getInitialProps(ctx: any) {
      const initialProps = await Document.getInitialProps(ctx)
      return initialProps;
    }
  
    render() {
      return (
        <Html>
          <Head>
            <link href="https://fonts.googleapis.com/css2?family=Sen&display=swap" rel="stylesheet"/> 
          </Head>
          <body>
            <Main />
            <NextScript />
          </body>
        </Html>
      )
    }
  }
  
  export default MyDocument;