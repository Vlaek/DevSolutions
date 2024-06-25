import { FC } from 'react'
import styles from './CustomInput.module.scss'
import classNames from 'classnames'
import { Path, UseFormRegister, FieldValues } from 'react-hook-form'
import { ContactsFormType, ProjectFormType, WorkFormType } from '@/shared/types/forms'

interface ICustomInputProps {
  placeholder: string
  value: string | number | null
  keyValue: Path<ContactsFormType> | Path<WorkFormType> | Path<ProjectFormType>
  type?: string
  required: boolean
  pattern?: RegExp
  register: UseFormRegister<FieldValues>
  onDataByKeyChange(value: string | number | boolean | null, key: string): void
}

const CustomInput: FC<ICustomInputProps> = (props) => {
  const {
    value,
    placeholder,
    keyValue,
    type = 'text',
    required,
    pattern,
    onDataByKeyChange,
    register,
  } = props

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
        type={type}
        id={keyValue}
        {...register(keyValue, { required, onChange, pattern: pattern ?? /[\s\S]*/ })}
      />
    </div>
  )
}

export { CustomInput }
