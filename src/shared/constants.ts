import { ILocale } from './types/models'

const regExpEmail =
  /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu

const regExpName = /^[a-zA-Zа-яА-Я]{4,}(?:\s[a-zA-Zа-яА-Я]+)*$/

const regExpNick = /^[a-zA-Z]{4,}(?:\s[a-zA-Z]+)*$/

const errorTextEmail: ILocale<string> = {
  ru: 'Пожалуйста, введите действительный адрес электронной почты',
  en: 'Please enter a valid email address',
}

const errorTextName: ILocale<string> = {
  ru: 'Пожалуйста, введите действительное имя',
  en: 'Please enter a valid name',
}

const errorTextNick: ILocale<string> = {
  ru: 'Пожалуйста, введите действительный telegram',
  en: 'Please enter a valid telegram',
}

const errorText: ILocale<string> = {
  ru: 'Это поле является обязательным',
  en: 'This field is required',
}

export {
  regExpEmail,
  regExpName,
  regExpNick,
  errorTextEmail,
  errorTextName,
  errorTextNick,
  errorText,
}
