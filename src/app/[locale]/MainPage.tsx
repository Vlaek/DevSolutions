import { useTranslations } from 'next-intl'
import { FC } from 'react'
import styles from './MainPage.module.scss'
import classNames from 'classnames'
import { projectList } from '@/shared/data'
import { Link } from '@/navigation'
import { BigButtonLink, ContactsForm, StackList } from '@/shared/components'
import Image from 'next/image'

const MainPage: FC = () => {
  const t = useTranslations('MainPage')
  return (
    <div className={styles.main_container}>
      <section className={styles.header}>
        <div className={styles.header__main}>
          <h1 className={styles.header__main__title}>{t('title')}</h1>
          <p className={styles.header__main__subtitle}>{t('subtitle')}</p>
          <ul className={styles.header__main__list}>
            <li className={styles.header__main__list__item}>{t('hashtag.1')}</li>
            <li className={styles.header__main__list__item}>{t('hashtag.2')}</li>
            <li className={styles.header__main__list__item}>{t('hashtag.3')}</li>
          </ul>
        </div>
        <video
          className={styles.header__video}
          src={'/videos/main.mp4'}
          autoPlay
          loop
          muted
          playsInline
        ></video>
      </section>
      <section className={classNames(styles.container, styles.projects)}>
        <div className={styles.projects__header}>
          <h2 className={styles.projects__header__title}>
            Мы делаем <span className={styles.projects__header__title_orange}>web-сервисы</span>
            {', '}
            <span className={styles.projects__header__title_orange}>системы</span>
            {' и '}
            <span className={styles.projects__header__title_orange}>мобильные приложения</span>
          </h2>
          <p className={styles.projects__header__description}>
            Гарантируем индивидуальный подход к каждому клиенту и набор оптимальных решений для
            вашего проекта
          </p>
        </div>
        <div className={styles.projects__list}>
          {projectList.map((item) => (
            <Link
              href={`/projects/${item.url}`}
              className={styles.projects__list__item}
              key={item.id}
            >
              <div className={styles.projects__list__item__content}>
                <StackList stack={item.stack} />
                <div className={styles.projects__list__item__content__title}>{item.title}</div>
                <div className={styles.projects__list__item__content__subtitle}>
                  {item.subtitle}
                </div>
              </div>
              <div className={styles.projects__list__item__img}>
                <Image src={item.img} width={500} height={500} alt='Project Image' />
              </div>
            </Link>
          ))}
        </div>
        <BigButtonLink title='Наши проекты' href='/projects' />
      </section>
      <section className={classNames(styles.container, styles.partners)}>
        <h2 className={styles.partners__title}>Наши партнеры</h2>
        <ul className={styles.partners__grid}>
          {partners.map((partner) => (
            <li key={partner} className={styles.partners__grid__item}>
              <Image
                src={`/img/partners/${partner}`}
                width={250}
                height={250}
                alt='Partner Image'
                draggable={false}
              />
            </li>
          ))}
        </ul>
      </section>
      <section className={classNames(styles.container, styles.feedback)}>
        <h2 className={styles.feedback__title}>Отзывы</h2>
        <ul className={styles.feedback__grid}>
          {feedbackList.map((feedback) => (
            <li key={feedback.company} className={styles.feedback__grid__item}>
              <div className={styles.feedback__grid__item_block}>
                <p className={styles.feedback__grid__item__title}>{feedback.company}</p>
                <p className={styles.feedback__grid__item__text}>{feedback.comment}</p>
              </div>
              <div className={styles.feedback__grid__item_block}>
                <p className={styles.feedback__grid__item__name}>{feedback.name}</p>
                <p className={styles.feedback__grid__item__position}>{feedback.position}</p>
              </div>
            </li>
          ))}
        </ul>
      </section>
      <ContactsForm />
    </div>
  )
}

const partners = ['user1.png', 'user2.png', 'user3.png', 'user4.png', 'user5.png', 'user6.png']

interface IFeedback {
  company: string
  comment: string
  name: string
  position: string
}

const feedbackList: IFeedback[] = [
  {
    company: 'BestCorp',
    comment: 'Great service, very professional!',
    name: 'John Doe',
    position: 'CEO',
  },
  {
    company: 'TopTech',
    comment: 'Excellent experience, highly recommended!',
    name: 'Jane Smith',
    position: 'Senior Developer',
  },
  {
    company: 'Global Solutions',
    comment: 'Outstanding work, exceeded our expectations!',
    name: 'Alex Johnson',
    position: 'Project Manager',
  },
  {
    company: 'InnovateX',
    comment: 'Exceptional quality and attention to detail!',
    name: 'Emily Brown',
    position: 'Marketing Director',
  },
  {
    company: 'FutureBuilders',
    comment: 'Impressive results, a pleasure to work with!',
    name: 'Michael Wilson',
    position: 'Operations Manager',
  },
  {
    company: 'EcoFriendly',
    comment: 'Professional and reliable service, thank you!',
    name: 'Sophia Lee',
    position: 'Environmental Specialist',
  },
]

export default MainPage
