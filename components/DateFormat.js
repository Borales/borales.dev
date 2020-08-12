export default function DateFormat({ date }) {
  const d = new Date(date)
  const dateTimeFormat = new Intl.DateTimeFormat('en', {
    year: 'numeric',
    month: 'long',
    day: '2-digit',
  })

  return dateTimeFormat.format(d)
}
