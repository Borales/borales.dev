import Document, { Html, Head, Main, NextScript } from 'next/document'
import { Fragment } from 'react'
import { CssBaseline } from '@zeit-ui/react'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    const styles = CssBaseline.flush()

    return {
      ...initialProps,
      styles: (
        <Fragment>
          {initialProps.styles}
          {styles}
        </Fragment>
      ),
    }
  }

  render() {
    return (
      <Html>
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
