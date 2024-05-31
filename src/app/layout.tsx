import type { Metadata } from 'next'
import { Jost } from 'next/font/google'
import { Layout, Header, Footer } from '@/shared/components/index'
import './globals.scss'

const fontStyle = Jost({ subsets: ['latin'], weight: ['400', '900'] })

export const metadata: Metadata = {
  title: 'Main Page',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body className={fontStyle.className}>
        <Layout header={<Header />} main={children} footer={<Footer />} />
      </body>
    </html>
  )
}
