import React from "react";
import { FaSearch } from "react-icons/fa";

const SearchSection = () => {
  return (
    <div className="relative md:block hidden h-fit">
      <input
        type="text"
        className="border border-dimmed bg-transparent cornered py-1 pr-1 pl-8 placeholder:text-dimmed placeholder:text-sm focus:outline-none"
        placeholder="Type / to search"
      />
      <span>
        <FaSearch className="absolute top-1/2 translate-y-[-50%] left-2 text-sm text-dimmed h-full" />
      </span>
      <span className="pr-3 border-r  border-r-gray-300 dark:border-r-gray-700 h-4"></span>
    </div>
  );
};

export default SearchSection;
