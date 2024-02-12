import BlogCard from "../SmallUI/cards/BlogCard";
import { MediumBlog } from "@/types/propsTypes";
import { BASE_URL } from "@/utils/siteConstants";
import NoItemAvailable from "../SmallUI/NoItemAvailable";

const BlogSection = async () => {
  const response = await fetch(`${BASE_URL}/api/blogs`);
  const { data, success } = await response.json();
  const { items } = data;
  // console.log({ items, data, success });
  return (
    <div>
      {success ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 md:gap-5 ">
          {items?.map((blog: MediumBlog, i: number) => (
            <BlogCard blog={blog} index={i} key={blog?.guid} />
          ))}
        </div>
      ) : (
        <NoItemAvailable text="No Blogs Available" />
      )}
    </div>
  );
};

export default BlogSection;
