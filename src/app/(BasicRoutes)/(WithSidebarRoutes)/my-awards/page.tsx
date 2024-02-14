import { getAwards } from "@/actions/GET";
import AwardShowSection from "@/components/Layers/AwardShowSection";
import FilterSection from "@/components/Layers/FilterSection";
import ShowProjectsSection from "@/components/Layers/ShowProjectsSection";
import NoItemAvailable from "@/components/SmallUI/NoItemAvailable";
import { SearchParamsType } from "@/types/propsTypes";
import { metaDatas } from "@/utils/contants";
import { BASE_URL } from "@/utils/siteConstants";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: metaDatas?.awardPage.title || "Hall of Fame",
  description: metaDatas?.awardPage.description || "Welcome to my Ha  of fame.",
};

const AchievementPage = async ({
  searchParams,
}: {
  searchParams: SearchParamsType;
}) => {
  const { data, success } = await getAwards(searchParams);
  return (
    <div>
      <FilterSection categoryFetchString={`${BASE_URL}/api/awards/categories`} />
      {success ? (
        <AwardShowSection awards={data} />
      ) : (
        <NoItemAvailable text="No Achievement Found" />
      )}
    </div>
  );
};

export default AchievementPage;
