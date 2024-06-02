import { FC } from 'react'
import { vacancies } from '../../../shared/data'
import NotFound from '@/app/not-found'
import { Metadata } from 'next'
import { helperString } from '@/shared/helpers'
import VacancyPage from './VacancyPage'

interface IWorkPageParams {
  params: {
    id: number
  }
}

export const metadata: Metadata = {
  authors: [{ name: 'Vladislav Eichwald', url: 'https://github.com/Vlaek' }],
  description: 'Vacancy Page',
  icons: './next.svg',
}

const WorkPage: FC<IWorkPageParams> = ({ params }) => {
  console.log(params.id)
  const vacancy = (() => {
    return vacancies.find((item) => item.id === params.id) || null
  })()

  if (vacancy === null) {
    return <NotFound />
  }

  metadata.title = helperString.capitalizeFirstLetterOfEachWord(vacancy.title || 'Vacancy')
  metadata.description = vacancy.desc || 'Service Page'

  return <VacancyPage item={vacancy} />
}

export default WorkPage
