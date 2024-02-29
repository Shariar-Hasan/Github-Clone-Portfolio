
import { getUser } from "@/actions/GET";
import SideAboutMe from "@/components/Layers/SideAboutMe";
import { BASE_URL } from "@/utils/siteConstants";
import React from "react";

const layout = async ({ children }: { children: React.ReactNode }) => {
  if (!BASE_URL) {
    return <div>BASE URL not found</div>;
  }
  const { data: userData } = await getUser();
  return (
    <main className="max-w-7xl md:mx-auto w-full grid md:grid-cols-4 grid-cols-1 md:gap-6">
      <SideAboutMe userData={userData} />
      <div className="col-span-1 md:col-span-3 my-10 mx-2">{children}</div>
    </main>
  );
};

export default layout;
