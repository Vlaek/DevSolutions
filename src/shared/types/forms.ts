export type ContactsFormType = {
  name: string
  email: string
  about: string
}

export type WorkFormType = {
  name: string
  email: string
  tgNick: string
  jobPosition: string
  about: string
}

export type ProjectFormType = {
  name: string
  email: string
  company: string
}

export type CombinedFormType = WorkFormType | ContactsFormType
