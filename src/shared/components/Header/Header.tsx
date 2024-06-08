'use client'

import { FC, useState } from 'react'
import styles from './Header.module.scss'
import classNames from 'classnames'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname, useRouter } from 'next/navigation'
import { useLocale } from 'next-intl'
import { Navigation } from '@/shared/components'
import { useTheme } from '@/shared/hooks/useTheme'

const Header: FC = () => {
  const locale = useLocale()
  const [currentLocale, setCurrentLocale] = useState<string>(locale)

  const router = useRouter()
  const pathname = usePathname()

  const handleButton = () => {
    if (locale === 'en') {
      setCurrentLocale('ru')
      router.replace(pathname.replace('/en', '/ru'))
    } else {
      setCurrentLocale('en')
      router.replace(`/en/${pathname}`)
    }
  }

  const { theme, setTheme } = useTheme()

  const handleThemaButton = () => {
    setTheme(theme === 'Light' ? 'Dark' : 'Light')
  }

  return (
    <div className={styles.header}>
      <div className={classNames(styles.header__block, styles.header__block_left)}>
        <Link href='/'>
          <Image src='/next.svg' alt='test' width={1} height={1} className={styles.header__icon} />
        </Link>
      </div>
      <div className={classNames(styles.header__block, styles.header__block_right)}>
        <Navigation />
        <button className={classNames(styles.header__button)} onClick={() => handleButton()}>
          {currentLocale.toUpperCase()}
        </button>
        <button className={classNames(styles.header__button)} onClick={() => handleThemaButton()}>
          {theme}
        </button>
      </div>
    </div>
  )
}

export { Header }
