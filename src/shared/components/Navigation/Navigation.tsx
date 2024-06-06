'use client'

import Link from 'next/link'
import { FC } from 'react'
import styles from './Navigation.module.scss'
import { useLocale, useTranslations } from 'next-intl'

interface INavigation {
  name: string
  link: string
}

const Navigation: FC = () => {
  const t = useTranslations('Header')
  const locale = useLocale()

  const list: INavigation[] = [
    {
      name: t('services'),
      link: '/services',
    },
    {
      name: t('projects'),
      link: '/projects',
    },
    {
      name: t('work'),
      link: '/work',
    },
    {
      name: 'FAQ',
      link: '/faq',
    },
    {
      name: t('contacts'),
      link: '/contacts',
    },
  ]

  return (
    <nav className={styles.nav}>
      <ul className={styles.nav__list}>
        {list.map((item) => (
          <li className={styles.nav__list__item} key={item.name}>
            <Link href={`/${locale}/${item.link}`} locale={locale}>
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export { Navigation }
