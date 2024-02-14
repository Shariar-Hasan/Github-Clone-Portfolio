import { NextRequest, NextResponse } from "next/server";

export const GET = async (req: NextRequest): Promise<NextResponse> => {
  try {
    return NextResponse.json({ message: "Hello, World!" });
  } catch (error: any) {
    return NextResponse.json({ message: error.message });
  }
};
