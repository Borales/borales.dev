import type { Config } from 'tailwindcss'
import { nextui } from '@nextui-org/react'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        secondary: 'rgba(85, 108, 214, <alpha-value>)'
      }
    },
    fontWeight: {
      thin: '100',
      extralight: '100',
      light: '300',
      normal: '400',
      semibold: '500',
      bold: '700',
      extrabold: '900'
    }
  },
  darkMode: 'class',
  plugins: [
    nextui({
      prefix: 'borales',
      themes: {
        light: {
          colors: {
            primary: 'rgba(0, 0, 0, 0.87)'
          }
        },
        dark: {
          colors: {
            primary: 'rgba(255, 255, 255, 0.87)'
          }
        }
      }
    })
  ]
}
export default config
