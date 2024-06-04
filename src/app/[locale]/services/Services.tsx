import { FC } from 'react'
import { ContactsForm, ServiceCard, Title } from '@/shared/components'
import { serviceList } from '@/shared/data'
import styles from './Services.module.scss'

const Services: FC = () => {
  return (
    <>
      <Title title='Наши услуги' subtitle='То, что мы можем, умеем, практикуем' />
      <div className={styles.cards}>
        {serviceList.map((item, index) => (
          <ServiceCard
            item={item.card}
            isOrange={item.isOrange ?? false}
            id={index}
            key={item.card.title}
          />
        ))}
      </div>
      <ContactsForm />
    </>
  )
}

export default Services
