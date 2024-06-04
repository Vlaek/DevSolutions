'use client'

import { FC } from 'react'
import styles from './Header.module.scss'
import classNames from 'classnames'
import Link from 'next/link'
import Image from 'next/image'
import { Navigation } from '../Navigation/Navigation'
import { usePathname, useRouter } from 'next/navigation'
import { useLocale } from 'next-intl'
import { useAppSelector, useAppDispatch } from '@/lib/hooks'
import { changeLocale } from '@/lib/features/header/localeSlice'

const Header: FC = () => {
  const currentLocale: string = useAppSelector((state) => state.local.locale)
  const dispatch = useAppDispatch()

  const router = useRouter()
  const pathname = usePathname()
  const locale = useLocale()
  console.log(currentLocale)

  const handleButton = () => {
    if (locale === 'en') {
      dispatch(changeLocale('ru'))
      router.replace(pathname.replace('/en', '/ru'))
    } else {
      dispatch(changeLocale('en'))
      router.replace(`/en/${pathname}`)
    }
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
          {currentLocale.toUpperCase()}
        </button>
      </div>
    </div>
  )
}

export { Header }
