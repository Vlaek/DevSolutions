'use client'

import { FC } from 'react'
import styles from './NotFoundPage.module.scss'
import Image from 'next/image'
import { Link } from '@/navigation'
import { useTranslations } from 'next-intl'

const NotFoundPage: FC = () => {
  const t = useTranslations('404')

  return (
    <section className={styles.page}>
      <div className={styles.page__block}>
        <h1 className={styles.page__block__title}>404</h1>
        <h2 className={styles.page__block__subtitle}>{t('subtitle')}</h2>
        <p className={styles.page__block__text}>{t('text')}</p>
        <Link href={'/'}>
          <button className={styles.page__block__button}>{t('button')}</button>
        </Link>
      </div>
      <Image src={'/img/404.png'} width={500} height={500} alt='404' draggable={false} />
    </section>
  )
}

export { NotFoundPage }
