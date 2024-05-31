'use client'

import { FC, useState } from 'react'
import styles from './ContactsForm.module.scss'
import { CustomInput, CustomTextarea } from '@/shared/components/index'

const initialValue = {
  name: '',
  age: null,
  email: '',
  about: '',
}

const ContactsForm: FC = () => {
  const [state, setState] = useState(initialValue)

  const onDataByKeyChange = (value: string | number | boolean | null, key: string): void => {
    setState({ ...state, [key]: value })
  }

  return (
    <div className={styles.contacts}>
      <div className={styles.form}>
        <div className={styles.form__header}>
          <h2 className={styles.form__header__title}>
            У вас есть <span className={styles.form__header__title_orange}>проект</span> {'или '}
            <span className={styles.form__header__title_orange}>идея</span> для реализации?
          </h2>
          <p className={styles.form__header__text}>
            Расскажите нам, заполните форму ниже и мы обсудим все детали
          </p>
        </div>
        <CustomInput
          value={state.name}
          placeholder='Представьтесь, пожалуйста'
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
          placeholder='Кратко опишите свой проект'
          keyValue='about'
          type='text'
          onDataByKeyChange={onDataByKeyChange}
        />
        <div className={styles.form__footer}>
          <p className={styles.form__footer__text}>
            Нажимая кнопку «Отправить», я соглашаюсь с политикой конфиденциальности и обработки
            персональных данных
          </p>
          <button className={styles.form__footer__button}>Отправить</button>
        </div>
      </div>
    </div>
  )
}

export { ContactsForm }
