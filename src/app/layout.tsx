import Analytics from '@@components/Analytics'
import { GA_TRACKING_ID } from '@@services/gtag'
import * as React from 'react'
import ThemeRegistry from '../theme/ThemeRegistry'

export const metadata = {
  title: 'borales.dev',
  viewport: 'initial-scale=1, width=device-width',
  manifest: '/site.webmanifest',
  themeColor: '#556cd6',
  icons: [
    {
      rel: 'icon',
      url: '/favicon.ico',
    },
    {
      rel: 'apple-touch-icon',
      sizes: '180x180',
      url: '/apple-touch-icon.png',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '32x32',
      url: '/favicon-32x32.png',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '16x16',
      url: '/favicon-16x16.png',
    },
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        {GA_TRACKING_ID && <Analytics code={GA_TRACKING_ID} />}
        <ThemeRegistry>{children}</ThemeRegistry>
      </body>
    </html>
  )
}
