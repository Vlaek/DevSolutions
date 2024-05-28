'use client'

import { FC } from 'react'
import styles from './Title.module.scss'

interface ITitleProps {
  title: string
  subtitle: string
}

const Title: FC<ITitleProps> = (props) => {
  const { title, subtitle } = props
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{title}</h1>
      <p className={styles.subtitle}>{subtitle}</p>
    </div>
  )
}

export { Title }
