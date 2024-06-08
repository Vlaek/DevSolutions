'use client'

import { FC, useEffect, useState } from 'react'
import { ICard } from '@/shared/types/models'
import { helperString } from '@/shared/helpers'
import { ContactsForm, ProjectsList } from '@/shared/components'
import styles from './Service.module.scss'
import { IProject, projectList } from '@/shared/data'

interface IService {
  card: ICard
}

const Service: FC<IService> = (props) => {
  const { card } = props
  const [filteredProjects, setFilteredProjects] = useState<IProject[]>(projectList)

  useEffect(() => {
    const filtered = projectList.filter((project) => {
      return project.stack.includes(card.category)
    })
    setFilteredProjects(filtered)
  }, [card.category])

  return (
    <div className={styles.card}>
      <div className={styles.card__header}>
        <h1 className={styles.card__header__title}>
          {helperString.capitalizeFirstLetter(card.title)}
        </h1>
        <h2 className={styles.card__header__desc}>{card.description}</h2>
      </div>
      <section className={styles.card__stack}>
        <p className={styles.card__stack__title}>Наш стек</p>
        <ul className={styles.card__stack__list}>
          {card.full_stack?.map((item) => (
            <li className={styles.card__stack__list__item} key={item}>
              {item}
            </li>
          ))}
        </ul>
      </section>
      <section className={styles.card__projects}>
        <p className={styles.card__projects__title}>Наш опыт</p>
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
