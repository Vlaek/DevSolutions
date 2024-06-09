import { Link } from '@/navigation'
import styles from './BigButtonLink.module.scss'
import { FC } from 'react'

interface IBigButtonLinkProps {
  href: string
  title: string
}

const BigButtonLink: FC<IBigButtonLinkProps> = (props) => {
  const { href, title } = props
  return (
    <Link href={href} className={styles.button}>
      {title}
    </Link>
  )
}

export { BigButtonLink }
