import { FC } from 'react'
import styles from './StackList.module.scss'

interface IStackListProps {
  stack: string[] | undefined
}

const StackList: FC<IStackListProps> = (props) => {
  const { stack } = props

  return (
    stack && (
      <ul className={styles.stack}>
        {stack.map((item) => (
          <li className={styles.stack__item} key={item}>
            {item}
          </li>
        ))}
      </ul>
    )
  )
}

export {StackList}
