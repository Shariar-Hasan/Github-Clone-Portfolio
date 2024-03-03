import React from 'react'
import SubHeading from '../SmallUI/SubHeading'
import ProjectCard from '../SmallUI/cards/ProjectCard'
import { getOtherProjects } from '@/actions/GET'
import { ProjectType } from '@/types/propsTypes'
import NoItemAvailable from '../SmallUI/NoItemAvailable'
import { BASE_URL } from '@/utils/SiteRelatedInfo/siteConstants'

const OtherProject = async ({ slug }: { slug: string }) => {
  if (!BASE_URL) {
    return <div>BASE URL not found</div>
  }
  const { data, success } = await getOtherProjects(slug)
  console.log({
    data: data.map(({ title }: { title: string }) => title),
    success,
  })
  return (
    <div className="max-w-7xl mx-auto w-full">
      <SubHeading>Other Projects</SubHeading>
      {data?.length > 0 && success ? (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 px-2 my-2">
          {data?.map((project: ProjectType, i: number) => {
            return (
              <ProjectCard
                key={project._id}
                index={i}
                project={project}
                fullCard={false}
              />
            )
          })}
        </div>
      ) : (
        <NoItemAvailable text="No Other Projects available right now" />
      )}
    </div>
  )
}

export default OtherProject
