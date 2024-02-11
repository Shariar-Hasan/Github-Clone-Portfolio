"use client";
import { useEffect, useState } from "react";

export const useScrollYDetection = (height = 0) => {
  const [isScrollLimitReached, setIsScrollLimitReached] = useState(false);
  useEffect(() => {
    const handleChange = () => {
      if (window.scrollY >= height) {
        setIsScrollLimitReached(true);
      } else {
        setIsScrollLimitReached(false);
      }
    };
    window.addEventListener("scroll", handleChange);
    return () => {
      window.removeEventListener("scroll", handleChange);
    };
  }, []);
  return isScrollLimitReached;
};
