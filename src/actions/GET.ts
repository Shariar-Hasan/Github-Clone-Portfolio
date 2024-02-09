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
