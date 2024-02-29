import { getSingleProject } from '@/actions/GET'
import OtherProject from '@/components/Layers/OtherProject'
import SingleProjectShow from '@/components/Layers/SingleProjectShow'
import { BASE_URL } from '@/utils/siteConstants'
import { basicInfo } from '@/utils/userInfoContants'
import { Metadata, ResolvingMetadata } from 'next'
export const generateMetadata = async (
  {
    params: { slug },
  }: {
    params: { slug: string }
  },
  parent: ResolvingMetadata
): Promise<Metadata> => {
  if (!BASE_URL) {
    return {
      title: 'Project Not Found',
      description: 'Project Not Found',
    }
  }
  const { data, success } = await getSingleProject(slug)
  const previousImages = (await parent).openGraph?.images || []
  if (!success) {
    return {
      title: 'Project Not Found',
    }
  }
  return {
    title: data?.title,
    description: data?.shortDescription,
    authors: [
      {
        name: basicInfo?.name,
        url: BASE_URL,
      },
    ],

    openGraph: {
      images: [data?.thumbnail, ...previousImages],
    },
  }
}
const SingleProjectPage = ({
  params: { slug },
}: {
  params: { slug: string }
}) => {
  return (
    <div className="text-site">
      <SingleProjectShow slug={slug} />
      <OtherProject slug={slug} />
    </div>
  )
}

export default SingleProjectPage
