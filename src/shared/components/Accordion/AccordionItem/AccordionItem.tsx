'use client'

import { FC, useRef } from 'react'
import { IoIosArrowDown } from 'react-icons/io'
import classNames from 'classnames'
import styles from './AccordionItem.module.scss'

interface IAccordionItem {
  item: {
    q: string
    a: string
  }
  onClick(): void
  isOpen: boolean
}

const AccordionItem: FC<IAccordionItem> = (props) => {
  const { item, onClick, isOpen } = props
  const itemRef = useRef<HTMLInputElement>(null)

  return (
    <li className={styles.item}>
      <button className={styles.item__header} onClick={() => onClick()}>
        {item.q}
        <div
          className={classNames(styles.item__arrow, {
            [styles.item__arrow_active]: isOpen,
          })}
        >
          <IoIosArrowDown />
        </div>
      </button>
      <div
        className={styles.item__collapse}
        style={isOpen ? { height: itemRef.current?.scrollHeight } : { height: '0px' }}
      >
        <div className={styles.item__body} ref={itemRef}>
          {item.a}
        </div>
      </div>
    </li>
  )
}

export default AccordionItem
