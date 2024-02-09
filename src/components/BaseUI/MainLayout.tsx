import React from "react";
import HeadNavbar from "../Layers/HeadNavbar";
import Navbar from "../Layers/Navbar";
import SideAboutMe from "../Layers/SideAboutMe";
import { ChildrenType } from "@/types/propsTypes";
import { getUser } from "@/actions/GET";
import StoreProvider from "./StoreProvider";
import { BASE_URL } from "@/utils/siteConstants";

const MainLayout = async ({ children }: ChildrenType) => {
  if (!BASE_URL) {
    return null;
  }
  const { data: userData } = await getUser();
  return (
    <StoreProvider>
      <nav>
        <HeadNavbar userData={userData} />
        <Navbar />
      </nav>
      <div className="">
        <main className="max-w-7xl md:mx-auto w-full grid md:grid-cols-4 grid-cols-1 md:gap-6 mx-4">
          <SideAboutMe userData={userData} />
          <div className="col-span-1 md:col-span-3 my-10">{children}</div>
        </main>
      </div>
    </StoreProvider>
  );
};

export default MainLayout;
