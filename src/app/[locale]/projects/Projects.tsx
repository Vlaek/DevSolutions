import { Title } from '@/shared/components'
import { useTranslations } from 'next-intl'
import { FC } from 'react'

const Projects: FC = () => {
  const t = useTranslations('ProjectsPage')
  return (
    <div>
      <Title title={t('title')} subtitle={t('subtitle')} />
    </div>
  )
}

export default Projects
