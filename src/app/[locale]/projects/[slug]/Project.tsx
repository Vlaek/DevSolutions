'use client'

import { FC, useState, useEffect } from 'react'
import Image from 'next/image'
import { IProject, projectList } from '@/shared/data'
import { ProjectForm, ProjectsList, StackList } from '@/shared/components'
import styles from './Project.module.scss'

interface IProjectProps {
  item: IProject
}

const Project: FC<IProjectProps> = (props) => {
  const { item } = props
  const [filteredProjects, setFilteredProjects] = useState<IProject[]>(projectList)

  useEffect(() => {
    const projectsCopy = [...projectList.filter((project) => project.title !== item.title)]
    const randomProjects = []
    while (randomProjects.length < 3 && projectsCopy.length > 0) {
      const randomIndex = Math.floor(Math.random() * projectsCopy.length)
      const removedProjects = projectsCopy.splice(randomIndex, 1)
      randomProjects.push(removedProjects[0])
    }
    setFilteredProjects(randomProjects)
  }, [item])

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
        <h2 className={styles.info__title}>Используемые технологии</h2>
        <ul className={styles.info__list}>
          {item.technologies.map((tech) => (
            <li className={styles.info__list__item} key={tech}>
              {tech}
            </li>
          ))}
        </ul>
      </section>
      <ProjectForm />
      <section className={styles.projects}>
        <p className={styles.projects__title}>Еще проекты</p>
        <ProjectsList items={filteredProjects} />
      </section>
    </>
  )
}

export default Project
