import { getSingleBlog } from "@/actions/GET";
import NoItemAvailable from "@/components/SmallUI/NoItemAvailable";
import { BASE_URL } from "@/utils/siteConstants";
import parse from "html-react-parser";
import BackButton from "@/components/SmallUI/BackButton";
import { PiMediumLogoFill } from "react-icons/pi";

const SingleBlog = async ({
  params,
}: {
  params: {
    slug: string;
  };
}) => {
  const { slug } = params;
  if (!BASE_URL) {
    return null;
  }
  const { data, success } = await getSingleBlog(slug);
  if (!success) {
    return <NoItemAvailable text="No Such Blog Found" />;
  }
  return <></>;
  let { title, description, author, categories, content, link, pubDate, guid } =
    data;
  return (
    <div className="w-full">
      <div className="flex justify-between items-center">
        <BackButton />
        <a
          href={link}
          target="_blank"
          rel="noopenner noreferrer"
          className="flex items-center gap-1 text-lg border border-dimmed rounded-md px-3 py-1 hover:bg-brand delayed"
        >
          Read this on medium <PiMediumLogoFill />
        </a>
      </div>
      {/* full single blog page */}
      <div className="w-full">
        <h1 className="text-4xl font-bold mb-4">{data.title}</h1>
        <p className="text-sm text-dimmed">Published: {data.pubDate}</p>
        <div className="prose dark:prose-invert max-w-full">
          {parse(data.description)}
        </div>
        <div className="flex justify-between items-center mt-4">
          <p className="text-xs text-dimmed">Published: {data.pubDate}</p>
        </div>
      </div>
    </div>
  );
};

export default SingleBlog;
