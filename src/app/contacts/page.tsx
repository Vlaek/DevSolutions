import { Metadata } from 'next'
import Contacts from './Contacts'

export const metadata: Metadata = {
  title: 'Contacts',
  authors: [{ name: 'Vladislav Eichwald', url: 'https://github.com/Vlaek' }],
  description: 'Products Page',
  icons: './next.svg',
}

export default async function Page() {
  return <Contacts />
}
