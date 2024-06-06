'use client'

import { FC } from 'react'
import styles from './FAQ.module.scss'
import { list } from './data'
import { Accordion, ContactsForm, Title } from '@/shared/components'
import { useLocale, useTranslations } from 'next-intl'

const FAQ: FC = () => {
  const t = useTranslations('FAQPage')
  const locale = useLocale()
  return (
    <div className={styles.faq}>
      <Title
        title={'Frequently Asked Questions'}
        subtitle={t('subtitle')}
      />
      <section className={styles.faq__list}>
        <Accordion list={list[locale]} />
      </section>
      <ContactsForm />
    </div>
  )
}

export default FAQ
Accordion
