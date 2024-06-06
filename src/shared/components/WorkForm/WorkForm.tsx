'use client'

import { FC, useState } from 'react'
import styles from './WorkForm.module.scss'
import { CustomInput } from '../CustomInput/CustomInput'
import { CustomTextarea } from '../CustomTextarea/CustomTextarea'
import { useTranslations } from 'next-intl'

const initialValue = {
  name: '',
  email: '',
  tgNick: '',
  jobPosition: '',
  about: '',
}

const WorkForm: FC = () => {
  const [state, setState] = useState(initialValue)
  const t = useTranslations('WorkForm')

  const onDataByKeyChange = (value: string | number | boolean | null, key: string): void => {
    setState({ ...state, [key]: value })
  }

  return (
    <div className={styles.work}>
      <div className={styles.form}>
        <div className={styles.form__header}>
          <h2 className={styles.form__header__title}>
            {t('header.title.1')} <span className={styles.form__header__title_orange}>{t('header.title.2')}</span> {t('header.title.3')}
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
        <CustomInput
          value={state.tgNick}
          placeholder={t('placeholder.nick')}
          keyValue='tgNick'
          onDataByKeyChange={onDataByKeyChange}
        />
        <CustomInput
          value={state.jobPosition}
          placeholder={t('placeholder.jobPosition')}
          keyValue='jobPosition'
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
          <p className={styles.form__footer__text}>
          {t('footer')}
          </p>
          <button className={styles.form__footer__button}>{t('button')}</button>
        </div>
      </div>
    </div>
  )
}

export { WorkForm }
