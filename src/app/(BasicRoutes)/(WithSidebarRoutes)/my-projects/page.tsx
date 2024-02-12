import { getProjects } from "@/actions/GET";
import ProjectCard from "@/components/SmallUI/cards/ProjectCard";
import { ProjectType } from "@/types/propsTypes";
import React from "react";

const ProjectPage = async () => {
  const { data, success } = await getProjects();
  return (
    <div>
      {success ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
          {data.map((project: ProjectType & { _id: string }) => {
            return <ProjectCard key={project._id} project={project} />;
          })}
        </div>
      ) : (
        <div>
          <h1>404 - Page Not Found</h1>
        </div>
      )}
    </div>
  );
};

export default ProjectPage;
