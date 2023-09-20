import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Yaro Bagriy',
  description: 'My personal website',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script src="https://cdn.usefathom.com/script.js" data-site="TDRQDBKZ" defer></script>
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
