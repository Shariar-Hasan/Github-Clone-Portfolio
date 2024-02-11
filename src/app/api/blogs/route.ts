import { mediumUserName } from "@/utils/contants";
import { RSS_URL_API_KEY } from "@/utils/siteConstants";
import { NextResponse, type NextRequest } from "next/server";

export const GET = async (req: NextRequest): Promise<NextResponse> => {
  const res = await fetch(
    `https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@${mediumUserName}`
  );
  const data = await res.json();
  //   const data = {
  //     name: "hasan vai",
  //     url: `https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@${mediumUserName}&api_key=${RSS_URL_API_KEY}`,
  //   };
  console.log({ data });
  return NextResponse.json({ data });
};
