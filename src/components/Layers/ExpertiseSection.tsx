import React from "react";
import SubHeading from "../SmallUI/SubHeading";
import { ToolType } from "@/utils/expertise";
import ExpertiseCard from "../SmallUI/cards/ExpertiseCard";
type PropsType = {
  heading: string;
  list: ToolType[];
};
const ExpertiseSection = ({ heading, list }: PropsType) => {
  return (
    <div>
      <SubHeading>{heading}</SubHeading>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 ">
        {list.map((item, index) => (
          <ExpertiseCard key={index} item={item} />
        ))}
      </div>
    </div>
  );
};

export default ExpertiseSection;
