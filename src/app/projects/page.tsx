import { Metadata } from 'next'
import Projects from './Projects'

export const metadata: Metadata = {
  title: 'Projects',
  authors: [{ name: 'Vladislav Eichwald', url: 'https://github.com/Vlaek' }],
  description: 'Projects Page',
  icons: './next.svg',
}

export default async function Page() {
  return <Projects />
}
