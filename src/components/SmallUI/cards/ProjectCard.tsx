"use client";
import Image from "next/image";
import React from "react";
import { ProjectType } from "@/types/propsTypes";
import Link from "next/link";
import { RevealWrapper } from "next-reveal";
import moment from "moment";
const ProjectCard = ({
  project,
  index,
}: {
  project: ProjectType;
  index: number;
}) => {
  const { title, thumbnail, slug, updatedAt } = project;

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
        <div className="border border-dimmed cornered relative group overflow-hidden hover:border-brand even:hover:skew-y-1 hover:-skew-y-1 delayed hover:animat e-pulse peer">
          <div className="">
            <Image
              width={500}
              height={500}
              className="w-full group-hover:scale-110 delayed"
              src={thumbnail}
              alt={title}
            />
          </div>
          <div className="absolute bg-gradient-to-b from-transparent to-black/100 w-full h-full px-1 py-2 top-0 left-0 flex  items-start justify-end flex-col group-hover:opacity-100 group-hover:visible opacity-0 invisible delayed overflow-y-auto scrollbar-none text-white">
            <h5 className="translate-y-28 group-hover:translate-y-0 delayed tracking-wide text-sm px-2 text-gray-300">
              {title}
            </h5>
            <p className="translate-y-28 group-hover:translate-y-0 delayed text-dimmed text-xs px-2 delay-100">
              Last updated : {moment(updatedAt).format("MMM Do, YY")}
            </p>
          </div>
        </div>
        {/* <h3 className="peer-hover:translate-y-[-13px] peer-hover:opacity-0 text-center text-sm hover:text-brand tracking-wider pt-2 delayed z-[-1]">
          {title}
        </h3> */}
      </Link>
    </RevealWrapper>
  );
};

export default ProjectCard;
