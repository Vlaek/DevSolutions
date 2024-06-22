'use client'

import { FC, useEffect } from 'react'
import styles from './ModalConfirm.module.scss'
import { useDispatch, useSelector } from 'react-redux'
import { changeIsModalActive } from '@/lib/features/Main/mainSlice'
import { RootState } from '@/lib/store'
import { CSSTransition } from 'react-transition-group'
import { IoClose } from 'react-icons/io5'
import { FaRegFaceSmileWink } from 'react-icons/fa6'

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
    <CSSTransition
      timeout={500}
      in={isModalActive}
      unmountOnExit
      classNames={{
        enter: styles.container_enter,
        enterActive: styles.container_enter_active,
        exit: styles.container_exit,
        exitActive: styles.container_exit_active,
      }}
    >
      <div className={styles.container} onClick={handleCloseClick}>
        <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
          <div className={styles.modal__header}>Мы получили ваше сообщение!</div>
          <div className={styles.modal__content}>
            Нам осталось обсудить все детали, и мы обязательно свяжемся с вами!
          </div>
          <div className={styles.modal__footer}>
            <FaRegFaceSmileWink className={styles.modal__footer__smile} />
          </div>
          <IoClose className={styles.modal__button_close} onClick={handleCloseClick} />
        </div>
      </div>
    </CSSTransition>
  )
}

export { ModalConfirm }
