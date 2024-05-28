'use client'

import { FC } from 'react'
import styles from './FAQ.module.scss'
import { list } from './data'
import Contacts from '../contacts/Contacts'
import { Accordion, Title } from '@/shared/components'

const FAQ: FC = () => {
  return (
    <div className={styles.faq}>
      <Title
        title={'Frequently Asked Questions'}
        subtitle={'Вопросы, на которые мы уже знаем ответы'}
      />
      <section className={styles.faq__list}>
        <Accordion list={list} />
      </section>
      <Contacts />
    </div>
  )
}

export default FAQ
Accordion
