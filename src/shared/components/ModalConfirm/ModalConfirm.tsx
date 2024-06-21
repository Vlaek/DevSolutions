'use client'

import { FC, useEffect } from 'react'
import styles from './ModalConfirm.module.scss'
import { useDispatch, useSelector } from 'react-redux'
import { changeIsModalActive } from '@/lib/features/Main/mainSlice'
import { RootState } from '@/lib/store'

const ModalConfirm: FC = () => {
  const dispatch = useDispatch()
  const isModalActive = useSelector((state: RootState) => state.main.isModalActive)

  const handleCloseClick = (e: any) => {
    e.preventDefault()
    dispatch(changeIsModalActive(false))
  }

  useEffect(() => {
    if (!isModalActive) document.body.style.overflow = 'visible'
    else document.body.style.overflow = 'hidden'
  }, [isModalActive])

  return (
    isModalActive && (
      <div className={styles.container} onClick={handleCloseClick}>
        <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
          <div className={styles.modal__header}>Мы получили ваше сообщение!</div>
          <div className={styles.modal__content}>
            Осталось его обмозговать и мы обязательно с вами свяжемся!
          </div>
          <div className={styles.modal__footer}>
            <button className={styles.modal__footer__button} onClick={handleCloseClick}>
              Назад
            </button>
          </div>
        </div>
      </div>
    )
  )
}

export { ModalConfirm }
