'use client'

import { FC, useState } from 'react'
import styles from './ProjectForm.module.scss'
import { useLocale, useTranslations } from 'next-intl'
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form'
import { changeIsModalActive } from '@/lib/features/Main/mainSlice'
import { useDispatch } from 'react-redux'
import { CustomInput, Error } from '@/shared/components/index'
import * as regExp from '@/shared/constants'

const initialValue = {
  name: '',
  company: '',
  email: '',
}

const ProjectForm: FC = () => {
  const [state, setState] = useState(initialValue)
  const dispatch = useDispatch()
  const t = useTranslations('ProjectForm')
  const locale = useLocale()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>()

  const onDataByKeyChange = (value: string | number | boolean | null, key: string): void => {
    setState({ ...state, [key]: value })
  }

  const onSubmit: SubmitHandler<FieldValues> = () => {
    dispatch(changeIsModalActive(true))
  }

  return (
    <div className={styles.project}>
      <div className={styles.form}>
        <div className={styles.form__header}>
          <h2 className={styles.form__header__title}>{t('header.title')}</h2>
          <p className={styles.form__header__text}>{t('header.description')}</p>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Error isActive={Boolean(errors.name)} text={regExp.errorTextName[locale]} />
          <CustomInput
            value={state.name}
            placeholder={t('placeholder.name')}
            keyValue='name'
            register={register}
            required
            pattern={regExp.regExpName}
            onDataByKeyChange={onDataByKeyChange}
          />
          <Error isActive={Boolean(errors.company)} text={regExp.errorText[locale]} />
          <CustomInput
            value={state.company}
            placeholder={t('placeholder.company')}
            keyValue='company'
            register={register}
            required
            onDataByKeyChange={onDataByKeyChange}
          />
          <Error isActive={Boolean(errors.email)} text={regExp.errorTextEmail[locale]} />
          <CustomInput
            value={state.email}
            placeholder='E-mail'
            keyValue='email'
            register={register}
            required
            pattern={regExp.regExpEmail}
            onDataByKeyChange={onDataByKeyChange}
          />
        </form>
        <div className={styles.form__footer}>
          <button className={styles.form__footer__button} onClick={handleSubmit(onSubmit)}>
            {t('button')}
          </button>
        </div>
      </div>
    </div>
  )
}

export { ProjectForm }
