import { getRelatedBlogs } from "@/actions/GET";
import { BASE_URL } from "@/utils/siteConstants";
import React from "react";
import NoItemAvailable from "../SmallUI/NoItemAvailable";
import BlogCard from "../SmallUI/cards/BlogCard";
import { MediumBlog } from "@/types/propsTypes";
import SubHeading from "../SmallUI/SubHeading";

const RelatedBlogsSection = async ({ slug }: { slug: string }) => {
  if (!BASE_URL) {
    return <div>BASE URL not found</div>;
  }
  const { data, success } = await getRelatedBlogs(slug);
  if (!success) {
    return <NoItemAvailable text="No Blog available right now" />;
  }

  return (
    <div>
      <SubHeading>Other Blogs</SubHeading>
      {data?.map((blog: MediumBlog, i: number) => (
        <BlogCard key={i} blog={blog} index={i} />
      ))}
    </div>
  );
};

export default RelatedBlogsSection;
