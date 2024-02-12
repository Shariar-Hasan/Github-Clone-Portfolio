import React from "react";

const SingleRouteLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="max-w-6xl mx-auto">
      <div className="col-span-1 md:col-span-3 my-10 mx-2">{children}</div>
    </main>
  );
};

export default SingleRouteLayout;
