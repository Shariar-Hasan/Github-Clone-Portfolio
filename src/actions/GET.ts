import { SearchParamsType } from "@/types/propsTypes";
import { mediumUserName } from "@/utils/contants";
import { BASE_URL } from "@/utils/siteConstants";

export const getUser = async () => {
  const user = await fetch(`${BASE_URL}/api/github`, {
    next: {
      revalidate: 3600 * 24,
    },
  });
  const data = await user.json();
  return data;
};

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
export const getProjects = async (searchParams: SearchParamsType) => {
  const newQueryString = Object.keys(searchParams)
    .map((key) => `${key}=${searchParams[key]}`)
    .join("&");
  console.log({ newQueryString });
  const result = await fetch(`${BASE_URL}/api/projects?${newQueryString}`, {
    // next: {
    //   revalidate: 3600 * 24,
    // },
    cache: "no-cache",
  });
  const data = await result.json();
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
