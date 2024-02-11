import { GitHubUser } from "@/types/propsTypes";
import { CVLink, socialLinks } from "@/utils/contants";
import { downloadCV } from "@/utils/shortFunctions";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaUsers } from "react-icons/fa";

const SideAboutMe = ({ userData }: { userData: GitHubUser }) => {
  const { avatar_url, login, name, bio, followers, following } = userData;
  return (
    <div className="py-10 px-5">
      <Image
        src={avatar_url}
        alt={name}
        width={550}
        height={550}
        className="max-w-[300px] mx -auto w-full aspect-square rounded-full"
        priority={true}
      />
      <h3 className="text-xl font-semibold tracking-wider">{name}</h3>
      <h4 className="text-lg font-light text-dimmed">{login}</h4>
      <p className="text-sm">{bio}</p>
      <Link href={CVLink} target="_blank" rel="noreferrer noopenner">
      <button className="w-full bg-block-hard cornered my-3 py-1 border border-gray-300/50 active:scale-[.99] text-sm">
        Download Resume
      </button>
      </Link>
      
      <div className="text-sm flex flex-wrap items-center gap-1 my-2">
        <FaUsers />
        {/* url jsx react */}
        <a
          href={`https://github.com/${login}?tab=followers`}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-link text-site-dimmed"
        >
          {followers} followers
        </a>
        •
        <a
          href={`https://github.com/${login}?tab=following`}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-link text-site-dimmed"
        >
          {following} following
        </a>
      </div>
      <ul className="flex flex-col gap-y-0.5 text- sm">
        {socialLinks?.map(({ title, media, url, icon, textClass }, index) => (
          <li key={title + index} className="flex items-center gap-x-1">
            <span className={`${textClass}`}>{icon}</span>
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className={`text-site-dimmed hover:text-link flex items-center gap-x-2 text-sm`}
              title={media}
            >
              {title} 
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SideAboutMe;
