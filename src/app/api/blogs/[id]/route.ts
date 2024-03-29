import { mediumUserName } from "@/utils/userInfoContants";
import { toBlogSlug } from "@/utils/shortFunctions";
import { type NextRequest, NextResponse } from "next/server";

export const GET = async (
  req: NextRequest,
  { params }: { params: { id: string } }
): Promise<NextResponse> => {
  const { id } = params;
  try {
    const res = await fetch(
      `https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@${mediumUserName}`
    );
    const result = await res.json();
    const blog = result.items.find((item: any) => toBlogSlug(item.guid) === id);

    return NextResponse.json({
      data: blog,
      success: true,
    });
  } catch (error) {
    return NextResponse.json({ data: error, success: false });
  }
};
