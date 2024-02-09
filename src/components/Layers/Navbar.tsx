import React from "react";
import NavLink from "../SmallUI/NavLink";
import { navbarRotues } from "@/utils/routes";

const Navbar = () => {
  return (
    <div className="px-3 bg-front">
      <div className="flex gap-x-3 ">
        {navbarRotues?.map(({ title, path, icon }, index) => (
          <NavLink
            key={title + index}
            href={path}
            activeClassName="after:bg-orange-400"
            nonActiveClassName=""
            className={
              "py-2 relative delayed after:absolute after:-bottom-1 after:left-0  after:h-[6px] overflow-hidden after:w-full after:rounded-t after:bg-opacity-50"
            }
          >
            <span className="flex items-center cornered  gap-2 text-sm font-medium bg-transparent px-3 py-1 hover:bg-block">
              <span>{icon}</span>
              <span>{title}</span>
            </span>
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
