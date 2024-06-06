'use client'

import { FC, useState } from 'react'
import styles from './ContactsForm.module.scss'
import { CustomInput, CustomTextarea } from '@/shared/components/index'
import { useTranslations } from 'next-intl'

const initialValue = {
  name: '',
  email: '',
  about: '',
}

const ContactsForm: FC = () => {
  const [state, setState] = useState(initialValue)
  const t = useTranslations('ContactsForm')

  const onDataByKeyChange = (value: string | number | boolean | null, key: string): void => {
    setState({ ...state, [key]: value })
  }

  return (
    <div className={styles.contacts}>
      <div className={styles.form}>
        <div className={styles.form__header}>
          <h2 className={styles.form__header__title}>
            {t('header.title.1')} <span className={styles.form__header__title_orange}>{t('header.title.2')}</span> {t('header.title.3')}
            <span className={styles.form__header__title_orange}> {t('header.title.4')}</span> {t('header.title.5')}
          </h2>
          <p className={styles.form__header__text}>
          {t('header.description')}
          </p>
        </div>
        <CustomInput
          value={state.name}
          placeholder={t('placeholder.name')}
          keyValue='name'
          onDataByKeyChange={onDataByKeyChange}
        />
        <CustomInput
          value={state.email}
          placeholder='E-mail'
          keyValue='email'
          onDataByKeyChange={onDataByKeyChange}
        />
        <CustomTextarea
          value={state.about}
          placeholder={t('placeholder.about')}
          keyValue='about'
          type='text'
          onDataByKeyChange={onDataByKeyChange}
        />
        <div className={styles.form__footer}>
          <p className={styles.form__footer__text}>{t('footer')}</p>
          <button className={styles.form__footer__button}>{t('button')}</button>
        </div>
      </div>
    </div>
  )
}

export { ContactsForm }
