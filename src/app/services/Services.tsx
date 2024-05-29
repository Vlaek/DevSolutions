import { Title } from '@/shared/components'
import { FC } from 'react'
import styles from './Services.module.scss'
import ServiceCard from '@/shared/components/ServiceCard/ServiceCard'
import { serviceList } from '@/shared/components/ServiceCard/data'
import Contacts from '../contacts/Contacts'

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
      <Contacts />
    </>
  )
}

export default Services
