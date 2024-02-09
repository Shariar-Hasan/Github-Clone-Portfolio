import { SocialIconType } from "@/types/constantsTypes";
import { BsMedium } from "react-icons/bs";
import { FaGithubSquare, FaLinkedin } from "react-icons/fa";
import { FaSquareFacebook, FaXTwitter } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";

// social media handles
// any one changing , onnly change this values
export const githubUserName: string = "Shariar-Hasan"; // must provide github usename
export const mediumUserName: string = "ShariarHasan";
export const facebookUserName: string = "iShariarHasan";
export const linkedInUserName: string = "iShariarHasan";
export const twitterUserName: string = "iShariarHasan";
export const contactMail: string = "shahriar.hasan.1523@gmail.com";

// social Links
export const socialLinks: SocialIconType = [
  {
    // mail - important
    title: contactMail,
    icon: <SiGmail />,
    url: `mailto:${contactMail}`,
    textClass: "text-red-500",
    media: "Contact Mail",
  },
  {
    // github - important
    title: githubUserName,
    icon: <FaGithubSquare />,
    url: `https://github.com/${githubUserName}`,
    textClass: "text-white",
    media: "Github",
  },
  {
    // facebook
    title: facebookUserName,
    icon: <FaSquareFacebook />,
    url: `https://www.facebook.com/${facebookUserName}/`,
    textClass: "text-blue-700",
    media: "Facebook",
  },
  {
    // twitter
    title: "@" + twitterUserName,
    icon: <FaXTwitter />,
    url: `https://twitter.com/${twitterUserName}`,
    textClass: "text-blue-300",
    media: "Twitter",
  },
  {
    // linkedin
    title: linkedInUserName,
    icon: <FaLinkedin />,
    url: `https://www.linkedin.com/in/${linkedInUserName}/`,
    textClass: "text-blue-900",
    media: "LinkedIn",
  },
  {
    // medium
    title: "@" + mediumUserName,
    icon: <BsMedium />,
    url: `https://medium.com/@${mediumUserName}`,
    textClass: "text-white",
    media: "Medium",
  },
  // {
  //   // any other url you wnat
  //   title: "title of your social acount name",
  //   icon: icons jsx elemetn,
  //   url: url link,
  //   textClass: color theme of the icon from tailwind class,
  //   media : "Github"
  // },
];

// personal basic information
export const basicInfo = {
  name : "Shariar Hasan",
  title: "Front-End Developer",
  location: "Bangladesh",
  email: "shariar.hasan.1523@gmail.com",
}