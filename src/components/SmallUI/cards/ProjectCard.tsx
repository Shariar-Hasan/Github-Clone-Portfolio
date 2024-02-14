"use client";
import Image from "next/image";
import React from "react";
import { ProjectType } from "@/types/propsTypes";
import Link from "next/link";
import { RevealWrapper } from "next-reveal";
const ProjectCard = ({
  project,
  index,
}: {
  project: ProjectType;
  index: number;
}) => {
  const { title, thumbnail, slug } = project;
  return (
    <RevealWrapper
      delay={index * 50}
      duration={500}
      reset={false}
      cleanup={true}
      origin="bottom"
      distance="50px"
      easing="cubic-bezier(0.5, 0, 0, 1)"
      className={"h-full"}
    >
      <Link href={`/my-projects/${slug}`}>
        <div className="border border-dimmed cornered relative group overflow-hidden hover:border-brand even:hover:skew-y-1 hover:-skew-y-1 delayed hover:animate-pulse peer">
          <div className="">
            <Image
              width={500}
              height={500}
              className="w-full group-hover:scale-110 delayed"
              src={thumbnail}
              alt={title}
            />
          </div>
          <div className="absolute bg-black/70 dark:bg-white/10 w-full h-full px-1 py-2 top-0 left-0 flex  items-center justify-center group-hover:opacity-100 group-hover:visible opacity-0 invisible delayed overflow-y-auto scrollbar-none text-white">
            <span className="md:text-xl text-lg translate-y-[100px] group-hover:translate-y-0 duration-[0.5s] my-1 hover:text-brand tracking-widest">
              View Project
            </span>
          </div>
        </div>
        <h3 className="peer-hover:translate-y-[-13px] peer-hover:opacity-0 text-center text-sm hover:text-brand tracking-wider pt-2 delayed z-[-1]">
          {title}
        </h3>
      </Link>
    </RevealWrapper>
  );
};

export default ProjectCard;
