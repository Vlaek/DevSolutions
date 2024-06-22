import { FC } from 'react'
import styles from './Error.module.scss'

interface ErrorProps {
  isActive: boolean
  text: string
}

const Error: FC<ErrorProps> = (props) => {
  const { isActive, text } = props

  return <div className={styles.error}>{isActive ? text : ''}</div>
}

export { Error }
