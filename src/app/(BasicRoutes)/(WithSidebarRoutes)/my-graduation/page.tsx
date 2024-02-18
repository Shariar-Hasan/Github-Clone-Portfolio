import EducationTree from "@/components/Layers/EducationTree";
import { metaDatas } from "@/utils/userInfoContants";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: metaDatas?.graduationPage.title || "My Gradution Information",
  description:
    metaDatas?.graduationPage.description ||
    "Welcome to my Education history Section",
};

const MyGraduation = () => {
  return (
    <div>
      <EducationTree />
    </div>
  );
};

export default MyGraduation;
