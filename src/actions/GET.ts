import { SearchParamsType } from "@/types/propsTypes";
import { mediumUserName } from "@/utils/userInfoContants";
import { BASE_URL } from "@/utils/siteConstants";
import { SlUserFollowing } from "react-icons/sl";

//User section
export const getUser = async () => {
  const user = await fetch(`${BASE_URL}/api/github`, {
    next: {
      revalidate: 3600 * 24,
    },
  });
  const data = await user.json();
  return data;
};

//Blogs section
export const getBlogs = async () => {
  const user = await fetch(
    `https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@${mediumUserName}`,
    {
      mode: "no-cors",
      next: {
        revalidate: 3600 * 24,
      },
    }
  );
  const data = await user.json();
  return data;
};

export const getSingleBlog = async (id: string) => {
  const user = await fetch(`${BASE_URL}/api/blogs/${id}`, {
    next: {
      revalidate: 3600 * 24,
    },
  });
  const data = await user.json();
  return data;
};
export const getRelatedBlogs = async (id: string) => {
  const user = await fetch(`${BASE_URL}/api/blogs/related/${id}`, {
    next: {
      revalidate: 3600 * 24,
    },
  });
  const data = await user.json();
  return data;
};

//Projects section
export const getProjects = async (searchParams: SearchParamsType) => {
  const newQueryString = Object.keys(searchParams)
    .map((key) => `${key}=${searchParams[key]}`)
    .join("&");
  console.log({ newQueryString });
  const result = await fetch(`${BASE_URL}/api/projects?${newQueryString}`, {
    next: {
      revalidate: 20,
    },
  });
  const data = await result.json();
  return data;
};
export const getSingleProject = async (slug: string) => {
  const result = await fetch(`${BASE_URL}/api/projects/${slug}`, {
    cache: "force-cache",
  });
  const data = await result.json();
  return data;
};
export const getOtherProjects = async (slug: string) => {
  const result = await fetch(`${BASE_URL}/api/projects/others/${slug}`, {
    next: {
      revalidate: 24 * 3600,
    },
  });
  const data = await result.json();
  return data;
};

//Award section
export const getAwards = async (searchParams: SearchParamsType) => {
  const newQueryString = Object.keys(searchParams)
    .map((key) => `${key}=${searchParams[key]}`)
    .join("&");
  const result = await fetch(`${BASE_URL}/api/awards?${newQueryString}`, {
    next: {
      revalidate: 5,
    },
  });
  const data = await result.json();
  return data;
};
