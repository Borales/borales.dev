'use client'

import { pageview } from '@@services/gtag'
import { usePathname, useSearchParams } from 'next/navigation'
import Script from 'next/script'
import { useEffect } from 'react'

export default function Analytics({ code }: { code: string }) {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    const url = `${pathname}${
      Array.from(searchParams.entries()).length > 0 ? '?' : ''
    }${searchParams}`
    pageview(url, code)
  }, [pathname, searchParams])

  return (
    <>
      <Script src={`https://www.googletagmanager.com/gtag/js?id=${code}`} />
      <Script id="google-analytics">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', '${code}');
        `}
      </Script>
    </>
  )
}
