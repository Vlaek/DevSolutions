'use client'

import { FC } from 'react'
import { Accordion, ContactsForm, Title } from '@/shared/components'
import { useLocale, useTranslations } from 'next-intl'
import { faqList } from '@/shared/data'
import styles from './FAQ.module.scss'

const FAQ: FC = () => {
  const t = useTranslations('FAQPage')
  const locale = useLocale()

  return (
    <div className={styles.faq}>
      <Title title={'Frequently Asked Questions'} subtitle={t('subtitle')} />
      <section className={styles.faq__list}>
        <Accordion list={faqList[locale]} />
      </section>
      <ContactsForm />
    </div>
  )
}

export default FAQ
