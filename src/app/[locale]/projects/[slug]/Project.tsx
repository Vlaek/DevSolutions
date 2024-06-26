'use client'

import { FC, useState, useEffect } from 'react'
import Image from 'next/image'
import { projectList } from '@/shared/data'
import { ProjectForm, ProjectsList, StackList } from '@/shared/components'
import styles from './Project.module.scss'
import { IProject } from '@/shared/types/models'
import { useLocale, useTranslations } from 'next-intl'

interface IProjectProps {
  item: IProject
}

const Project: FC<IProjectProps> = (props) => {
  const { item } = props
  const locale = useLocale()
  const [filteredProjects, setFilteredProjects] = useState<IProject[]>(projectList[locale])
  const t = useTranslations('Project')

  useEffect(() => {
    const projectsCopy = [...projectList[locale].filter((project) => project.title !== item.title)]
    const randomProjects = []
    while (randomProjects.length < 3 && projectsCopy.length > 0) {
      const randomIndex = Math.floor(Math.random() * projectsCopy.length)
      const removedProjects = projectsCopy.splice(randomIndex, 1)
      randomProjects.push(removedProjects[0])
    }
    setFilteredProjects(randomProjects)
  }, [item, locale])

  return (
    <>
      <section className={styles.main}>
        <div className={styles.main__text}>
          <h1 className={styles.main__text__title}>{item.title}</h1>
          <h2 className={styles.main__text__subtitle}>{item.subtitle}</h2>
          <StackList stack={item.stack} />
        </div>
        <Image src={item.img} width={500} height={500} alt='Project Image' draggable={false} />
      </section>
      <section className={styles.info}>
        <h2 className={styles.info__title}>{t('technologies')}</h2>
        <ul className={styles.info__list}>
          {item.technologies.map((tech) => (
            <li className={styles.info__list__item} key={tech}>
              {tech}
            </li>
          ))}
        </ul>
      </section>
      <section className={styles.info}>
        <h2 className={styles.info__title}>{t('result')}</h2>
        <a className={styles.info__button} href={item.github} target='blank'>
          {t('button')}
        </a>
      </section>
      <ProjectForm />
      <section className={styles.projects}>
        <p className={styles.projects__title}>{t('more')}</p>
        <ProjectsList items={filteredProjects} />
      </section>
    </>
  )
}

export default Project
