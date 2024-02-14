import React from "react";
import NavLink from "../SmallUI/NavLink";
import { navbarRotues } from "@/utils/routes";

const Navbar = () => {
  return (
    <div className="px-3 bg-front md:relative sticky top-0">
      <div className="flex gap-x-3 ">
        {navbarRotues?.map(({ title, path, icon }, index) => (
          <NavLink
            key={title + index}
            href={path}
            activeClassName="after:bg-brand font-medium"
            nonActiveClassName=""
            className={
              "py-2 relative delayed after:absolute after:-bottom-1 after:left-0  after:h-[6px] overflow-hidden after:w-full after:rounded-t after:bg-opacity-50"
            }
          >
            <span className="flex items-center cornered  gap-2 text-sm  bg-transparent px-3 py-1 hover:bg-block ">
              <span>{icon}</span>
              <span className="hidden md:inline-block">{title}</span>
            </span>
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
