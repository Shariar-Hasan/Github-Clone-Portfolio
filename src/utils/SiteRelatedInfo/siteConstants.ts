export const BASE_URL: string | undefined = process.env.NEXT_PUBLIC_HOST_URL;
export const RSS_URL_API_KEY: string | undefined = process.env.RSS_URL_API_KEY;
export const DATABASE_URL: string | undefined =
  process.env.DB_CONNECTION_STRING;

// chach limit timeouts
export const githubDataCacheLimitTimeout: number = 24 * 3600;
export const blogCacheLimitTimeout: number = 24 * 3600;
export const singleBlogCacheLimitTimeout: number = 60;
export const projectCacheLimitTimeout: number = 24 * 3600;
export const singleProjectCacheLimitTimeout: number = 24 * 3600;
