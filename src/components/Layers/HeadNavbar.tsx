"use client";
import { githubUserName } from "@/utils/contants";
import { githubUrl } from "@/utils/shortFunctions";
import React, { useState } from "react";
import { FaBars, FaGithub } from "react-icons/fa";
import AvaterButton from "../SmallUI/AvaterButton";
import { GitHubUser } from "@/types/propsTypes";
import ThemeToggler from "../SmallUI/ThemeToggler";
import SearchSection from "../SmallUI/SearchSection";

const HeadNavbar = ({ userData }: { userData: GitHubUser }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);
  return (
    <div className="w-full px-4 py-3 bg-front">
      <div className="flex justify-between items-center">
        {/* Right Section */}
        <div className="flex items-center gap-3">
          <button
            className="border p-2 cornered clicked"
            onClick={() => setIsSidebarOpen(true)}
          >
            <FaBars />
          </button>
          <a
            href={githubUrl(githubUserName)}
            target="_blank"
            rel="noreferrer"
            className="flex gap-x-3 items-center "
          >
            <FaGithub className="text-3xl" />
            <h5 className="text-sm font-semibold hover-route-bg">
              Shariar Hasan
            </h5>
          </a>
        </div>
        {/* Left Section */}
        <div className="flex gap-x-2 items-center justify-center">
          {/* search */}
          <SearchSection />
          {/* Dark Mode Switcher */}
          <ThemeToggler />
          {/* Avater Image Button */}
          <AvaterButton
            userData={userData}
            isSidebarOpen={isSidebarOpen}
            setIsSidebarOpen={setIsSidebarOpen}
          />
        </div>
      </div>
    </div>
  );
};

export default HeadNavbar;
