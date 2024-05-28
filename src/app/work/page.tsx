import { Metadata } from 'next'
import Work from './Work'

export const metadata: Metadata = {
  title: 'Work',
  authors: [{ name: 'Vladislav Eichwald', url: 'https://github.com/Vlaek' }],
  description: 'Work Page',
  icons: './next.svg',
}

export default async function Page() {
  return <Work />
}
