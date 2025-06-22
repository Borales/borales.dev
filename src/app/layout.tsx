import Analytics from '@@components/Analytics'
import { GA_TRACKING_ID } from '@@services/gtag'
import type { Metadata, Viewport } from 'next'
import * as React from 'react'
import font from '../font'
import './globals.css'
import { Providers } from './providers'

export const viewport: Viewport = {
  colorScheme: 'light dark',
  initialScale: 1,
  width: 'device-width',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' }
  ]
}

export const metadata: Metadata = {
  title: 'borales.dev',
  manifest: '/site.webmanifest',
  icons: [
    {
      rel: 'apple-touch-icon',
      sizes: '180x180',
      url: '/apple-touch-icon.png'
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '32x32',
      url: '/favicon-32x32.png'
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '16x16',
      url: '/favicon-16x16.png'
    }
  ]
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body
        className={`${font.className} bg-background text-foreground container mx-auto min-h-screen px-6 py-12 antialiased`}
      >
        {GA_TRACKING_ID && (
          <React.Suspense fallback={<div>Loading...</div>}>
            <Analytics code={GA_TRACKING_ID} />
          </React.Suspense>
        )}
        <Providers>
          <div className="flex flex-col gap-6">{children}</div>
        </Providers>
      </body>
    </html>
  )
}
