import { AboutMeType, ContactIconType } from "@/types/constantsTypes";
import { BsMedium } from "react-icons/bs";
import { FaGithubSquare, FaHackerrank, FaLinkedin } from "react-icons/fa";
import { FaSquareFacebook, FaXTwitter } from "react-icons/fa6";
import { MdOutlineFormatColorText } from "react-icons/md";
import { SiCodechef, SiCodeforces, SiGmail, SiLeetcode } from "react-icons/si";
// CV download link
export const CVLink: string =
  "https://drive.google.com/file/d/1G0LSyr6Ktc843pui91GTIAb0dkphszIk/view?usp=sharing";

// social media handles
// any one changing the details , only change this values
export const githubUserName: string = "Shariar-Hasan"; // must provide github usename
export const mediumUserName: string = "ShariarHasan";
export const facebookUserName: string = "iShariarHasan";
export const linkedInUserName: string = "shariar-hasan";
export const twitterUserName: string = "iShariarHasan";
export const contactMail: string = "shahriar.hasan.1523@gmail.com";

// social Links
export const socialLinks: ContactIconType[] = [
  {
    // mail - important
    title: contactMail,
    icon: <SiGmail />,
    url: `mailto:${contactMail}`,
    media: "Contact Mail",
  },
  {
    // github - important
    title: githubUserName,
    icon: <FaGithubSquare />,
    url: `https://github.com/${githubUserName}`,
    media: "Github",
  },
  {
    // facebook
    title: facebookUserName,
    icon: <FaSquareFacebook />,
    url: `https://www.facebook.com/${facebookUserName}/`,
    media: "Facebook",
  },
  {
    // twitter
    title: "@" + twitterUserName,
    icon: <FaXTwitter />,
    url: `https://twitter.com/${twitterUserName}`,
    media: "Twitter",
  },
  {
    // linkedin
    title: linkedInUserName,
    icon: <FaLinkedin />,
    url: `https://www.linkedin.com/in/${linkedInUserName}/`,
    media: "LinkedIn",
  },
  {
    // medium
    title: "@" + mediumUserName,
    icon: <BsMedium />,
    url: `https://medium.com/@${mediumUserName}`,
    media: "Medium",
  },
  // {
  //   // any other url you wnat
  //   title: "title of your social acount name",
  //   icon: icons jsx elemetn,
  //   url: url link,
  //   media : "Github"
  // },
];

// personal basic information
export const basicInfo: AboutMeType = {
  name: "Shariar Hasan",
  title: "Front-End Developer",
  location: "Bangladesh",
  email: "shariar.hasan.1523@gmail.com",
  aboutMeJsx: (
    <p className="tracking-widest my-2 text-site-dimmed">
      I am a{" "}
      <span className="text-brand">
        FrontEnd focused MERN Stack enthusiastic🥳
      </span>{" "}
      person with proficient knowledge of Web Devlopment technologies👨‍💻🧑‍💻 having{" "}
      <span className="text-brand">1+ year of learning experience</span> and I
      am a fresh <span className="text-brand"> CSE graduate🎓</span> with B.Sc.
      Engineering from University of Chittagong, Bangladesh. I have quite a
      comfortable knowledge about{" "}
      <span className="text-brand">Competitive Programming with DSA ✍️</span> I
      love to make complex code⌨️ into readable and efficient clean code. I love
      to travel✈️, cycling🚴, swimming🏊 and playing soccer⚽
    </p>
  ),
};

export const programmingIcon: ContactIconType[] = [
  {
    title: "CodeForces",
    media: "CodeForces",
    icon: <SiCodeforces />,
    url: "https://codeforces.com/profile/ethico",
  },
  {
    title: "LeetCode",
    media: "LeetCode",
    icon: <SiLeetcode />,
    url: "https://leetcode.com/iShariarHasan/",
  },
  {
    title: "HackerRank",
    media: "HackerRank",
    icon: <FaHackerrank />,
    url: "https://www.hackerrank.com/profile/iShariarHasan",
  },
  {
    title: "CodeChef",
    media: "CodeChef",
    icon: <SiCodechef />,
    url: "https://www.codechef.com/users/ethico",
  },
  {
    title: "AtCoder",
    media: "AtCoder",
    icon: <MdOutlineFormatColorText />,
    url: "https://atcoder.jp/users/ethico",
  },
];
