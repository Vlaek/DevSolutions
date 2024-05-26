import { FC } from 'react'
import styles from './Layout.module.scss'

interface ILayoutProps {
  header: React.ReactNode
  main: React.ReactNode
  footer: React.ReactNode
}

const Layout: FC<ILayoutProps> = (props) => {
  const { header, main, footer } = props

  return (
    <div className={styles.layout}>
      <header className={styles.header}>{header}</header>
      <main className={styles.main}>{main}</main>
      <footer className={styles.footer}>{footer}</footer>
    </div>
  )
}

export default Layout
