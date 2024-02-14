"use client"
import Image from "next/image";
import React from "react";
import { ProjectType } from "@/types/propsTypes";
import Link from "next/link";
import { RevealWrapper } from "next-reveal";
const ProjectCard = ({ project, index }: { project: ProjectType, index : number }) => {
  const { title, shortDescription, thumbnail, slug } = project;
  return (
    <RevealWrapper
      key={slug}
      delay={index * 50}
      duration={1000}
      distance="0px"
      reset={false}
    >
      {" "}
      <div className="border border-dimmed cornered relative group overflow-hidden hover:border-brand ">
        <div className="">
          <Image
            width={500}
            height={500}
            className="w-full group-hover:scale-110 delayed"
            src={thumbnail}
            alt={title}
          />
        </div>
        <div className="absolute bg-black/70 w-full h-full px-1 py-2 top-0 left-0 flex flex-col items-center text-center group-hover:opacity-100 group-hover:visible opacity-0 invisible delayed overflow-y-auto scrollbar-none text-white">
          <h1 className="text-sm translate-x-full group-hover:translate-x-0 delayed delay-75">
            {title}
          </h1>
          <p className="text-xs translate-y-full group-hover:translate-y-0 delayed delay-100 my-1">
            {shortDescription}
          </p>
          <Link
            className="text-sm border border-brand hover:bg-brand delayed -translate-x-full group-hover:translate-x-0 delay-150 px-2 py-1 cornered"
            href={`/my-projects/${slug}`}
          >
            View Details
          </Link>
        </div>
      </div>
    </RevealWrapper>
  );
};

export default ProjectCard;
