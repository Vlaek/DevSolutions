import { FC } from 'react'
import { IAboutUsCard } from '@/shared/types/models'
import Image from 'next/image'
import styles from './AboutUsCard.module.scss'

interface IAboutUsCardProps {
  item: IAboutUsCard
}

const AboutUsCard: FC<IAboutUsCardProps> = (props) => {
  const { item } = props

  return (
    <div key={item.title} className={styles.about__cards__item}>
      <p className={styles.about__cards__item__title}>{item.title}</p>
      <p className={styles.about__cards__item__subtitle}>{item.subtitle}</p>
      <div className={styles.about__cards__item__img}>
        <Image
          src={item.img}
          alt='img'
          width={340}
          height={300}
          className={styles.about__cards__item__img__item}
          draggable={false}
        />
      </div>
    </div>
  )
}

export { AboutUsCard }
