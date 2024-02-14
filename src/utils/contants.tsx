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
    title: "in/"+linkedInUserName,
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

// S E O // Meta Data section
export const metaDatas: {
  [x: string]: { title: string; description: string };
} = {
  contactMePage: {
    title: "Contact Me",
    description:
      "Feel free to contact me via my mail or social networks. Contact me for any questions or to work together. I will try to get back to you as soon as possible.",
  },
  aboutMePage: {
    title: "Hello from Shariar👋",
    description:
      "This is a Portfolio website for Developer Shariar Hasan. Feel free to visit the site and know more about me. I am a FrontEnd focused MERN Stack enthusiastic person with proficient knowledge of Web Devlopment technologies having 1+ year of learning experience and I am a fresh CSE graduate with B.Sc. Engineering from University of Chittagong, Bangladesh. I have quite a comfortable knowledge about Competitive Programming with DSA. I love to make complex code into readable and efficient clean code. I love to travel, cycling, swimming and playing soccer",
  },
  projectPage: {
    title: "Projects",
    description:
      "These are some of my projects that I have done so far. I have done some projects using React, Next.js, Tailwind CSS, Node.js, Express.js, MongoDB, Firebase, and many more. I have also made some tools. Feel free to see all this projects",
  },
  blogPage: {
    title: "Blogs",
    description:
      "Welcome to my blog page. These are some of my blogs that I have written so far. I have written some blogs about Web Development, programmign languages like javascript, pythons etc. and some other topics. Feel free to read all this blogs",
  },
  awardPage: {
    title: "Awards",
    description:
      "These are some of my awards that I have achieved so far. Feel free to see all this Hall of Fame",
  },
  graduationPage: {
    title: "Graduation",
    description:
      "This is my Graduation page. I have completed my B.Sc. Engineering from University of Chittagong, Bangladesh. Feel free to visit the page to know more about it.",
  },
};
