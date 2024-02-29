import { getProjects } from '@/actions/GET'
import FilterSection from '@/components/Layers/FilterSection'
import ShowProjectsSection from '@/components/Layers/ShowProjectsSection'
import NoItemAvailable from '@/components/SmallUI/NoItemAvailable'
import { SearchParamsType } from '@/types/propsTypes'
import { metaDatas } from '@/utils/userInfoContants'
import { BASE_URL } from '@/utils/siteConstants'
import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
  title: metaDatas?.projectPage.title || 'My Projects',
  description:
    metaDatas?.projectPage.description || 'Welcome to My Project Page',
}

const ProjectPage = async ({
  searchParams,
}: {
  searchParams: SearchParamsType
}) => {
  if (!BASE_URL) {
    return<div>BASE URL not found</div>
  }
  const { data, success } = await getProjects(searchParams)

  return (
    <div>
      <FilterSection
        categoryFetchString={`${BASE_URL}/api/projects/categories`}
      />
      {success ? (
        <ShowProjectsSection projects={data} />
      ) : (
        <NoItemAvailable text="No Project Found" />
      )}
    </div>
  )
}

export default ProjectPage
