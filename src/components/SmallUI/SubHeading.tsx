import React from "react";
type PropsType = {
  children: React.ReactNode;
};
const SubHeading = ({ children }: PropsType) => {
  return (
    <h1 className="my-4">
      <span className="text-lg md:text-2xl relative font-medium after:absolute after:left-[100%] after:top-1/2 md:after:w-[150px] after:w-full after:max-w-[100px] after:h-[3px] after:bg-brand italic font-sans pr-3 hover:text-brand">{children}</span>
    </h1>
  );
};

export default SubHeading;
