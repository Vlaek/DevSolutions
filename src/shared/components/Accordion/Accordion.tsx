'use client'

import { FC, useState } from 'react'
import AccordionItem from './AccordionItem/AccordionItem'
import styles from './Accordion.module.scss'

interface IAccordion {
  list: {
    q: string
    a: string
  }[]
}

const Accordion: FC<IAccordion> = (props) => {
  const { list } = props
  const [openId, setOpenId] = useState<number | null>(null)

  const handleOnClick = (id: number | null) => {
    id === openId ? setOpenId(null) : setOpenId(id)
  }

  return (
    <ul className={styles.accordion}>
      {list.map((item, id) => {
        return (
          <AccordionItem
            onClick={() => handleOnClick(id)}
            item={item}
            isOpen={id === openId}
            key={id}
          />
        )
      })}
    </ul>
  )
}

export { Accordion }
