import { ContactForm } from "@/app/(BasicRoutes)/contact-me/page";
import { BASE_URL } from "@/utils/siteConstants";
const options = {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
};
export const contactMeFormPost = async (data: ContactForm) => {
  const response = await fetch(`${BASE_URL}/api/contact-me`, {
    ...options,
    body: JSON.stringify(data),
  });
  return response.json();
};
