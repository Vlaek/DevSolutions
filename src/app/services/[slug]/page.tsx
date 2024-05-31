import { FC } from 'react'
import { serviceList } from '../../../shared/data'
import NotFound from '@/app/not-found'
import { Metadata } from 'next'
import { helperString } from '@/shared/helpers'
import ServicePage from './ServicePage'

interface IProductPageParams {
  params: {
    slug: string
  }
}

export const metadata: Metadata = {
  authors: [{ name: 'Vladislav Eichwald', url: 'https://github.com/Vlaek' }],
  description: 'Services Page',
  icons: './next.svg',
}

const ProductPage: FC<IProductPageParams> = ({ params }) => {
  const service = (() => {
    return serviceList.find((item) => item.card.url === params.slug) || null
  })()

  if (service === null) {
    return <NotFound />
  }

  const card = service?.card

  metadata.title = helperString.capitalizeFirstLetterOfEachWord(card.title || 'Service')
  metadata.description = card.description || 'Service Page'

  return <ServicePage card={card} />
}

export default ProductPage
