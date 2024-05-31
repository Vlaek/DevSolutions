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
