'use client'

import { FC, useState } from 'react'
import styles from './Work.module.scss'
import { CustomInput, CustomTextarea } from '@/shared/components/index'

const initialValue = {
  name: '',
  age: null,
  email: '',
  about: '',
}

const Work: FC = () => {
  const [state, setState] = useState(initialValue)

  const onDataByKeyChange = (value: string | number | boolean | null, key: string): void => {
    setState({ ...state, [key]: value })
  }

  return (
    <div className={styles.work}>
      <div className={styles.form}>
        <div className={styles.form__header}>
          <h2 className={styles.form__header__title}>
            Заинтересовала <span className={styles.form__header__title_orange}>работа</span> у нас?
          </h2>
          <p className={styles.form__header__text}>
            Оставьте свои контактные данные, и наш HR-менеджер свяжется с вами для уточнения деталей
          </p>
        </div>
        <CustomInput
          value={state.name}
          placeholder='Name'
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
          value={state.age}
          placeholder='Age'
          keyValue='age'
          type='number'
          onDataByKeyChange={onDataByKeyChange}
        />
        <CustomTextarea
          value={state.about}
          placeholder='About Me'
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

export default Work
