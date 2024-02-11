"use client";
import React, { useEffect } from "react";
import useFetch from "@/hooks/useFetch";
import toast from "react-hot-toast";

const BlogSection = () => {
  //   const [blogs, setBlogs] = useState([]);
  const { isLoading, data, error, fetchData } = useFetch();
  //   useEffect(() => {
  //     async function call() {
  //       await fetchData(
  //         `https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@${mediumUserName}`
  //       );
  //     }
  //     call();
  //   }, []);
  useEffect(() => {
    if (error) toast.error(error);
  }, [error]);
  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
        {/* {isLoading ? (
          <ClientLoading />
        ) : data ? (
          data?.items?.map((blog: MediumBlog, i: number) => (
            <RevealWrapper
              key={blog.guid}
              delay={i * 0}
              duration={500}
              distance="0px"
              reset={false}
            >
              <BlogCard blog={blog} />
            </RevealWrapper>
          ))
        ) : (
          <NoItemAvailable text="No Blogs Available" />
        )} */}
        No Blogs Available Right Now.
      </div>
    </div>
  );
};

export default BlogSection;
