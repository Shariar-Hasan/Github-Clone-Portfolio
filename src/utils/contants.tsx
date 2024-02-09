import { SocialIconType } from "@/types/constantsTypes";
import { BsMedium } from "react-icons/bs";
import { FaGithubSquare, FaLinkedin } from "react-icons/fa";
import { FaSquareFacebook, FaXTwitter } from "react-icons/fa6";

// social media handles
// any one changing , onnly change this values
export const githubUserName: string = "Shariar-Hasan"; // must provide github usename
export const mediumUserName: string = "ShariarHasan";
export const facebookUserName: string = "iShariarHasan";
export const linkedInUserName: string = "iShariarHasan";
export const twitterUserName: string = "iShariarHasan";

// social Links
export const socialLinks: SocialIconType = [
  {
    // github - important
    title: "Github",
    icon: <FaGithubSquare />,
    url: `https://github.com/${githubUserName}`,
    textClass: "text-blue-500",
  },
  {
    // facebook
    title: "Facebook",
    icon: <FaSquareFacebook />,
    url: `https://www.facebook.com/${facebookUserName}/`,
    textClass: "text-blue-500",
  },
  {
    // twitter
    title: "Twitter",
    icon: <FaXTwitter />,
    url: `https://twitter.com/${twitterUserName}`,
    textClass: "text-blue-500",
  },
  {
    // linkedin
    title: "LinkedIn",
    icon: <FaLinkedin />,
    url: `https://www.linkedin.com/in/${linkedInUserName}/`,
    textClass: "text-blue-500",
  },
  {
    // medium
    title: "Medium",
    icon: <BsMedium />,
    url: `https://medium.com/@${mediumUserName}`,
    textClass: "text-blue-500",
  },
  // {
  //   // any other url you wnat
  //   title: "title of your social acount name",
  //   icon: icons jsx elemetn,
  //   url: url link,
  //   textClass: color theme of the icon from tailwind class,
  // },
];
