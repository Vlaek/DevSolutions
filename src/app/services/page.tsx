import { Metadata } from 'next'
import Services from './Services'

export const metadata: Metadata = {
  title: 'Services',
  authors: [{ name: 'Vladislav Eichwald', url: 'https://github.com/Vlaek' }],
  description: 'Services Page',
  icons: './next.svg',
}

export default async function Page() {
  return <Services />
}
