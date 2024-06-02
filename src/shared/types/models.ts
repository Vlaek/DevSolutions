export interface IService {
  card: ICard
  isOrange?: boolean
}

export interface ICard {
  title: string
  subtitle: string
  description: string
  videoUrl: string
  url?: string
  full_stack?: string[]
  stack?: string[]
}

export interface IAboutUsCard {
  title: string
  subtitle: string
  img: string
}

export interface IVacancy {
  id: number
  category: string
  title: string
  subtitle: string
  level: string
  desc: string
  tasks?: string[]
  expectations: string[]
  plus: string[]
}
