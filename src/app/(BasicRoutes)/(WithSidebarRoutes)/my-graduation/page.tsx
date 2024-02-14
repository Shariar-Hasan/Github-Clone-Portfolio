import { metaDatas } from "@/utils/contants";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: metaDatas?.graduationPage.title || "My Gradution Information",
  description:
    metaDatas?.graduationPage.description ||
    "Welcome to my Education history Section",
};

const MyGraduation = () => {
  return <div>MyGraduation</div>;
};

export default MyGraduation;
