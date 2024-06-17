import { FC } from 'react'
import { IAboutUsCard } from '@/shared/types/models'
import styles from './AboutUsCard.module.scss'

interface IAboutUsCardProps {
  item: IAboutUsCard
}

const AboutUsCard: FC<IAboutUsCardProps> = (props) => {
  const { item } = props

  return (
    <div key={item.title} className={styles.item}>
      <p className={styles.item__title}>{item.title}</p>
      <p className={styles.item__subtitle}>{item.subtitle}</p>
    </div>
  )
}

export { AboutUsCard }
