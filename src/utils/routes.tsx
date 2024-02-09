import { RoutesType, SideNavRoutesType } from "@/types/constantsTypes";
import { FaBlog, FaMedal } from "react-icons/fa";
import { GrProjects } from "react-icons/gr";
import { IoBookOutline } from "react-icons/io5";
import { RiContactsBookLine, RiGitRepositoryFill } from "react-icons/ri";
import { githubUserName } from "./contants";

export const navbarRotues: RoutesType[] = [
  {
    title: "OverView",
    path: "/",
    icon: <IoBookOutline />,
  },
  {
    title: "Projects",
    path: "/my-projects",
    icon: <GrProjects />,
  },
  {
    title: "Blogs",
    path: "/my-blogs",
    icon: <FaBlog />,
  },
  {
    title: "Achievements",
    path: "/my-achievements",
    icon: <FaMedal />,
  },
  {
    title: "Contacts",
    path: "/contact-me",
    icon: <RiContactsBookLine />,
  },
];

export const sideBarRoutes: SideNavRoutesType[][] = [
  [...navbarRotues.map((item) => ({ ...item, isExternal: false }))],
  [
    {
      // my repos
      title: "Repositories",
      path: `https://github.com/${githubUserName}?tab=repositories`,
      icon: <RiGitRepositoryFill />,
      isExternal: true,
    },
    {
      // my gist
      title: "Gists List",
      path: `https://gist.github.com/${githubUserName}`,
      icon: <RiGitRepositoryFill />,
      isExternal: true,
    },
    {
      // my stars
      title: "My Stars",
      path: `https://github.com/${githubUserName}?tab=stars`,
      icon: <RiGitRepositoryFill />,
      isExternal: true,
    },
    {
      // my followers
      title: "Followers",
      path: `https://github.com/${githubUserName}?tab=followers`,
      icon: <RiGitRepositoryFill />,
      isExternal: true,
    },
    {
      // my following
      title: "Following",
      path: `https://github.com/${githubUserName}?tab=following`,
      icon: <RiGitRepositoryFill />,
      isExternal: true,
    },
  ],
];
