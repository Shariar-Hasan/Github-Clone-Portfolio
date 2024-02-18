import { NextResponse, type NextRequest } from "next/server";
import { connectToDb } from "../../db";
import { Project } from "../modal";

export const GET = async (
  req: NextRequest,
  { params: { slug } }: { params: { slug: string } }
): Promise<NextResponse> => {
  const queryParams = req.nextUrl.searchParams;

  try {
    await connectToDb();
    const singleProject = await Project.findOne({ slug });
    return NextResponse.json({ data: singleProject, success: true });
  } catch (error: any) {
    return NextResponse.json({ data: error.message, success: false });
  }
};
// export const POST = async (
//   req: NextRequest,
//   { params: { slug } }: { params: { slug: string } }
// ): Promise<NextResponse> => {
//   try {
//     await connectToDb();
//     const newProject = new Project({
//       slug,
//     });
//     await newProject.save();
//     return NextResponse.json({ data: newProject, success: true });
//   } catch (e) {
//     return NextResponse.json({ data: e, success: false });
//   }
// };
