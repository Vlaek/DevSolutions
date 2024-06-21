'use client'

import { FC } from 'react'
import { AboutUsCardList, Title, VacancyList, WorkForm } from '@/shared/components'
import styles from './Work.module.scss'
import Image from 'next/image'
import { useTranslations } from 'next-intl'
import { aboutUsCards, workCards } from '@/shared/data'

const Work: FC = () => {
  const t = useTranslations('WorkPage')

  return (
    <div className={styles.work}>
      <Title title={t('title')} subtitle={t('subtitle')} />
      <section className={styles.work__desc}>
        <div className={styles.work__desc__text}>
          <p>
            <span>DevSolutions</span> - компания в области информационных технологий с
            аккредитацией, специализирующаяся на разработке заказного программного обеспечения.
          </p>
          <p>
            Наша экспертиза включает в себя <span>создание</span> веб и мобильных приложений. Мы
            предоставляем полный спектр услуг по разработке ПО - от сбора требований клиента до
            поддержки продукта после выпуска, благодаря нашим специалистам всех уровней.
          </p>
          <p>
            Основная задача нашей команды - <span> глубоко понимать </span>
            каждую задачу, поступающую от клиента, чтобы предложить оптимальное решение для его{' '}
            <span>бизнеса</span>.
          </p>
        </div>
        <Image
          src='/img/job.png'
          alt='img'
          className={styles.work__desc__img}
          width={800}
          height={800}
          draggable={false}
          aria-hidden={true}
        />
      </section>
      <AboutUsCardList cards={aboutUsCards} title='Почему мы' />
      <VacancyList />
      <AboutUsCardList
        cards={workCards}
        title='Только начинаешь?'
        subtitle='Мы принимаем студентов на стажировки и производственные практики. Если Вы программист, тестировщик, дизайнер или аналитик – у Вас есть отличная возможность получить новые знания и профессиональный опыт.'
      />
      <section className={styles.section}>
        <WorkForm />
      </section>
    </div>
  )
}

export default Work
