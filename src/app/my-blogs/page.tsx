import BlogSection from "@/components/Layers/BlogSection";
const BlogPage = async () => {
  // const res = await fetch(
  //   `https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@${mediumUserName}`
  // );
  // console.log({ res });
  // const data = await res.json();
  // console.log({ data });
  return (
    <div>
      blgo page
      <BlogSection />
    </div>
  );
};

export default BlogPage;
