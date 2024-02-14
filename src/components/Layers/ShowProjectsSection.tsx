import { getProjects } from "@/actions/GET";
import { ProjectType } from "@/types/propsTypes";
import React from "react";
import ProjectCard from "../SmallUI/cards/ProjectCard";

const ShowProjectsSection = async ({
  projects,
}: {
  projects: ProjectType[];
}) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
      {projects?.map((project: ProjectType, i: number) => {
        return <ProjectCard key={project._id} index={i} project={project} />;
      })}
    </div>
  );
};

export default ShowProjectsSection;
