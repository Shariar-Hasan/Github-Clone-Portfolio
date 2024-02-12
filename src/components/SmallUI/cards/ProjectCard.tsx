
import Image from "next/image";
import React from "react";
import {ProjectType}  from "@/types/propsTypes"
const ProjectCard = ({ project }: { project: ProjectType }) => {
  const { title, shortDescription, thumbnail } = project;
  return (
    <div className="border">
      <h1>{title}</h1>
      <p>{shortDescription}</p>
      <Image
        width={500}
        height={500}
        className="w-full"
        src={thumbnail}
        alt={title}
      />
    </div>
  );
};

export default ProjectCard;
