import SingleBlog from '@/components/Layers/SingleBlog'
import RelatedBlogsSection from '@/components/Layers/RelatedBlogsSection'
import { getSingleBlog } from '@/actions/GET'
import { Metadata } from 'next'
import { BASE_URL } from '@/utils/siteConstants'

export const generateMetadata = async ({
  params,
}: {
  params: { slug: string }
}): Promise<Metadata> => {
  const { slug } = params
  if (!BASE_URL) {
    return {
      title: 'Blog Not Found',
      description: 'Blog Not Found',
    }
  }
  const { data } = await getSingleBlog(slug)
  const { title, description, author, link } = data
  return {
    title: title,
    description:
      description.length > 150
        ? description.slice(0, 150) + '...'
        : description,

    authors: [
      {
        name: author,
        url: link,
      },
    ],
  }
}

const SingleBlogPage = async ({
  params,
}: {
  params: {
    slug: string
  }
}) => {
  const { slug } = params
  return (
    <div className="w-full max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
        <div className="col-span-1 md:col-span-3">
          <SingleBlog slug={slug} />
        </div>
        <div className="col-span-1">
          <RelatedBlogsSection slug={slug} />
        </div>
      </div>
    </div>
  )
}

export default SingleBlogPage
