import { FC } from 'react'
import { serviceList } from '../../../shared/data'
import NotFound from '@/app/not-found'
import { Metadata } from 'next'
import { helperString } from '@/shared/helpers'
import Service from './Service'
import { meta } from '@/shared/meta'

interface IServicePageParams {
  params: {
    slug: string
  }
}

export const metadata: Metadata = {
  authors: meta.default.authors,
  icons: meta.default.icons,
}

const ServicePage: FC<IServicePageParams> = ({ params }) => {
  const service = (() => {
    return serviceList.find((item) => item.card.url === params.slug) || null
  })()

  if (service === null) {
    return <NotFound />
  }

  const card = service?.card

  const metaTitle = helperString.capitalizeFirstLetterOfEachWord(card.title || 'Service')
  metadata.title = meta.getTitle(metaTitle)
  metadata.description = card.description || 'Service Page'

  return <Service card={card} />
}

export default ServicePage
