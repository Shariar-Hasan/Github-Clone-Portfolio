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
