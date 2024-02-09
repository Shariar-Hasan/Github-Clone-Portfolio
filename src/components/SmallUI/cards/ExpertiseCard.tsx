import { ToolType } from "@/utils/expertise";
import React from "react";

const ExpertiseCard = ({ item }: { item: ToolType }) => {
  const { title, icon } = item;
  return (
    <div className="cursor-pointer flex items-center justify-center border-dimmed cornered gap-x-3 px-4 py-2 group/exp dark:hover:bg-gray-800 hover:bg-gray-50 place-content-center">
      <span className="rounded-full overflow-hidden text-2xl">{icon}</span>
      <h2 className="text-xs md:text-sm group-hover/exp:text-brand">
        {title}
      </h2>
    </div>
  );
};

export default ExpertiseCard;
