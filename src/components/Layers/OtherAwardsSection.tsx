import React from 'react'
import NoItemAvailable from '../SmallUI/NoItemAvailable'
import SubHeading from '../SmallUI/SubHeading'
import { getOtherAwards } from '@/actions/GET'
import { BASE_URL } from '@/utils/siteConstants'
import { AwardType } from '@/types/propsTypes'
import Link from 'next/link'

const OtherAwardsSection = async ({ slug }: { slug: string }) => {
  if (!BASE_URL) {
    return <div>BASE URL not found</div>
  }
  const { data, success } = await getOtherAwards(slug)
  // console.log({ data, success });
  return (
    <div className="max-w-7xl mx-auto w-full">
      <SubHeading>Other Awards</SubHeading>
      {data?.length > 0 && success ? (
        <div className="">
          {data?.map((award: AwardType, i: number) => {
            const { title, slug, description, _id } = award
            return (
              <div
                key={_id}
                className="py-3 border-b-[0.5px] border-dimmed last:border-b-0 group overflow-hidden hover:bg-block px-2 hover:border-brand delayed"
              >
                <Link href={`/my-awards/${slug}`}>
                  <h3 className="text-base tracking-widest  group-hover:text-brand delayed">
                    {title}
                  </h3>
                  <p className="text-dimmed text-xs">
                    {description.split(' ').slice(0, 5).join(' ')}...
                  </p>
                </Link>
              </div>
            )
          })}
          <div className=" flex items-center justify-center mt-3">
            <Link href={`/my-awards/`} className='px-2 py-0.5 border hover:border-brand cornered delayed border-gray-500 border-opacity-25'>View More</Link>
          </div>
        </div>
      ) : (
        <NoItemAvailable text="No Other Awards available right now" />
      )}
    </div>
  )
}

export default OtherAwardsSection
