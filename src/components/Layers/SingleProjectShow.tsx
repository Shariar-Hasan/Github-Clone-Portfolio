import { getSingleProject } from '@/actions/GET'
import Image from 'next/image'
import React from 'react'
import ViewFullImage from '../SmallUI/ViewFullImage'
import BackButton from '../SmallUI/BackButton'
import { PiMessengerLogoFill, PiPinterestLogoFill } from 'react-icons/pi'
import LinkCopyUi from '../SmallUI/LinkCopyUi'
import { BASE_URL } from '@/utils/siteConstants'
import moment from 'moment'
import SinglePageSideBox from './SinglePageSideBox'
import parse from 'html-react-parser'

const SingleProjectShow = async ({ slug }: { slug: string }) => {
  if (!BASE_URL) {
    return <div>BASE URL not found</div>
  }
  const { data, success } = await getSingleProject(slug)
  const {
    _id,
    title,
    category,
    shortDescription,
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
        <div className="">
          <div className="px-10 flex justify-between items-center sticky top-0 bg-back z-10">
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
          <div className="">
            <div className="rounded-lg mb-4 overflow-hidden h-[80vh]  relative after:absolute after:top-0 after:left-0 after:w-full after:h-full after:bg-gradient-to-b after:from-transparent after:via-transparent dark:after:to-[#0D1117] after:to-[#F6F8FA] z-[0]">
              <Image
                width={800}
                height={800}
                src={thumbnail}
                alt={title}
                className="rounded-lg object-cover min-w-full min-h-full "
              />
              {/* <ViewFullImage src={thumbnail} />  */}
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 translate-y-[-200px] z-[11] max-w-7xl mx-auto px-2">
              <div className="md:col-span-3">
                <h1 className="text-2xl md:text-6xl font-bold mb-2">{title}</h1>

                <div className="flex items-center mb-4 text-base md:text-lg">
                  <span className="mr-2">Category:</span>
                  <span className="">{category}</span>
                </div>
                <div className="my-8 text-description ">
                  {parse(description)}
                </div>

                <div className="flex justify-between items-center mt-4 text-xs md:text-base">
                  <div>
                    <span className="text-site-dimmed mr-2">Links:</span>
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
                  <div>Updated {moment(updatedAt).fromNow()}</div>
                </div>
              </div>
              <div className="h-full">
                <SinglePageSideBox
                  tagHeader="Skills"
                  tags={tags}
                  shortDescription={shortDescription}
                />
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

export default SingleProjectShow
