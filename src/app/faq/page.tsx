import { Metadata } from 'next'
import FAQ from './FAQ'

export const metadata: Metadata = {
  title: 'FAQ',
  authors: [{ name: 'Vladislav Eichwald', url: 'https://github.com/Vlaek' }],
  description: 'FAQ',
  icons: './next.svg',
}

export default async function Page() {
  return <FAQ />
}
