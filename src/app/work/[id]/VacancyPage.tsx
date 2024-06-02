import { IVacancy } from '@/shared/types/models'
import { FC } from 'react'
import styles from './VacancyPage.module.scss'
import { WorkForm, WorkingCondition } from '@/shared/components'

interface IVacancyPage {
  item: IVacancy
}

const VacancyPage: FC<IVacancyPage> = (props) => {
  const { item } = props
  return (
    <div className={styles.vacancy}>
      <h1 className={styles.vacancy__title}>{item.title}</h1>
      <ul className={styles.vacancy__title__list}>
        <li className={styles.vacancy__title__list__item}>{item.subtitle}</li>
        <li className={styles.vacancy__title__list__item}>{item.level}</li>
      </ul>
      <section className={styles.vacancy__desc}>
        <h3 className={styles.vacancy__desc__title}>Описание вакансии</h3>
        <p className={styles.vacancy__desc__text}>{item.desc}</p>
      </section>
      <section className={styles.vacancy__section}>
        <h3 className={styles.vacancy__section__title}>Ожидаем от Вас</h3>
        <ul className={styles.vacancy__section__list}>
          {item.expectations.map((expectation) => (
            <li className={styles.vacancy__section__list__item} key={expectation}>
              {expectation}
            </li>
          ))}
        </ul>
      </section>
      <section className={styles.vacancy__section}>
        <h3 className={styles.vacancy__section__title}>Будет плюсом</h3>
        <ul className={styles.vacancy__section__list}>
          {item.plus.map((plus) => (
            <li className={styles.vacancy__section__list__item} key={plus}>
              {plus}
            </li>
          ))}
        </ul>
      </section>
      <WorkingCondition />
      <WorkForm />
    </div>
  )
}

export default VacancyPage
