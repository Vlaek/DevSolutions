'use client'

import { FC, useEffect, useState } from 'react'
import { useTranslations } from 'next-intl'
import { ContactsForm, ProjectsList, Title } from '@/shared/components'
import { categories, projectList } from '@/shared/data'
import { IProject } from '@/shared/types/models'
import classNames from 'classnames'
import styles from './Projects.module.scss'

const Projects: FC = () => {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([])
  const [filteredProjects, setFilteredProjects] = useState<IProject[]>(projectList)
  const t = useTranslations('ProjectsPage')

  const onClickCategory = (category: string) => {
    if (selectedCategories.includes(category)) {
      setSelectedCategories([...selectedCategories].filter((item) => item !== category))
    } else {
      setSelectedCategories([...selectedCategories, category])
    }
  }

  useEffect(() => {
    setFilteredProjects(
      projectList.filter((project) => {
        return selectedCategories.every((category) => project.stack.includes(category))
      }),
    )
  }, [selectedCategories])

  return (
    <div>
      <Title title={t('title')} subtitle={t('subtitle')} />
      <section className={styles.categories}>
        {categories.map((item) => (
          <div
            className={classNames(styles.categories__item, {
              [styles.categories__item_active]: selectedCategories.includes(item),
            })}
            key={item}
            onClick={() => onClickCategory(item)}
          >
            <p className={styles.categories__item__text}>{item}</p>
          </div>
        ))}
      </section>
      <ProjectsList items={filteredProjects} />
      <div className={styles.divider}></div>
      <ContactsForm />
    </div>
  )
}

export default Projects
