'use client'

import { FC } from 'react'
import styles from './FAQ.module.scss'
import Accordion from '@/shared/components/Accordion/Accordion'
import { list } from './data'
import Contacts from '../contacts/Contacts'

const FAQ: FC = () => {
  return (
    <div className={styles.faq}>
      <div style={{ marginBottom: '100px' }}>
        <h1 className={styles.faq__title}>Frequently Asked Questions</h1>
        <p className={styles.faq__subtitle}>Вопросы, на которые мы уже знаем ответы</p>
      </div>
      <section className={styles.faq__list}>
        <Accordion list={list} />
      </section>
      <Contacts />
    </div>
  )
}

export default FAQ
