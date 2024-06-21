'use client'

import { FC, useLayoutEffect } from 'react'
import styles from './Layout.module.scss'
import { useSelector } from 'react-redux'
import { RootState } from '@/lib/store'
import { ModalConfirm } from '../ModalConfirm/ModalConfirm'

interface ILayoutProps {
  header: React.ReactNode
  main: React.ReactNode
  footer: React.ReactNode
}

const Layout: FC<ILayoutProps> = (props) => {
  const { header, main, footer } = props
  const theme = useSelector((state: RootState) => state.main.theme)

  useLayoutEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
  }, [theme])

  return (
    <div className={styles.layout}>
      <header className={styles.header}>{header}</header>
      <main className={styles.main}>{main}</main>
      <footer className={styles.footer}>{footer}</footer>
      <ModalConfirm />
    </div>
  )
}

export { Layout }
