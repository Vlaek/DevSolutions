import { IVacancy } from '@/shared/types/models'
import { FC } from 'react'

interface IVacancyPage {
  item: IVacancy
}

const VacancyPage: FC<IVacancyPage> = (props) => {
  const { item } = props
  return <div>{item.title}</div>
}

export default VacancyPage
