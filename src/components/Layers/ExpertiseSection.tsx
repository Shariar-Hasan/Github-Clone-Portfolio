"use client";
import React from "react";
import SubHeading from "../SmallUI/SubHeading";
import { ToolType } from "@/utils/expertise";
import ExpertiseCard from "../SmallUI/cards/ExpertiseCard";
import { RevealWrapper } from "next-reveal";
type PropsType = {
  heading: string;
  list: ToolType[];
};
const ExpertiseSection = ({ heading, list }: PropsType) => {
  return (
    <div>
      <SubHeading>{heading}</SubHeading>
      <div className="grid grid-cols-3 md:grid-cols-6 lg:grid-cols-8 gap-3 ">
        {list.map((item, index) => (
          <RevealWrapper
            key={index}
            origin="center"
            delay={index * 200}
            duration={1000}
            distance="0px"
            reset={false}
          >
            <ExpertiseCard item={item} />
          </RevealWrapper>
        ))}
      </div>
    </div>
  );
};

export default ExpertiseSection;
