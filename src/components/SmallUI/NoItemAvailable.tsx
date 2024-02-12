import React from "react";
import { MdOutlineContentPasteSearch } from "react-icons/md";

const NoItemAvailable = ({ text }: { text: string }) => {
  return (
    <div className="flex justify-center items-center my-2">
      <div className="flex flex-col items-center p-10">
        <MdOutlineContentPasteSearch className="text-4xl text-dimmed" />
        <h1 className="text-2xl font-bold text-dimmed">{text}</h1>
      </div>
    </div>
  );
};

export default NoItemAvailable;
