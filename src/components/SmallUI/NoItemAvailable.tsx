import React from "react";
import { MdOutlineContentPasteSearch } from "react-icons/md";

const NoItemAvailable = ({ text }: { text: string }) => {
  return (
    <div className="flex justify-center items-center">
      <div className="flex flex-col items-center">
        <MdOutlineContentPasteSearch className="text-4xl" />
        <h1 className="text-2xl font-bold text-gray-900">{text}</h1>
      </div>
    </div>
  );
};

export default NoItemAvailable;
