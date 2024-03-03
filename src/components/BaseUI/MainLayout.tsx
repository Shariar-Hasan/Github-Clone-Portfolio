import React from "react";
import HeadNavbar from "../Layers/HeadNavbar";
import Navbar from "../Layers/Navbar";
import SideAboutMe from "../Layers/SideAboutMe";
import { ChildrenType } from "@/types/propsTypes";
import { getUser } from "@/actions/GET";
import StoreProvider from "./StoreProvider";
import { BASE_URL } from "@/utils/SiteRelatedInfo/siteConstants";
import ScrollToTop from "../SmallUI/ScrollToTop";
import { Toaster } from "react-hot-toast";

const MainLayout = async ({ children }: ChildrenType) => {
  if (!BASE_URL) {
    return <div>BASE URL not found</div>;
  }
  const { data: userData } = await getUser();
  return (
    <StoreProvider>
      <ScrollToTop />
      <Toaster position="bottom-left" reverseOrder={false} />
      <nav>
        <HeadNavbar userData={userData} />
        <Navbar />
      </nav>
      <main className="max-w-7xl md:mx-auto w-full grid md:grid-cols-4 grid-cols-1 md:gap-6">
        <SideAboutMe userData={userData} />
        <div className="col-span-1 md:col-span-3 my-10 mx-2">{children}</div>
      </main>
    </StoreProvider>
  );
};

export default MainLayout;
