'use client'

import { FC } from 'react'
import { ContactsForm, Title } from '@/shared/components'
import styles from './Contacts.module.scss'
import Image from 'next/image'

const Contacts: FC = () => {
  return (
    <div className={styles.contacts}>
      <Title title='Работа у нас' subtitle='Присоединяйтесь к нам' />
      <section className={styles.contacts__desc}>
        <div className={styles.contacts__desc__text}>
          <p>
            <span>DevSolutions</span> - аккредитованная IT-компания. Мы занимаемся заказной
            разработкой программного обеспечения.
          </p>
          <p>
            Наш профиль – это <span>разработка</span> веб и мобильных приложений, а также
            программного обеспечения для терминалов. Мы предоставляем полный цикл разработки ПО – от
            сбора требований заказчика до пострелизного сопровождения продукта, для этого у нас есть
            специалисты всех уровней.
          </p>
          <p>
            Главная цель команды - <span>вникнуть</span> в суть каждой задачи, которая поступает от
            нашего клиента, чтобы предложить ему лучшее решение для его <span>бизнеса</span>.
          </p>
        </div>
        <Image
          src='/img/job.webp'
          alt='img'
          className={styles.contacts__desc__img}
          width={200}
          height={200}
          draggable={false}
          aria-hidden={true}
        />
      </section>
      <ContactsForm />
    </div>
  )
}

export default Contacts
