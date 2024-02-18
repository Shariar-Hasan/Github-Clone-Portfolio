import React from "react";
import SubHeading from "../SmallUI/SubHeading";
import ProjectCard from "../SmallUI/cards/ProjectCard";
import { getOtherProjects } from "@/actions/GET";
import { ProjectType } from "@/types/propsTypes";
import NoItemAvailable from "../SmallUI/NoItemAvailable";

const OtherProject = async ({ slug }: { slug: string }) => {
  const { data, success } = await getOtherProjects(slug);
  console.log({ data, success });
  return (
    <>
      <SubHeading>Other Projects</SubHeading>
      {data?.length > 0 && success ? (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 px-2 my-2">
          {data?.map((project: ProjectType, i: number) => {
            return (
              <ProjectCard key={project._id} index={i} project={project} />
            );
          })}
        </div>
      ) : (
        <NoItemAvailable text="No Other Projects available right now" />
      )}
    </>
  );
};

export default OtherProject;
