import { FC } from 'react'
import { Metadata } from 'next'
import VacancyPage from './VacancyPage'
import { helperString } from '@/shared/helpers'
import { vacancies } from '@/shared/data'
import { meta } from '@/shared/meta'
import { IVacancy } from '@/shared/types/models'
import NotFound from '../../not-found'

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
  const vacancy = (() => {
    return vacancies.find((item: IVacancy) => item.id === +params.id) || null
  })()

  if (vacancy === null) {
    return <NotFound />
  }

  const metaTitle = helperString.capitalizeFirstLetterOfEachWord(vacancy.title || 'Vacancy')
  metadata.title = meta.getTitle(metaTitle)
  metadata.description = vacancy.desc || 'Vacancy Page'

  return <VacancyPage item={vacancy} />
}

export default WorkPage
