import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Cosmos Medical Technologies | Navigate Healthcare With Intelligence',
  description: 'AI-powered medical documentation, No-Fault workflow automation, and revenue cycle management built for Personal Injury and No-Fault clinics in New York.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
