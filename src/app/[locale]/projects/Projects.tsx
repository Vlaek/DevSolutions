'use client'

import { FC, useEffect, useState } from 'react'
import { useTranslations } from 'next-intl'
import { ContactsForm, ProjectsList, Title } from '@/shared/components'
import styles from './Projects.module.scss'
import classNames from 'classnames'
import { checkObjectIsArrayByKey } from '@/shared/helpers/helperObject'
import { categories, projectList } from '@/shared/data'
import { ICategory, IProject } from '@/shared/types/models'

const Projects: FC = () => {
  const [selectedCategories, setSelectedCategories] = useState<ICategory[]>([])
  const [filteredProjects, setFilteredProjects] = useState<IProject[]>(projectList)
  const t = useTranslations('ProjectsPage')

  const onClickCategory = (category: ICategory) => {
    if (checkObjectIsArrayByKey(selectedCategories, category, 'title')) {
      setSelectedCategories([...selectedCategories].filter((item) => item.title !== category.title))
    } else {
      setSelectedCategories([...selectedCategories, category])
    }
  }

  useEffect(() => {
    setFilteredProjects(
      projectList.filter((project) => {
        return selectedCategories.every((category) => project.stack.includes(category.title))
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
              [styles.categories__item_active]: checkObjectIsArrayByKey(
                selectedCategories,
                item,
                'title',
              ),
            })}
            key={item.title}
            onClick={() => onClickCategory(item)}
          >
            <p className={styles.categories__item__text}>{item.title}</p>
            <p className={styles.categories__item__text}>({item.count})</p>
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
