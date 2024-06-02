import Link from 'next/link'
import { FC } from 'react'
import styles from './Navigation.module.scss'

interface INavigation {
  name: string
  link: string
}

const list: INavigation[] = [
  {
    name: 'Услуги',
    link: '/services',
  },
  {
    name: 'Проекты',
    link: '/projects',
  },
  {
    name: 'Работа у нас',
    link: '/work',
  },
  {
    name: 'FAQ',
    link: '/faq',
  },
  {
    name: 'Связаться с нами',
    link: '/contacts',
  },
]

const Navigation: FC = () => {
  return (
    <nav className={styles.nav}>
      <ul className={styles.nav__list}>
        {list.map((item) => (
          <li className={styles.nav__list__item} key={item.name}>
            <Link href={item.link}>{item.name}</Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export { Navigation }
