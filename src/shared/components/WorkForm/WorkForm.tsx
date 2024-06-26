'use client'

import { FC, useState } from 'react'
import styles from './WorkForm.module.scss'
import { useLocale, useTranslations } from 'next-intl'
import { useDispatch } from 'react-redux'
import { changeIsModalActive } from '@/lib/features/Main/mainSlice'
import { SubmitHandler, useForm, FieldValues } from 'react-hook-form'
import { CustomInput, CustomTextarea, Error } from '@/shared/components/index'
import * as regExp from '@/shared/constants'

const initialValue = {
  name: '',
  email: '',
  tgNick: '',
  jobPosition: '',
  about: '',
}

const WorkForm: FC = () => {
  const [state, setState] = useState(initialValue)
  const dispatch = useDispatch()
  const t = useTranslations('WorkForm')
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
    <div className={styles.work}>
      <div className={styles.form}>
        <div className={styles.form__header}>
          <h2 className={styles.form__header__title}>
            {t('header.title.1')}{' '}
            <span className={styles.form__header__title_orange}>{t('header.title.2')}</span>{' '}
            {t('header.title.3')}
          </h2>
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
          <Error isActive={Boolean(errors.tgNick)} text={regExp.errorTextNick[locale]} />
          <CustomInput
            value={state.tgNick}
            placeholder={t('placeholder.nick')}
            keyValue='tgNick'
            register={register}
            required
            pattern={regExp.regExpNick}
            onDataByKeyChange={onDataByKeyChange}
          />
          <Error isActive={Boolean(errors.jobPosition)} text={regExp.errorText[locale]} />
          <CustomInput
            value={state.jobPosition}
            placeholder={t('placeholder.jobPosition')}
            keyValue='jobPosition'
            register={register}
            required
            onDataByKeyChange={onDataByKeyChange}
          />
          <Error isActive={Boolean(errors.about)} text={regExp.errorText[locale]} />
          <CustomTextarea
            value={state.about}
            placeholder={t('placeholder.about')}
            keyValue='about'
            type='text'
            register={register}
            required
            onDataByKeyChange={onDataByKeyChange}
          />
        </form>
        <div className={styles.form__footer}>
          <p className={styles.form__footer__text}>{t('footer')}</p>
          <button className={styles.form__footer__button} onClick={handleSubmit(onSubmit)}>
            {t('button')}
          </button>
        </div>
      </div>
    </div>
  )
}

export { WorkForm }
