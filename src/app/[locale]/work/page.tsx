import { Metadata } from 'next'
import Work from './Work'
import { meta } from '@/shared/meta'

export const metadata: Metadata = {
  title: meta.getTitle('Работа у нас'),
  authors: meta.default.authors,
  description: meta.getDescription(
    'Страница с информацией о работе в DevSolutions. Список вакансий.',
  ),
  icons: meta.default.icons,
}

export default async function Page() {
  return <Work />
}
