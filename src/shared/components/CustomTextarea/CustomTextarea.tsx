import { FC } from 'react'
import styles from './CustomTextarea.module.scss'
import classNames from 'classnames'

interface ICustomTextareaProps {
  placeholder: string
  value: string
  keyValue: string
  type?: string
  width?: string
  onDataByKeyChange(value: string | number | boolean | null, key: string): void
}

const CustomTextarea: FC<ICustomTextareaProps> = (props) => {
  const { value, placeholder, width = '100%', keyValue, onDataByKeyChange } = props

  const style = {
    width,
  }

  const onChange = (event: any) => {
    onDataByKeyChange(event.target.value, keyValue)
  }

  return (
    <div className={styles.container} style={style}>
      <label
        className={classNames(styles.label, {
          [styles.label_active]: value ?? false,
        })}
        htmlFor={styles.textarea}
      >
        {placeholder}
      </label>
      <textarea
        className={styles.textarea}
        value={value}
        name={keyValue}
        id={styles.textarea}
        onChange={onChange}
        rows={5}
      />
    </div>
  )
}

export { CustomTextarea }
