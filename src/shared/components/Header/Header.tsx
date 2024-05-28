'use client'

import { FC, useState } from 'react'
import styles from './Header.module.scss'
import classNames from 'classnames'
import Link from 'next/link'
import Image from 'next/image'
import { Navigation } from '../Navigation/Navigation'

const Header: FC = () => {
  const [state, setState] = useState(false)

  const handleButton = () => {
    setState(!state)
  }

  return (
    <div className={styles.header}>
      <div className={classNames(styles.header__block, styles.header__block_left)}>
        <Link className='' href='/'>
          <Image src='/next.svg' alt='test' width={1} height={1} className={styles.header__icon} />
        </Link>
      </div>
      <div className={classNames(styles.header__block, styles.header__block_right)}>
        <Navigation />
        <button className={classNames(styles.header__button)} onClick={() => handleButton()}>
          {state ? 'RU' : 'EN'}
        </button>
      </div>
    </div>
  )
}

export { Header }
