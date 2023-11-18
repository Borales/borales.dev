// Fonts Example
import { Roboto } from 'next/font/google'

const GoogleFont = Roboto({
  subsets: ['latin'],
  weight: ['100', '300', '400', '500', '700', '900'],
  display: 'swap'
})

export default GoogleFont
