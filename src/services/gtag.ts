export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_TRACKING_ID

export type GAEvent = {
  action: string
  category?: string
  label?: string
  value?: number
}

// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
export const pageview = (url: string, code: string) => {
  code && window.gtag('config', code, { page_path: url })
}

// https://developers.google.com/analytics/devguides/collection/gtagjs/events
export const event = ({ action, category, label, value }: GAEvent) => {
  if (!GA_TRACKING_ID) {
    return
  }
  window.gtag('event', action, {
    event_category: category,
    event_label: label,
    value: value
  })
}
