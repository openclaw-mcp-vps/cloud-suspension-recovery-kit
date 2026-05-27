import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Cloud Suspension Recovery Kit — Rapid Cloud Migration & Recovery',
  description: 'Emergency migration tools and recovery procedures when cloud providers suspend your account. Pre-configured scripts, real-time monitoring, and automated cross-cloud migrations.'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="fd14afec-b2b4-4575-b983-e1824b7980b3"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  )
}
