import { NextResponse, type NextRequest } from "next/server";
import { connectToDb } from "../db";
import { Project } from "./modal";

export const GET = async (req: NextRequest): Promise<NextResponse> => {
  const queryParams = req.nextUrl.searchParams;
  console.log({ queryParams });
  const dbQueryObject = {};
  try {
    await connectToDb();
    const projects = await Project.find({});
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
