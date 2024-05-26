import { Metadata } from 'next'
import Work from './Work'
// import { notFound } from 'next/navigation'

export const metadata: Metadata = {
  title: 'Work',
  authors: [{ name: 'Vladislav Eichwald', url: 'https://github.com/Vlaek' }],
  description: 'Work Page',
  icons: './next.svg',
}

// export async function generateMetadata({ params }: { params: { slug } }): Promise<Metadata> {
//   const product = await getData(slug)
//   return { title: product.title }
// }

// // SSR
// const fetchData = async () => {
//   const response = await fetch('https://api.example.com/products')
//   const data = await response.json()
//   return data
// }

// // SSG
// const fetchStaticData = async () => {
//   const response = await fetch('https://api.example.com/products', {
//     cache: 'force-cache',
//   })
//   const data = await response.json()
//   return data
// }

// // ISR
// const fetchISRData = async () => {
//   const response = await fetch('https://api.example.com/products', {
//     cache: 'force-cache',
//     next: {
//       revalidate: 3600, // 1 hours
//     },
//   })
//   const data = await response.json()
//   return data
// }

export default async function Page() {
  // const data = await fetchData()

  // if (!data) {
  //   notFound()
  // }

  return <Work />
}
