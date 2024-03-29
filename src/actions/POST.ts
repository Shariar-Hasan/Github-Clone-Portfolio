import { ContactForm } from './../components/Layers/ContactMeForm'
import { BASE_URL } from '@/utils/SiteRelatedInfo/siteConstants'
const options = {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
}
export const contactMeFormPost = async (data: ContactForm) => {
  const response = await fetch(`${BASE_URL}/api/contact-me`, {
    ...options,
    body: JSON.stringify(data),
  })
  return response.json()
}
