import React from "react";

const DoubleDivider = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="grid place-items-center">
      <div
        className="mx-auto inline-block relative px-3 text-center
  after:absolute after:top-1/2 after:left-full after:translate-y-[-50%] after:w-full after:h-[3px] after:bg-brand 
  before:absolute before:top-1/2 before:right-full before:translate-y-[-50%] before:w-full before:h-[3px] before:bg-brand 
  "
      >
        {children}
      </div>
    </div>
  );
};

export default DoubleDivider;
