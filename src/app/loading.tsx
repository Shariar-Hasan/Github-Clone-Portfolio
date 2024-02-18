import React from "react";
import { RiFootballLine } from "react-icons/ri";

const RootLoading = () => {
  return (
    <div className="flex items-center justify-center w-full h-[100vh] ">
      <div>
        <h1 className="text-xl md:text-7xl font-bold flex">
          L<RiFootballLine className="animate-spin" /> ading . . .
        </h1>
      </div>
    </div>
  );
};

export default RootLoading;
