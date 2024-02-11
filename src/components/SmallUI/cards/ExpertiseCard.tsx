import { ToolType } from "@/utils/expertise";
import React from "react";

const ExpertiseCard = ({ item }: { item: ToolType }) => {
  const { title, icon } = item;
  return (
    <div className="cursor-pointer flex flex-col items-center justify-between bord er-dimmed cornered gap-x-3 px-4 py-2 group/exp dark:hover:bg-gray-800 hover:bg-gray-50 place-content-center">
      <span className="rounded-md p-3 overflow-hidden text-2xl bor der aspect-square rotat e-[45deg] origin-center">
        <span className="rota te-[45deg]">{icon}</span>
      </span>
      <h2 className="text-xs md:text-sm tracking-wide text-center group-hover/exp:text-brand">{title}</h2>
    </div>
  );
};

export default ExpertiseCard;
