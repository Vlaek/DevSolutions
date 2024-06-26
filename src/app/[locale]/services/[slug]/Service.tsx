'use client'

import { FC, useEffect, useState } from 'react'
import { ICard, IProject } from '@/shared/types/models'
import { helperString } from '@/shared/helpers'
import { ContactsForm, ProjectsList } from '@/shared/components'
import styles from './Service.module.scss'
import { projectList } from '@/shared/data'
import { useLocale, useTranslations } from 'next-intl'

interface IService {
  card: ICard
}

const Service: FC<IService> = (props) => {
  const { card } = props
  const locale = useLocale()
  const [filteredProjects, setFilteredProjects] = useState<IProject[]>(projectList[locale])
  const t = useTranslations('Service')

  useEffect(() => {
    const filtered = projectList[locale].filter((project) => {
      return project.stack.includes(card.category)
    })
    setFilteredProjects(filtered)
  }, [card, locale])

  return (
    <div className={styles.card}>
      <div className={styles.card__header}>
        <h1 className={styles.card__header__title}>
          {helperString.capitalizeFirstLetter(card.title)}
        </h1>
        <h2 className={styles.card__header__desc}>{card.description}</h2>
      </div>
      <section className={styles.card__stack}>
        <p className={styles.card__stack__title}>{t('stack')}</p>
        <ul className={styles.card__stack__list}>
          {card.full_stack?.map((item) => (
            <li className={styles.card__stack__list__item} key={item}>
              {item}
            </li>
          ))}
        </ul>
      </section>
      <section className={styles.card__projects}>
        <p className={styles.card__projects__title}>{t('experience')}</p>
        <div className={styles.card__projects__container}>
          <ProjectsList items={filteredProjects} />
        </div>
      </section>
      <section className={styles.card__contacts}>
        <ContactsForm />
      </section>
    </div>
  )
}

export default Service
