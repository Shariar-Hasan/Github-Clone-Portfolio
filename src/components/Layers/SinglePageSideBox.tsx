import React from 'react'
import LinkCopyUi from '../SmallUI/LinkCopyUi'

const SinglePageSideBox = ({
  tagHeader,
  tags,
  shortDescription = '',
}: {
  tagHeader: string
  tags: string[]
  shortDescription?: string
}) => {
  return (
    <div className="bg-block shadow-lg cornered px-3 py-2 sticky top-[250px]">
      <div>
        <LinkCopyUi />
      </div>
      <div>
        <h5 className="text-site-dimmed mb-2 font-medium top-2  tracking-wider">
          {tagHeader}:
        </h5>
        <div className="flex items-center mb-4 flex-wrap gap-3">
          {tags?.map((tag: string, i: number) => (
            <span
              key={tag + i}
              className="bg-block px-2  py-[1px]  rounded-md text-sm border border-gray-500 border-opacity-50"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
      {shortDescription && (
        <div>
          <h5 className="text-site-dimmed mb-2">About:</h5>
          <div className="flex items-center mb-4 flex-wrap gap-3">
            {shortDescription}
          </div>
        </div>
      )}
    </div>
  )
}

export default SinglePageSideBox
