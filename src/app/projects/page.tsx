import { Metadata } from 'next'
import Projects from './Projects'
import { meta } from '@/shared/meta'

export const metadata: Metadata = {
  title: meta.getTitle('Проекты'),
  authors: meta.default.authors,
  description: meta.getDescription('Страница проектов, которые мы выполнили'),
  icons: meta.default.icons,
}

export default async function Page() {
  return <Projects />
}
