import { GitHubUser } from "@/types/propsTypes";
import { socialLinks } from "@/utils/contants";
import Image from "next/image";
import React from "react";

const SideAboutMe = ({ userData }: { userData: GitHubUser }) => {
  const { avatar_url, login, name, bio } = userData;
  return (
    <div className="py-10">
      <Image
        src={avatar_url}
        alt={name}
        width={550}
        height={550}
        className="w-full aspect-square rounded-full"
        priority={true}
      />
      <h3 className="text-xl font-semibold tracking-wider">{name}</h3>
      <h4 className="text-lg font-light text-dimmed">{login}</h4>
      <p className="text-sm">{bio}</p>
      <button className="w-full bg-block-hard cornered my-3 py-1 border border-gray-300/50">
        Download Resume
      </button>
      <ul>
        {socialLinks?.map(({ title, media, url, icon, textClass }, index) => (
          <li key={title + index}>
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className={`text-site-dimmed hover:text-link-underline flex items-center gap-x-2 text-base`}
              title={media}
            >
              <span className={`${textClass}`}>{icon}</span> {title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SideAboutMe;
