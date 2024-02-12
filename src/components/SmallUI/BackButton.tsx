"use client";
import { useRouter } from "next/navigation";
import React from "react";
import { IoIosArrowRoundBack } from "react-icons/io";

const BackButton = () => {
  const router = useRouter();
  return (
    <button
      className="hover:bg-back delayed flex items-center my-2 text-site-dimmed hover:text-site"
      onClick={() => router.back()}
    >
      <IoIosArrowRoundBack  className=" text-3xl"/> <span className=" text-xl">Go Back</span>
    </button>
  );
};

export default BackButton;
