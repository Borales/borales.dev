import { ZeitProvider, CssBaseline } from '@zeit-ui/react'
import './../styles/global.css'

function MyApp({ Component, pageProps }) {
  return (
    <ZeitProvider>
      <CssBaseline />
      <Component {...pageProps} />
    </ZeitProvider>
  )
}
export default MyApp
