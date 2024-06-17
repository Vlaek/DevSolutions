export interface IService {
  card: ICard
  isOrange?: boolean
}

export interface ICard {
  title: string
  subtitle: string
  description: string
  category: string
  videoUrl: string
  url?: string
  full_stack?: string[]
  stack?: string[]
}

export interface IAboutUsCard {
  title: string
  subtitle: string
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

export interface IFeedback {
  company: string
  comment: string
  name: string
  position: string
}

export interface ICategory {
  title: string
  count: number
}

export interface IProject {
  id: number
  title: string
  subtitle: string
  url: string
  technologies: string[]
  img: string
  stack: string[]
  screens?: string[]
  github?: string
}
