import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  // if (req.nextUrl.pathname.startsWith("/my-projects")) {
  //   return NextResponse.rewrite(new URL("/contact-me", req.url));
  // }
  // return NextResponse.redirect(new URL(req.url));
}

// export const config = {
//   matcher: "/my-projects",
// };
