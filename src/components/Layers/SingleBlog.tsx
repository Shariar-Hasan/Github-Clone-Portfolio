import { MediumBlog } from "@/types/propsTypes";
import React, { useEffect } from "react";
import { getSingleBlog } from "@/actions/GET";
import NoItemAvailable from "@/components/SmallUI/NoItemAvailable";

import parse from "html-react-parser";
import BackButton from "@/components/SmallUI/BackButton";
import { PiMediumLogoFill } from "react-icons/pi";
import toast from "react-hot-toast";
import { BASE_URL } from "@/utils/siteConstants";
import { Metadata } from "next";

const SingleBlog = async ({ slug }: { slug: string }) => {
  if (!BASE_URL) {
    return <div>BASE URL not found</div>;
  }
  const { data, success } = await getSingleBlog(slug);
  if (!success) {
    return <NoItemAvailable text="No Such Blog Found" />;
  }
  // return <></>;
  let { title, description, author, categories, content, link, pubDate, guid } =
    data;
  return (
    <div className="w-full px-2 py-4">
      <div className="flex justify-between items-center sticky top-0 bg-back z-10">
        <BackButton />
        <a
          href={link}
          target="_blank"
          rel="noopenner noreferrer"
          className="flex items-center gap-1 text-sm md:text-lg rounded-md px-3 py-1 font-medium hover:bg-brand hover:text-white delayed"
        >
          Read this on medium <PiMediumLogoFill />
        </a>
      </div>
      {/* full single blog page */}
      <div className="w-full">
        <h1 className="text-2xl md:text-4xl font-bold mb-4">{title}</h1>
        <p className="text-sm text-dimmed">Published: {pubDate}</p>
        <div className="prose dark:prose-invert max-w-full">
          {parse(description)}
        </div>
        <div className="flex justify-between items-center mt-4">
          <p className="flex flex-wrap gap-2 items-center">
            {categories?.map((category: string) => (
              <span
                key={category}
                className="px-4 py-2 text-sm bg-brand bg-opacity-[0.4] rounded-full text-site group-hover:bg-opacity-[0.7] "
              >
                {category}
              </span>
            ))}
          </p>
          <p className="text-xs text-dimmed">Published: {pubDate}</p>
        </div>
      </div>
    </div>
  );
};

export default SingleBlog;
