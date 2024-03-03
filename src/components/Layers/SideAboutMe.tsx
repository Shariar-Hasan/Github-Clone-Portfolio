import { GitHubUser } from "@/types/propsTypes";
import { CVLink, programmingIcon, socialLinks } from "@/utils/userInfoContants";
import { downloadCV } from "@/utils/shortFunctions";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaUsers } from "react-icons/fa";

const SideAboutMe = ({ userData }: { userData: GitHubUser }) => {
  const { avatar_url, login, name, bio, followers, following } = userData;
  return (
    <div className="py-10 px-5">
      <div className="flex md:flex-col mb-2 gap-x-3 items-center md:items-start">
        <Image
          src={avatar_url}
          alt={name}
          width={550}
          height={550}
          className="max-w-[50px] md:max-w-[350px] w-full aspect-square rounded-full md:border-4 md:border-brand"
          priority={true}
        />
        <div>
          <h3 className="md:text-xl font-semibold tracking-wider">{name}</h3>
          <h4 className="md:text-lg font-light text-dimmed">{login}</h4>
        </div>
      </div>

      <p className="text-sm">{bio}</p>
      <Link href={CVLink} target="_blank" rel="noreferrer noopenner">
        <span className="sr-only">Resume Download Button</span>
        <button className="w-full bg-block-hard cornered my-3 py-1 border border-gray-300/50 active:scale-[.99] text-sm hover:border-brand hover:text-brand">
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
        {socialLinks?.map(({ title, media, url, icon }, index) => (
          <li key={title + index} className="flex items-center gap-x-1">
            <span className="sr-only">{media} link </span>
            <span>{icon}</span>
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
      <div className="divider-x" />
      <div className="flex items-center gap-1 text-xs flex-wrap">
        {programmingIcon?.map(({ title, url, icon }, index) => (
          <a
            key={index}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className={`px-2 py-1 gap-x-1 flex items-center border border-dimmed rounded-full delayed hover:border-brand hover:text-brand`}
            title={title}
          >
            <span>{icon}</span>
            {title}
          </a>
        ))}
      </div>
    </div>
  );
};

export default SideAboutMe;
