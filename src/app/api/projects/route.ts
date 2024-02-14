import { NextResponse, type NextRequest } from "next/server";
import { connectToDb } from "../db";
import { Project } from "./modal";

export const GET = async (req: NextRequest): Promise<NextResponse> => {
  const queryParams = req.nextUrl.searchParams;
  const dbQueryObject = {
    category:
      queryParams.get("category") !== "All"
        ? queryParams.get("category")
        : { $exists: true },
  };
  console.log({ queryParams, dbQueryObject });
  try {
    await connectToDb();
    const projects = await Project.find({ ...dbQueryObject }).sort({
      createdAt: queryParams.get("sort") === "desc" ? -1 : 1,
    });
    return NextResponse.json({ data: projects, success: true });
  } catch (error: any) {
    return NextResponse.json({ data: error.message, success: true });
  }
};
export const POST = async (req: NextRequest): Promise<NextResponse> => {
  const data = await req.json();
  try {
    await connectToDb();
    const newProject = new Project(data);
    await newProject.save();
    return NextResponse.json({ data: newProject, success: true });
  } catch (e) {
    return NextResponse.json({ data: e, success: false });
  }
};
