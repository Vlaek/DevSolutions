'use client'

import { FC, useEffect, useState } from 'react'
import { useTranslations } from 'next-intl'
import { StackList, Title } from '@/shared/components'
import styles from './Projects.module.scss'
import classNames from 'classnames'
import { checkObjectIsArrayByKey } from '@/shared/helpers/helperObject'
import { IProject, projectList } from '@/shared/data'
import Image from 'next/image'

interface ICategory {
  title: string
  count: number
}

const categories: ICategory[] = [
  {
    title: 'Web',
    count: 7,
  },
  {
    title: 'Analytics',
    count: 8,
  },
  {
    title: 'Design',
    count: 6,
  },
  {
    title: 'Hardware',
    count: 1,
  },
  {
    title: 'Mobile',
    count: 7,
  },
  {
    title: 'Testing',
    count: 8,
  },
]

const Projects: FC = () => {
  const [selectedCategories, setSelectedCategories] = useState<ICategory[]>([])
  const [filteredProjects, setFilteredProjects] = useState<IProject[]>(projectList)
  const t = useTranslations('ProjectsPage')

  const onClick = (category: ICategory) => {
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
            onClick={() => onClick(item)}
          >
            <p className={styles.categories__item__text}>{item.title}</p>
            <p className={styles.categories__item__text}>({item.count})</p>
          </div>
        ))}
      </section>
      <section className={styles.projects}>
        {filteredProjects.map((project) => (
          <div key={project.id} className={styles.projects__item}>
            <Image src={project.img} width={200} height={200} alt='da' />
            <div className={styles.projects__item__title}>{project.title}</div>
            <div className={styles.projects__item__subtitle}>{project.subtitle}</div>
            {/* <ul>
              {project.stack.map((item) => (
                <li key={item} className={styles.project__item__stack__item}>
                  {item}
                </li>
              ))}
            </ul> */}
            <StackList stack={project.stack} />
          </div>
        ))}
      </section>
    </div>
  )
}

export default Projects
