import { MediumBlog } from "@/types/propsTypes";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const BlogCard = ({ blog }: { blog: MediumBlog }) => {
  let {
    title,
    description,
    author,
    categories,
    content,
    link,
    pubDate,
    enclosure,
    guid,
    thumbnail,
  } = blog;
  thumbnail = thumbnail?.includes("https://medium.com/_/stat?")
    ? "https://fakeimg.pl/1900x1100"
    : thumbnail;

  return (
    <div className="border h-full">
      <Image
        width={400}
        height={400}
        className="w-full"
        src={thumbnail}
        alt={title}
      />
      <h1>{title}</h1>
      <h3>{author}</h3>
      <p>{pubDate}</p>
    </div>
  );
};

export default BlogCard;
