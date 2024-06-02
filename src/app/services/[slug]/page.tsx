import { FC } from 'react'
import { serviceList } from '../../../shared/data'
import NotFound from '@/app/not-found'
import { Metadata } from 'next'
import { helperString } from '@/shared/helpers'
import Service from './Service'

interface IServicePageParams {
  params: {
    slug: string
  }
}

export const metadata: Metadata = {
  authors: [{ name: 'Vladislav Eichwald', url: 'https://github.com/Vlaek' }],
  description: 'Services Page',
  icons: './next.svg',
}

const ServicePage: FC<IServicePageParams> = ({ params }) => {
  const service = (() => {
    return serviceList.find((item) => item.card.url === params.slug) || null
  })()

  if (service === null) {
    return <NotFound />
  }

  const card = service?.card

  metadata.title = helperString.capitalizeFirstLetterOfEachWord(card.title || 'Service')
  metadata.description = card.description || 'Service Page'

  return <Service card={card} />
}

export default ServicePage
