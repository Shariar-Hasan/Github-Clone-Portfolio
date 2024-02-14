import { getProjects } from "@/actions/GET";
import FilterSection from "@/components/Layers/FilterSection";
import ShowProjectsSection from "@/components/Layers/ShowProjectsSection";
import NoItemAvailable from "@/components/SmallUI/NoItemAvailable";
import ProjectCard from "@/components/SmallUI/cards/ProjectCard";
import { ProjectType, SearchParamsType } from "@/types/propsTypes";
import { metaDatas } from "@/utils/contants";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: metaDatas?.projectPage.title || "My Projects",
  description:
    metaDatas?.projectPage.description || "Welcome to My Project Page",
};

const ProjectPage = async ({
  searchParams,
}: {
  searchParams: SearchParamsType;
}) => {
  const { data, success } = await getProjects(searchParams);
  console.log({ searchParams });
  return (
    <div>
      <FilterSection />
      {success ? (
        <ShowProjectsSection projects={data} />
      ) : (
        <NoItemAvailable text="No Project Found" />
      )}
    </div>
  );
};

export default ProjectPage;
