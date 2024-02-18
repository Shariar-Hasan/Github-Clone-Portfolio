"use client";
import Image from "next/image";
import React from "react";
import { AwardType, ProjectType } from "@/types/propsTypes";
import Link from "next/link";
import { RevealWrapper } from "next-reveal";
import moment from "moment";
const AwardCard = ({ award, index }: { award: AwardType; index: number }) => {
  const { title, thumbnail, slug, createdAt } = award;
  return (
    <RevealWrapper
      delay={index * 50}
      duration={400}
      reset={false}
      cleanup={true}
      origin="bottom"
      distance="20px"
      easing="cubic-bezier(0.5, 0, 0, 1)"
      className={"h-full"}
    >
      <Link href={`/my-awards/${slug}`}>
        <div className="border border-dimmed cornered relative group overflow-hidden hover:border-brand  hover:translate-y-[-20px] delayed">
          <div className="">
            <Image
              width={500}
              height={500}
              className="w-full group-hover:scale-110 delayed"
              src={thumbnail}
              alt={title}
            />
          </div>
          <div className="absolute bg-black/70 w-full h-full px-1 py-2 top-0 left-0 flex  items-center justify-center group-hover:opacity-100 group-hover:visible opacity-0 invisible delayed overflow-y-auto scrollbar-none text-white">
            <span className="md:text-xl text-lg translate-x-[100px] group-hover:translate-x-0 duration-[0.5s] my-1 hover:text-brand tracking-widest">
              View Awards
            </span>
          </div>
        </div>
        <h3 className="text-sm hover:text-brand tracking-wider pt-2">
          {title}
        </h3>
        <p className="text-[10px]">{moment(createdAt).fromNow()}</p>
      </Link>
    </RevealWrapper>
  );
};

export default AwardCard;
