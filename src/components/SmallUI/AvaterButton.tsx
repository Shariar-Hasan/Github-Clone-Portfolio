"use client";
import { GitHubUser } from "@/types/propsTypes";
import Image from "next/image";
import { useState } from "react";
import SideNav from "../Layers/SideNav";

const AvaterButton = ({ userData }: { userData: GitHubUser }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(true);
  const { avatar_url, login, name } = userData;
  return (
    <div className="flex items-center">
      <button onClick={() => setIsSidebarOpen(true)}>
        <Image
          width={200}
          height={200}
          className="w-[30px] aspect-square rounded-full"
          src={avatar_url}
          alt={login}
        />
      </button>
      <SideNav
        avatar_url={avatar_url}
        login={login}
        name={name}
        isOpen={isSidebarOpen}
        setIsOpen={setIsSidebarOpen}
      />
    </div>
  );
};

export default AvaterButton;
