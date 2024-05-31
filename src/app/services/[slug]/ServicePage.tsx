import { ICard } from '@/shared/types/models'
import { FC } from 'react'
import styles from './ServicePage.module.scss'
import { helperString } from '@/shared/helpers'
import Contacts from '@/app/contacts/Contacts'

interface ServicePageProps {
  card: ICard
}

const ServicePage: FC<ServicePageProps> = (props) => {
  const { card } = props
  return (
    <div className={styles.card}>
      <div className={styles.card__header}>
        <h1 className={styles.card__header__title}>
          {helperString.capitalizeFirstLetter(card.title)}
        </h1>
        <h2 className={styles.card__header__desc}>{card.description}</h2>
      </div>
      <section className={styles.card__stack}>
        <p className={styles.card__stack__title}>Наш стек</p>
        <ul className={styles.card__stack__list}>
          {card.full_stack?.map((item) => (
            <li className={styles.card__stack__list__item} key={item}>
              {item}
            </li>
          ))}
        </ul>
      </section>
      <section className={styles.card__projects}>
        <p className={styles.card__projects__title}>Наш опыт</p>
        <div className={styles.card__projects__container}>da</div>
      </section>
      <section className={styles.card__contacts}>
        <Contacts />
      </section>
    </div>
  )
}

export default ServicePage
