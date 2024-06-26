'use client'

import { FC } from 'react'
import { AboutUsCardList, Title, VacancyList, WorkForm } from '@/shared/components'
import styles from './Work.module.scss'
import Image from 'next/image'
import { useLocale, useTranslations } from 'next-intl'
import { aboutUsCards, vacancies, workCards } from '@/shared/data'

const Work: FC = () => {
  const t = useTranslations('WorkPage')
  const locale = useLocale()

  return (
    <div className={styles.work}>
      <Title title={t('title')} subtitle={t('subtitle')} />
      <section className={styles.work__desc}>
        <div className={styles.work__desc__text}>
          <p>
            <span>DevSolutions </span>
            {t('description.1')}
          </p>
          <p>
            {t('description.2')}
            <span> {t('description.3')} </span>
            {t('description.4')}
          </p>
          <p>
            {t('description.5')}
            <span> {t('description.6')} </span>
            {t('description.7')}
            <span> {t('description.8')}</span>.
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
      <AboutUsCardList cards={aboutUsCards[locale]} title={t('aboutUsCard.1')} />
      <VacancyList title={t('vacancy')} vacancies={vacancies[locale]} />
      <AboutUsCardList
        cards={workCards[locale]}
        title={t('aboutUsCard.2')}
        subtitle={t('aboutUsCard.subtitle')}
      />
      <section className={styles.section}>
        <WorkForm />
      </section>
    </div>
  )
}

export default Work
