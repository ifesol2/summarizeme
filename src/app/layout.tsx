import './globals.css'

export const metadata = {
  title: 'SummarizeMe',
  description: 'AI-generated landing page',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}