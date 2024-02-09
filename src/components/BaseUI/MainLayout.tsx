import React from "react";
import HeadNavbar from "../Layers/HeadNavbar";
import Navbar from "../Layers/Navbar";
import SideAboutMe from "../Layers/SideAboutMe";
import { ChildrenType } from "@/types/propsTypes";
import { getUser } from "@/actions/GET";
import StoreProvider from "./StoreProvider";

const MainLayout = async ({ children }: ChildrenType) => {
  const { data: userData } = await getUser();
  return (
    <StoreProvider>
      <nav>
        <HeadNavbar userData={userData} />
        <Navbar />
      </nav>
      <div className="">
        <main className="max-w-7xl md:mx-auto w-full grid md:grid-cols-4 grid-cols-1 md:gap-5 mx-4">
          <SideAboutMe userData={userData} />
          <div className="col-span-1 md:col-span-3">{children}</div>
        </main>
      </div>
    </StoreProvider>
  );
};

export default MainLayout;
