"use client";
import { MediumBlog } from "@/types/propsTypes";
import { toBlogSlug } from "@/utils/shortFunctions";
import { RevealWrapper } from "next-reveal";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const BlogCard = ({ blog, index }: { blog: MediumBlog; index: number }) => {
  let { title, categories, pubDate, guid } = blog;
  return (
    <RevealWrapper
      key={blog.guid}
      delay={index * 0}
      duration={500}
      distance="0px"
      reset={false}
    >
      <Link href={"my-blogs/" + toBlogSlug(guid)}>
        <div className="cornere d delayed h-full overflow-hidden group hover:transl ate-y-1 px-2 py-2 rounded-t hover:bg-block  hover:text-brand border-b border-dimmed hover:border-brand">
          <h1 className="text-base mb-1 tracking-wider">{title}</h1>
          <p className="flex flex-wrap gap-2 items-center">
            {categories?.map((category) => (
              <span
                key={category}
                className="px-3 my-1 text-xs bg-brand bg-opacity-[0.09] rounded-full text-site group-hover:bg-opacity-[0.2] "
              >
                {category}
              </span>
            ))}
          </p>
          <p className="text-[10px] text-dimmed mt-2">Published: {pubDate}</p>
        </div>
      </Link>
    </RevealWrapper>
  );
};

export default BlogCard;
