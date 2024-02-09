import { githubUserName } from "@/utils/contants";
import { githubUrl } from "@/utils/shortFunctions";
import React from "react";
import { FaGithub } from "react-icons/fa";
import AvaterButton from "../SmallUI/AvaterButton";
import { GitHubUser } from "@/types/propsTypes";
import ThemeToggler from "../SmallUI/ThemeToggler";
import SearchSection from "../SmallUI/SearchSection";

const HeadNavbar = ({ userData }: { userData: GitHubUser }) => {
  return (
    <div className="w-full px-4 py-3 bg-front">
      <div className="flex justify-between items-center">
        {/* Right Section */}
        <div className="">
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
          <AvaterButton userData={userData} />
        </div>
      </div>
    </div>
  );
};

export default HeadNavbar;
