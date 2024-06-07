import { FC } from 'react'
import styles from './ProjectsList.module.scss'
import { IProject } from '@/shared/data'
import { StackList } from '../StackList/StackList'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

interface IProjectsListProps {
  items: IProject[]
}

const ProjectsList: FC<IProjectsListProps> = (props) => {
  const { items } = props
  const router = useRouter()

  const onClickItem = (item: IProject) => {
    if (item.url) {
      router.push(`/projects/${item.url}`)
    }
  }

  return (
    <section className={styles.projects}>
      {items.map((project) => (
        <div
          key={project.id}
          className={styles.projects__item}
          onClick={() => onClickItem(project)}
        >
          <div className={styles.projects__item__image}>
            <Image
              src={project.img}
              width={500}
              height={500}
              alt='project_image'
              draggable={false}
            />
          </div>
          <div className={styles.projects__item__desc}>
            <div className={styles.projects__item__desc__title}>{project.title}</div>
            <div className={styles.projects__item__desc__subtitle}>{project.subtitle}</div>
            <StackList stack={project.stack} />
          </div>
        </div>
      ))}
    </section>
  )
}

export default ProjectsList
