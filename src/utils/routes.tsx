import { RoutesType, SideNavRoutesType } from "@/types/constantsTypes";
import { FaBlog, FaMedal, FaStar, FaStickyNote, FaUserGraduate } from "react-icons/fa";
import { GrProjects } from "react-icons/gr";
import { IoBookOutline } from "react-icons/io5";
import { RiContactsBookLine, RiGitRepositoryFill } from "react-icons/ri";
import { githubUserName } from "./userInfoContants";
import { FiUserPlus, FiUsers } from "react-icons/fi";

export const navbarRotues: RoutesType[] = [
  {
    title: "OverView",
    path: "/",
    icon: <IoBookOutline />,
  },
  {
    title: "Projects",
    path: "/my-projects?category=All&sort=desc",
    icon: <GrProjects />,
  },
  {
    title: "Blogs",
    path: "/my-blogs",
    icon: <FaBlog />,
  },
  {
    title: "Graduation",
    path: "/my-graduation",
    icon: <FaUserGraduate />,
  },
  {
    title: "Awards",
    path: "/my-awards?category=All&sort=desc",
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
      icon: <FaStickyNote />,
      isExternal: true,
    },
    {
      // my stars
      title: "My Stars",
      path: `https://github.com/${githubUserName}?tab=stars`,
      icon: <FaStar />,
      isExternal: true,
    },
    {
      // my followers
      title: "Followers",
      path: `https://github.com/${githubUserName}?tab=followers`,
      icon: <FiUsers />,
      isExternal: true,
    },
    {
      // my following
      title: "Following",
      path: `https://github.com/${githubUserName}?tab=following`,
      icon: <FiUserPlus />,
      isExternal: true,
    },
  ],
];
