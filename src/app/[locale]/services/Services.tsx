import { FC } from 'react'
import { ContactsForm, ServiceCard, Title } from '@/shared/components'
import { serviceList } from '@/shared/data'
import styles from './Services.module.scss'
import { useTranslations } from 'next-intl'

const Services: FC = () => {
  const t = useTranslations('ServicesPage')

  return (
    <>
      <Title title={t('title')} subtitle={t('subtitle')} />
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
