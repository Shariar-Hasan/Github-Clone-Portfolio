"use client";
import { toggleDark } from "@/redux/features/themeSlice";
import { useAppDispatch, useAppSelector } from "@/redux/reduxHooks";
import React from "react";
import { FaMoon, FaSun } from "react-icons/fa";

const ThemeToggler = () => {
  const { isDark } = useAppSelector((state) => state.themeSlice);
  const dispatch = useAppDispatch();
  return (
    <div>
      <button className="aspect-square border-dimmed p-1.5 text-lg border-dimmed cornered text-dimmed" onClick={() => dispatch(toggleDark())}>
        {isDark ? <FaSun /> : <FaMoon />}
      </button>
    </div>
  );
};

export default ThemeToggler;
