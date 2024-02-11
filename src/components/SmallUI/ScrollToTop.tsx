"use client";
import { useScrollYDetection } from "@/hooks/useScrollYDetection";
import React from "react";
import { FaArrowUp } from "react-icons/fa";

const ScrollToTop = () => {
  const isVisible = useScrollYDetection(100);
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  return (
    <span
      className={`z-[100] ${
        !isVisible ? "opacity-0 invisible" : "opacity-40"
      } hover:opacity-100 fixed bottom-[20px] right-[20px] text-site md:text-[45px] text-[40px] cursor-pointer duration-150`}
      onClick={scrollToTop}
    >
      <FaArrowUp />
    </span>
  );
};

export default ScrollToTop;
