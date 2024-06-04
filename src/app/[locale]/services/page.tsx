import { Metadata } from 'next'
import Services from './Services'
import { meta } from '@/shared/meta'

export const metadata: Metadata = {
  title: meta.getTitle('Услуги'),
  authors: meta.default.authors,
  description: meta.getDescription('Страница наших услуг'),
  icons: meta.default.icons,
}

export default async function Page() {
  return <Services />
}
