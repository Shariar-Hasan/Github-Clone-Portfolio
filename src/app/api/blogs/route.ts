import { mediumUserName } from "@/utils/userInfoContants";
import { NextResponse, type NextRequest } from "next/server";

export const GET = async (req: NextRequest): Promise<NextResponse> => {
  try {
    const res = await fetch(
      `https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@${mediumUserName}`
    );
    const data = await res.json();
    return NextResponse.json({ data, success: true });
  } catch (error) {
    return NextResponse.json({ data: error, success: false });
  }
};
