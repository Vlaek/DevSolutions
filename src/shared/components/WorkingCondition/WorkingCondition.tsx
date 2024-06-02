import { FC } from 'react'
import styles from './WorkingCondition.module.scss'

const WorkingCondition: FC = () => {
  return (
    <section className={styles.condition}>
      <h3 className={styles.condition__title}>Мы рады предложить</h3>
      <p className={styles.condition__subtitle}>Социальные гарантии:</p>
      <ul className={styles.condition__list}>
        <li className={styles.condition__list__item}>
          Трудоустройство по ТК РФ или любой удобный для вас формат сотрудничества: ГПХ/ ИП/
          Самозанятость
        </li>
        <li className={styles.condition__list__item}>
          Стабильную, полностью &quot;белую&quot; своевременную заработную плату
        </li>
      </ul>
      <p className={styles.condition__subtitle}>Комфортные условия работы:</p>
      <ul className={styles.condition__list}>
        <li className={styles.condition__list__item}>Работа по Московскому часовому поясу</li>
        <li className={styles.condition__list__item}>
          Занятость - фуллтайм. Удаленно или в офисе, если Вы проживаете в г. Томске
        </li>
      </ul>
      <p className={styles.condition__subtitle}>Перспективы самореализации и развития:</p>
      <ul className={styles.condition__list}>
        <li className={styles.condition__list__item}>Широкий технологический стек</li>
        <li className={styles.condition__list__item}>
          Наличие большого количества задач, которые дают возможность материального роста
        </li>
        <li className={styles.condition__list__item}>
          Крупные проекты для российских и международных брендов, которые дают возможность для
          профессионального роста
        </li>
      </ul>
    </section>
  )
}

export { WorkingCondition }
