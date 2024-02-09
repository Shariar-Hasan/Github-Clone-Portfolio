import { githubUserName } from "@/utils/contants";
import { NextResponse } from "next/server";

export const GET = async (): Promise<NextResponse> => {
  const res = await fetch(`https://api.github.com/users/${githubUserName}`);
  const data = await res.json();
  return NextResponse.json({
    isSuccess: true,
    data: data,
  });
};
