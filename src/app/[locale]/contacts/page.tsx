import { Metadata } from 'next'
import Contacts from './Contacts'
import { meta } from '@/shared/meta'

export const metadata: Metadata = {
  title: meta.getTitle('Связаться с нами'),
  authors: meta.default.authors,
  description: meta.getDescription('Страница наших контактов'),
  icons: meta.default.icons,
}

export default async function Page() {
  return <Contacts />
}
