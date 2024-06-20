import { FC } from 'react'
import { Metadata } from 'next'
import { helperString } from '@/shared/helpers'
import Service from './Service'
import { meta } from '@/shared/meta'
import { IService } from '@/shared/types/models'
import { serviceList } from '@/shared/data'
import NotFound from '../../not-found'

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
    return serviceList.find((item: IService) => item.card.url === params.slug) || null
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
