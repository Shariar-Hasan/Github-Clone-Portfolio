export type ChildrenType = { children: React.ReactNode }
export type GitHubUser = {
  login: string
  id: number
  node_id: string
  avatar_url: string
  gravatar_id: string
  url: string
  html_url: string
  followers_url: string
  following_url: string
  gists_url: string
  starred_url: string
  subscriptions_url: string
  organizations_url: string
  repos_url: string
  events_url: string
  received_events_url: string
  type: string
  site_admin: boolean
  name: string
  company: string | null
  blog: string | null
  location: string
  email: string | null
  hireable: boolean
  bio: string
  twitter_username: string | null
  public_repos: number
  public_gists: number
  followers: number
  following: number
  created_at: string
  updated_at: string
}
export type MediumBlog = {
  title: string
  pubDate: string
  link: string
  guid: string
  author: string
  thumbnail: string
  description: string
  content: string
  enclosure: object
  categories: string[]
}
export type NavlinkPropType = {
  children: React.ReactNode
  href: string
  activeClassName: string
  nonActiveClassName: string
  className: string
}
export type AwardType = {
  _id?: string
  title: string
  slug?: string
  category: string
  description: string
  thumbnail: string
  links: {
    title: string
    url: string
  }[]
  tags: string[]
  createdAt: number
  updatedAt: number
}
export type ProjectType = AwardType & {
  shortDescription: string
}
export type LoginType = {
  email: string
  password: string
  role?: 'ADMIN' | 'GUEST'
}
export type SearchParamsType = { [key: string]: string }

export type SelectTagListType = { title: string; value: string }

export type EducationInfoType = {
  courseTitle: string
  shortCourseTitle?: string
  startingYear: number
  graduationYear: number
  description?: string
  icon?: JSX.Element
  result?: string
  location?: string
  institution: string
}
