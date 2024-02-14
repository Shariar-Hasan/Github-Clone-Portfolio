import { metaDatas } from "@/utils/contants";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: metaDatas?.awardPage.title || "Hall of Fame",
  description: metaDatas?.awardPage.description || "Welcome to my Ha  of fame.",
};

const AchievementPage = () => {
  return <div>AchievementPage</div>;
};

export default AchievementPage;
