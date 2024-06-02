import { Metadata } from 'next'
import FAQ from './FAQ'
import { meta } from '@/shared/meta'

export const metadata: Metadata = {
  title: meta.getTitle('FAQ'),
  authors: meta.default.authors,
  description: meta.getDescription('Часто задаваемые вопросы'),
  icons: meta.default.icons,
}

export default async function Page() {
  return <FAQ />
}
