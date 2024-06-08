'use client'

import { FC, useState } from 'react'
import styles from './ProjectForm.module.scss'
import { CustomInput } from '../CustomInput/CustomInput'
import { useTranslations } from 'next-intl'

const initialValue = {
  name: '',
  company: '',
  email: '',
}

const ProjectForm: FC = () => {
  const [state, setState] = useState(initialValue)
  const t = useTranslations('ProjectForm')

  const onDataByKeyChange = (value: string | number | boolean | null, key: string): void => {
    setState({ ...state, [key]: value })
  }

  return (
    <div className={styles.project}>
      <div className={styles.form}>
        <div className={styles.form__header}>
          <h2 className={styles.form__header__title}>{t('header.title')}</h2>
          <p className={styles.form__header__text}>{t('header.description')}</p>
        </div>
        <CustomInput
          value={state.name}
          placeholder={t('placeholder.name')}
          keyValue='name'
          onDataByKeyChange={onDataByKeyChange}
        />
        <CustomInput
          value={state.company}
          placeholder={t('placeholder.company')}
          keyValue='company'
          onDataByKeyChange={onDataByKeyChange}
        />
        <CustomInput
          value={state.email}
          placeholder='E-mail'
          keyValue='email'
          onDataByKeyChange={onDataByKeyChange}
        />
        <div className={styles.form__footer}>
          <button className={styles.form__footer__button}>{t('button')}</button>
        </div>
      </div>
    </div>
  )
}

export { ProjectForm }
