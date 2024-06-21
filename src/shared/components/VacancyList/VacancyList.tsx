'use client'

import { FC } from 'react'
import styles from './VacancyList.module.scss'
import { vacancies } from '@/shared/data'
import { IVacancy } from '@/shared/types/models'
import { useRouter } from 'next/navigation'

const categorizeVacancies = () => {
  return vacancies.reduce((acc: any, vacancy) => {
    if (!acc[vacancy.category]) {
      acc[vacancy.category] = []
    }
    acc[vacancy.category].push(vacancy)
    return acc
  }, {})
}

const VacancyList: FC = () => {
  const categories = categorizeVacancies()
  const router = useRouter()
  const onClickHandle = (item: IVacancy) => {
    router.push(`/work/${item.id}`)
  }

  return (
    vacancies.length > 0 && (
      <section className={styles.jobs}>
        <h3 className={styles.jobs__title}>Наши вакансии</h3>
        <ul className={styles.jobs__block__list}>
          {Object.keys(categories).map((category) => (
            <li className={styles.jobs__block} key={category}>
              <h4 className={styles.jobs__block__title}>{category}</h4>
              <ul className={styles.jobs__cards}>
                {categories[category].map((vacancy: IVacancy) => (
                  <li
                    className={styles.jobs__cards__item}
                    key={vacancy.title + vacancy.level}
                    onClick={() => onClickHandle(vacancy)}
                  >
                    <p className={styles.jobs__cards__item__title}>{vacancy.title}</p>
                    <p className={styles.jobs__cards__item__subtitle}>{vacancy.subtitle}</p>
                    <p className={styles.jobs__cards__item__level}>{vacancy.level}</p>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </section>
    )
  )
}

export { VacancyList }
