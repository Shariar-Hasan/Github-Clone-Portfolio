import BlogSection from "@/components/Layers/BlogSection";
import SubHeading from "@/components/SmallUI/SubHeading";
import { metaDatas } from "@/utils/contants";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: metaDatas?.blogPage.title || "Blog Page",
  description:
    metaDatas?.blogPage.description ||
    "Welcome to My Blog Page. Here you will find all my blogs. I will try to share my knowledge and experience through my blogs. Stay tuned for more blogs.",
};

const BlogPage = async () => {

  return (
    <div>
      <SubHeading>My Blogs</SubHeading>
      <BlogSection />
    </div>
  );
};

export default BlogPage;
