import { FC } from 'react'
import styles from './CustomTextarea.module.scss'
import classNames from 'classnames'
import { Path, UseFormRegister, FieldValues } from 'react-hook-form'

type ContactsFormType = {
  name: string
  email: string
  about: string
}

type WorkFormType = {
  name: string
  email: string
  tgNick: string
  jobPosition: string
  about: string
}

interface ICustomTextareaProps {
  placeholder: string
  value: string
  keyValue: Path<ContactsFormType | WorkFormType>
  type?: string
  width?: string
  required: boolean
  register: UseFormRegister<FieldValues>
  onDataByKeyChange(value: string | number | boolean | null, key: string): void
}

const CustomTextarea: FC<ICustomTextareaProps> = (props) => {
  const {
    value,
    placeholder,
    width = '100%',
    keyValue,
    required,
    onDataByKeyChange,
    register,
  } = props

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
        id={styles.textarea}
        rows={5}
        {...register(keyValue, { required, onChange })}
      />
    </div>
  )
}

export { CustomTextarea }
