import { FC } from 'react'
import { AboutUsCard } from '../AboutUsCard/AboutUsCard'
import { aboutUsCards } from '@/shared/data'
import styles from './AboutUsCardList.module.scss'

const AboutUsCardList: FC = () => {
  return (
    <section className={styles.about}>
      <h3 className={styles.about__title}>Почему мы</h3>
      <div className={styles.about__cards}>
        {aboutUsCards.map((item) => (
          <AboutUsCard key={item.title} item={item} />
        ))}
      </div>
    </section>
  )
}

export { AboutUsCardList }
