import { getSingleAward } from '@/actions/GET'
import OtherAwardsSection from '@/components/Layers/OtherAwardsSection'
import SingleAwardShow from '@/components/Layers/SingleAwardShow'
import { BASE_URL } from '@/utils/siteConstants'
import { basicInfo } from '@/utils/userInfoContants'
import { Metadata, ResolvingMetadata } from 'next'
import React from 'react'
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
      title: 'Award Not Found',
      description: 'Award Not Found',
    }
  }
  const { data, success } = await getSingleAward(slug)
  const previousImages = (await parent).openGraph?.images || []
  if (!success) {
    return {
      title: 'Award Not Found',
    }
  }
  return {
    title: data?.title,
    description: data?.description,
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
const SingleAwardPage = ({
  params: { slug },
}: {
  params: { slug: string }
}) => {
  return (
    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-3">
      <SingleAwardShow slug={slug} />
      <OtherAwardsSection slug={slug} />
    </div>
  )
}

export default SingleAwardPage
