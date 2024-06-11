import type { Metadata } from 'next'
import { Jost } from 'next/font/google'
import { Layout, Header, Footer } from '@/shared/components/index'
import { getMessages } from 'next-intl/server'
import { NextIntlClientProvider } from 'next-intl'
import { meta } from '@/shared/meta'

const fontStyle = Jost({ subsets: ['latin'], weight: ['400', '900'] })

export const metadata: Metadata = {
  title: meta.getTitle('Разработка сайтов и мобильных приложений'),
  description: meta.getDescription('Главная страница сайта'),
}

interface RootLayoutProps {
  children: React.ReactNode
  params: {
    locale: string
  }
}

export default async function RootLayout({
  children,
  params: { locale },
}: Readonly<RootLayoutProps>) {
  const messages = await getMessages()

  return (
    <html lang={locale}>
      <body className={fontStyle.className}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Layout header={<Header />} main={children} footer={<Footer />} />
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
