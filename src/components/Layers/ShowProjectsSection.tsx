import { ProjectType } from "@/types/propsTypes";
import React from "react";
import ProjectCard from "../SmallUI/cards/ProjectCard";
import NoItemAvailable from "../SmallUI/NoItemAvailable";

const ShowProjectsSection = async ({
  projects,
}: {
  projects: ProjectType[];
}) => {
  return (
    <>
      {projects?.length > 0 ? (
        <div className="grid grid-cols-1 sm:gr id-cols-2 md:gr id-cols-3  gap-3">
          {projects?.map((project: ProjectType, i: number) => {
            return (
              <ProjectCard key={project._id} index={i} project={project} />
            );
          })}
        </div>
      ) : (
        <NoItemAvailable text="No Project Found" />
      )}
    </>
  );
};

export default ShowProjectsSection;
