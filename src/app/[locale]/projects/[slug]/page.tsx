import { FC } from 'react'
import { Metadata } from 'next'
import { helperString } from '@/shared/helpers'
import Project from './Project'
import { meta } from '@/shared/meta'
import { projectList } from '@/shared/data'
import { IProject } from '@/shared/types/models'
import NotFound from '../../not-found'

interface IProjectPageParams {
  params: {
    slug: string
  }
}

export const metadata: Metadata = {
  authors: meta.default.authors,
  icons: meta.default.icons,
}

const ProjectPage: FC<IProjectPageParams> = ({ params }) => {
  const project = (() => {
    return projectList.find((item: IProject) => item.url === params.slug) || null
  })()

  if (project === null) {
    return <NotFound />
  }

  const metaTitle = helperString.capitalizeFirstLetterOfEachWord(project.title || 'Project')
  metadata.title = meta.getTitle(metaTitle)
  metadata.description = project.subtitle || 'Project Page'

  return <Project item={project} />
}

export default ProjectPage
