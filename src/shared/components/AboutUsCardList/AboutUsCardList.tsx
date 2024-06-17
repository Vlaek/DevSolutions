import { FC } from 'react'
import { AboutUsCard } from '../AboutUsCard/AboutUsCard'
import styles from './AboutUsCardList.module.scss'
import { IAboutUsCard } from '@/shared/types/models'

interface IAboutUsCardListProps {
  title: string
  subtitle?: string
  cards: IAboutUsCard[]
}

const AboutUsCardList: FC<IAboutUsCardListProps> = (props) => {
  const { title, subtitle, cards } = props

  return (
    <section className={styles.about}>
      <div>
        <h3 className={styles.about__title}>{title}</h3>
        {subtitle && <p className={styles.about__subtitle}>{subtitle}</p>}
      </div>
      <div className={styles.about__cards}>
        {cards.map((item) => (
          <AboutUsCard key={item.title} item={item} />
        ))}
      </div>
    </section>
  )
}

export { AboutUsCardList }
