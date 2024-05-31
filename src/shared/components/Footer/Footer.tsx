import { FC } from 'react'
import styles from './Footer.module.scss'
import Image from 'next/image'
import Link from 'next/link'
import { FaTelegram } from 'react-icons/fa'
import { FaVk } from 'react-icons/fa'
import { FaGithub } from 'react-icons/fa'
import { FaLinkedin } from 'react-icons/fa'

const Footer: FC = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.info}>
        <div className={styles.info__city}>Томск</div>
        <div className={styles.info__link}>
          Сотрудничество: <a href=''>vlad.eichwald@gmail.com</a>
        </div>
        <div className={styles.info__link}>
          Карьера: <a href=''>vlad.eichwald@gmail.com</a>
        </div>
        <div>
          <p>8 (800) 555-35-35</p>
          <p>ул. Пушкина, д. Колотушкина</p>
        </div>
      </div>
      <div className={styles.about}>
        <Link className='' href='/'>
          <Image src='/next.svg' alt='test' width={1} height={1} className={styles.about__icon} />
        </Link>
        <div className={styles.about__text}>Лучшие решения для сложных систем</div>
      </div>
      <div className={styles.links}>
        <div className={styles.links__icon}>
          <Link href='https://github.com/Vlaek' target='blank'>
            <FaGithub />
          </Link>
        </div>
        <div className={styles.links__icon}>
          <Link href='https://github.com/Vlaek' target='blank'>
            <FaTelegram />
          </Link>
        </div>
        <div className={styles.links__icon}>
          <Link href='https://github.com/Vlaek' target='blank'>
            <FaVk />
          </Link>
        </div>
        <div className={styles.links__icon}>
          <Link href='https://github.com/Vlaek' target='blank'>
            <FaLinkedin />
          </Link>
        </div>
      </div>
    </div>
  )
}

export { Footer }
