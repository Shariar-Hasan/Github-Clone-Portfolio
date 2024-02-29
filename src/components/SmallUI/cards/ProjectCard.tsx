'use client'
import Image from 'next/image'
import React from 'react'
import { ProjectType } from '@/types/propsTypes'
import Link from 'next/link'
import { RevealWrapper } from 'next-reveal'
import moment from 'moment'
import { GoRepo } from 'react-icons/go'

const ProjectCard = ({
  project,
  index,
  fullCard = true,
}: {
  project: ProjectType
  index: number
  fullCard?: boolean
}) => {
  const {
    title,
    thumbnail,
    slug,
    updatedAt,
    tags,
    category,
    links,
    shortDescription,
  } = project

  return (
    <RevealWrapper
      delay={index * 50}
      duration={500}
      reset={false}
      cleanup={true}
      origin="bottom"
      distance="50px"
      easing="cubic-bezier(0.5, 0, 0, 1)"
      className={'h-full px-4 md:px-1'}
    >
      <div
        className={`md:border-b border-dimmed border-opacity-[0.01] relative group overflow-hidden hover:border-brand even:hover:skew-y-1 hover:scale-[.994] delayed peer ${
          fullCard ? 'grid sm:grid-cols-2  md:grid-cols-5 gap-2 py-2' : ''
        }`}
      >
        <div className="h-full aspect-auto col-span-1">
          <Link href={`/my-projects/${slug}`}>
            <Image
              width={500}
              height={500}
              className="w-full max-h-40 group-hover:sc ale-110 delayed"
              src={thumbnail}
              alt={title}
            />
          </Link>
        </div>
        {!fullCard && (
          <Link href={`/my-projects/${slug}`}>
            <div className="absolute bg-gradient-to-b from-transparent to-black/100 w-full h-full px-1 py-2 top-0 left-0 flex  items-start justify-end flex-col group-hover:opacity-100 group-hover:visible opacity-0 invisible delayed overflow-y-auto scrollbar-none text-white">
              <h5 className="translate-y-28 group-hover:translate-y-0 delayed tracking-wide text-sm px-2 text-gray-300">
                <GoRepo /> {title}
              </h5>
              <p className="translate-y-28 group-hover:translate-y-0 delayed text-dimmed text-xs px-2 delay-100">
                Last updated : {moment(updatedAt).format('MMM Do, YY')}
              </p>
            </div>
          </Link>
        )}
        {fullCard && (
          <div className="col-span-1 lg:col-span-4 flex item s-center justify-between flex-col md:flex-row">
            <div className="flex-grow">
              <h3 className="text-base group-hover:text-brand tracking-wider delayed z-[-1] inline-block">
                <GoRepo  className='mr-1 inline-block'/>
                {title}
              </h3>
              <p className="text-dimmed text-sm">
                {shortDescription.split(' ').length <= 15
                  ? shortDescription
                  : `${shortDescription
                      .split(' ')
                      .slice(0, 15)
                      .join(' ')} . . . `}
              </p>
              <p className="text-xs py-1 flex flex-wrap gap-1">
                {tags?.length > 0 &&
                  tags?.map((tag) => (
                    <span className="px-2 rounded hover:bg-brand hover:text-white group-hover:border-brand group-hover:border-opacity-50 border-dimmed border">
                      {tag}{' '}
                    </span>
                  ))}
              </p>
              <p className="text-dimmed text-xs py-1 flex flex-wrap gap-4">
                <span className="flex items-center gap-1">
                  <span className="inline-block w-1 p-1.5 aspect-square bg-brand rounded-full m-0"></span>
                  {category}
                </span>
                <span>Updated {moment(updatedAt).fromNow()}</span>
              </p>
            </div>
            <div className="">
              <Link
                className="text-sm group-hover:text-brand px-2 py-1 border opacity-100 md:opacity-0 border-brand group-hover:opacity-100 visible md:invisible group-hover:visible rounded delayed w-auto flex flex-wrap text-center"
                href={`/my-projects/${slug}`}
              >
                View Full Project
              </Link>
            </div>
          </div>
        )}
      </div>
    </RevealWrapper>
  )
}

export default ProjectCard
