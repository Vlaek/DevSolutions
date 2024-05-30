import { FC } from 'react'
import styles from './ServiceCard.module.scss'
import classNames from 'classnames'
import { ICard } from '@/shared/types/models'
import StackList from '../StackList/StackList'

interface IServiceCardProps {
  isOrange?: boolean
  item: ICard
  id: number
}

const formatId = (id: number): string => {
  return id >= 0 && id < 10 ? `0${id}` : String(id)
}

const ServiceCard: FC<IServiceCardProps> = (props) => {
  const { item, isOrange = false, id } = props
  return (
    <div
      className={classNames(
        styles.card,
        {
          [styles.card_orange]: isOrange,
        },
        { [styles.card_has_url]: Boolean(item?.url) },
      )}
    >
      <div className={styles.card__content}>
        <div className={styles.card__header}>
          <div className={styles.card__id}>{formatId(id)}</div>
          <p className={styles.card__title}>{item.title}</p>
          <p className={styles.card__subtitle}>{item.subtitle}</p>
        </div>
        <div className={styles.card__footer}>
          <div className={styles.card__desc}>
            <div>{item.description}</div>
            <StackList stack={item.stack} />
          </div>

          <button
            className={classNames(styles.card__button, {
              [styles.card__button_orange]: isOrange,
            })}
          >
            Связаться с нами
          </button>
        </div>
      </div>
      <video
        className={styles.card__video}
        src={item.videoUrl}
        autoPlay
        loop
        muted
        playsInline
      ></video>
    </div>
  )
}

export default ServiceCard
