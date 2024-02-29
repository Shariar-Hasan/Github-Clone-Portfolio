import BlogCard from '../SmallUI/cards/BlogCard'
import { MediumBlog } from '@/types/propsTypes'
import { BASE_URL } from '@/utils/siteConstants'
import NoItemAvailable from '../SmallUI/NoItemAvailable'
import { mediumUrl } from '@/utils/shortFunctions'
import { mediumUserName } from '@/utils/userInfoContants'

const BlogSection = async () => {
  if (!BASE_URL) return <div>BASE URL not found</div>
  const response = await fetch(`${BASE_URL}/api/blogs`)
  const { data, success } = await response.json()
  const { items } = data
  // console.log({ items, data, success });
  return (
    <div>
      {success ? (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 md:gap-5 ">
            {items?.map((blog: MediumBlog, i: number) => (
              <BlogCard blog={blog} index={i} key={blog?.guid} />
            ))}
          </div>
          <p className="text-sm text-site-dimmed mt-10">
            <strong>Note :</strong> Due to medium RSS feed limitation, only last
            10 blogs can be fetched. If you want to read my blogs you can{' '}
            <a
              href={mediumUrl(mediumUserName)}
              target="_blank"
              rel="noopener noreferrer"
              className="text-link-underline"
            >
              visit my medium profile
            </a>
          </p>
        </>
      ) : (
        <NoItemAvailable text="No Blogs Available" />
      )}
    </div>
  )
}

export default BlogSection
