import { ZeitProvider, CssBaseline } from '@zeit-ui/react'
import { MDXProvider } from '@mdx-js/react'
import Layout from '../components/Layout'

function MyApp({ Component, pageProps }) {
  return (
    <ZeitProvider>
      <MDXProvider
        components={{
          wrapper: (props) => <Layout {...props}></Layout>,
        }}
      >
        <CssBaseline />
        <Component {...pageProps} />
      </MDXProvider>
    </ZeitProvider>
  )
}
export default MyApp
