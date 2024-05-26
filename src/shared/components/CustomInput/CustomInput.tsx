import { FC } from 'react'
import styles from './CustomInput.module.scss'
import classNames from 'classnames'

interface ICustomInputProps {
  placeholder: string
  value: string | number | null
  keyValue: string
  type?: string
  // className?: string
  onDataByKeyChange(value: string | number | boolean | null, key: string): void
}

const CustomInput: FC<ICustomInputProps> = (props) => {
  const { value, placeholder, keyValue, type = 'text', onDataByKeyChange } = props

  const onChange = (event: any) => {
    const { value: currentValue } = event.target
    const regValue = type === 'number' ? currentValue.replace(/[^0-9.\s]/g, '') : currentValue
    onDataByKeyChange(regValue, keyValue)
  }

  return (
    <div className={styles.container}>
      <label
        className={classNames(styles.label, {
          [styles.label_active]: value !== null && value !== '',
        })}
        htmlFor={keyValue}
      >
        {placeholder}
      </label>
      <input
        className={styles.input}
        value={value ?? ''}
        name={keyValue}
        type={type}
        id={keyValue}
        onChange={onChange}
      />
    </div>
  )
}

export { CustomInput }
