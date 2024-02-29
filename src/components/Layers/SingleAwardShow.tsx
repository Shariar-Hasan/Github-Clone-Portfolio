import { getSingleAward } from '@/actions/GET'
import Image from 'next/image'
import React from 'react'
import parse from 'html-react-parser'
import moment from 'moment'
import BackButton from '../SmallUI/BackButton'
const SingleAwardShow = async ({ slug }: { slug: string }) => {
  const { data, success } = await getSingleAward(slug)
  const {
    _id,
    title,
    category,
    description,
    thumbnail,
    links,
    tags,
    createdAt,
    updatedAt,
  } = data
  return (
    <>
      {success && data ? (
        <div className="col-span-1 md:col-span-4">
          <div className="flex justify-between items-center sticky top-0 bg-back z-10">
            <BackButton />
            <div className="flex flex-wrap gap-1">
              {links?.map(
                ({ title, url }: { title: string; url: string }, i: number) => (
                  <a
                    key={i}
                    href={url}
                    target="_blank"
                    rel="noopenner noreferrer"
                    className="flex items-center gap-1 text-sm md:text-lg rounded-md px-3 py-1 font-medium hover:bg-brand hover:text-white delayed border-brand border"
                  >
                    {title}
                  </a>
                )
              )}
            </div>
          </div>
          <div className="mb-10 rounded overflow-hidden flex flex-col mx-auto">
            <div className="relative">
              <Image
                width={1000}
                height={1000}
                className="w-full"
                src={thumbnail}
                alt={title + '| Shariar Hasan'}
              />
            </div>
            <h4 className="text-xl sm:text-4xl font-semibold inline-block mb-2">
              {title}
            </h4>
            <p className=" py-5 text-sm md:text-base leading-8">
              {parse(description)}
            </p>
            <div className="py-5 text-sm font-regular flex justify-between items-center">
              <div className="ml-1">Updated {moment(updatedAt).fromNow()}</div>
              <div>
                {links?.map(
                  (
                    { title, url }: { title: string; url: string },
                    index: number
                  ) => (
                    <React.Fragment key={title}>
                      <a
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-brand"
                      >
                        {title}
                      </a>
                      {index !== links.length - 1 && (
                        <span className="mx-1 text-site-dimmed">|</span>
                      )}
                    </React.Fragment>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="border-red-600 border border-dashed text-red-600 p-10">
          {data?.message}
        </div>
      )}
    </>
  )
}

export default SingleAwardShow
