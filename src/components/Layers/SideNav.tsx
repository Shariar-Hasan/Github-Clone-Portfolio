import { SideNavRoutesType } from "@/types/constantsTypes";
import { sideBarRoutes } from "@/utils/routes";
import Image from "next/image";
import Link from "next/link";
import React, { Dispatch, SetStateAction } from "react";
import { FaHome, FaTimes } from "react-icons/fa";
type propType = {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  avatar_url: string;
  login: string;
  name: string;
};
const SideNav = ({ isOpen, setIsOpen, avatar_url, login, name }: propType) => {
  return (
    <div>
      {/* Back drop style */}
      <div
        onClick={() => setIsOpen(false)}
        className={`fixed top-0 left-0 w-[100vw] h-[100vh] bg-black dark:bg-white opacity-0 z-[99] cursor-pointer duration-200 ${
          isOpen ? "opacity-50 visible" : "opacity-0 invisible"
        }`}
      />
      <div
        className={`delayed fixed rounded-l-xl h-[100vh] z-[100] bg-back top-0 right-0 max-w-[250px] md:max-w-[300px] w-full ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Top section */}
        <div className="w-full px-3 py-5 flex items-center justify-between border-b border-b-gray-300 dark:border-b-gray-800">
          <div className="flex items-center gap-x-3">
            <Image
              width={200}
              height={200}
              className="w-[40px] aspect-square rounded-full"
              src={avatar_url}
              alt={login}
            />
            <div>
              <h5 className="text-sm font-semibold">{name}</h5>
              <h5 className="text-sm text-dimmed">{login}</h5>
            </div>
          </div>
          <div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-dimmed p-2 bg-block cornered hover:text-site"
            >
              <FaTimes />
            </button>
          </div>
        </div>
        <div className="h-full overflow-auto">
          {sideBarRoutes?.map((item: SideNavRoutesType[], index) => (
            <ul key={index} className="px-3 py-2">
              {item.map(
                (
                  { title, icon, path, isExternal }: SideNavRoutesType,
                  index2
                ) => (
                  <li key={title + index2}>
                    <Link
                      target={isExternal ? "_blank" : ""}
                      href={path}
                      className="flex hover:bg-block items-center gap-x-2 px-3 py-2 cornered text-sm text-site-dimmed font-sans font-medium"
                    >
                      <span>{icon}</span>
                      {title}
                    </Link>
                  </li>
                )
              )}
            </ul>
          ))}
          <div className="border-gray-300 dark:border-gray-800 w-[6px] h-[4px] block" />
        </div>
      </div>
    </div>
  );
};

export default SideNav;
