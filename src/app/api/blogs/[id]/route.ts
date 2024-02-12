import { mediumUserName } from "@/utils/contants";
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
    const data = result.items.find((item: any) => toBlogSlug(item.guid) === id);

    console.log({ data });
    if (!data) {
      return NextResponse.json({
        success: false,
        data: { message: "No blog found for this slug url" },
      });
    } else {
      return NextResponse.json({ data, success: true });
    }
  } catch (error) {
    return NextResponse.json({ data: error, success: false });
  }
};
