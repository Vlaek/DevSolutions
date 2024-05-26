'use client'

import { FC, useState } from 'react'
import styles from './Header.module.scss'
import classNames from 'classnames'
import Link from 'next/link'
import Image from 'next/image'

const Header: FC = () => {
  const [state, setState] = useState(false)

  const handleButton = () => {
    setState(!state)
  }

  return (
    <div className={styles.header}>
      <div>
        <Link className='' href='/'>
          <Image src='/next.svg' alt='test' width={1} height={1} className={styles.header__icon} />
        </Link>
      </div>
      <nav className={styles.header__nav}>
        <ul className={styles.header__nav__list}>
          <li className={styles.header__nav__list__item}>
            <Link className='' href='/'>
              Услуги
            </Link>
          </li>
          <li className={styles.header__nav__list__item}>
            <Link className='' href='/'>
              Проекты
            </Link>
          </li>
          <li className={styles.header__nav__list__item}>
            <Link className='' href='/work'>
              Работа у нас
            </Link>
          </li>
          <li className={styles.header__nav__list__item}>
            <Link className='' href='/faq'>
              FAQ
            </Link>
          </li>
          <li
            className={classNames(
              styles.header__nav__list__item,
              styles.header__nav__list__item_orange,
            )}
          >
            <Link className='' href='/contacts'>
              Связаться с нами
            </Link>
          </li>
          <li
            className={classNames(
              styles.header__nav__list__item,
              styles.header__nav__list__item_button,
            )}
            onClick={() => handleButton()}
          >
            {state ? 'RU' : 'EN'}
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Header
