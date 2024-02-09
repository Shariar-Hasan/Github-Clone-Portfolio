import { GitHubUser } from "@/types/propsTypes";
import Image from "next/image";
import React from "react";

const SideAboutMe = ({ userData }: { userData: GitHubUser }) => {
  const { avatar_url, login, name } = userData;
  return (
    <div>
      <Image
        src={avatar_url}
        alt={name}
        width={550}
        height={550}
        className="w-full aspect-square rounded-full"
        priority={true}
      />
      <h3>{name}</h3>
      <h4>{login}</h4>
    </div>
  );
};

export default SideAboutMe;
