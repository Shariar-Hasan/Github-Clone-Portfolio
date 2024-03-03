import { NextResponse, type NextRequest } from 'next/server'
import { connectToDb } from '../../db'
import { Project } from '../modal'

export const GET = async (
  req: NextRequest,
  { params: { slug } }: { params: { slug: string } }
): Promise<NextResponse> => {
  try {
    await connectToDb()
    const singleProject = await Project.findOne({ slug })
    // null check
    if (!singleProject) {
      throw new Error('No project found with the specified slug.')
    }
    console.log({ singleProject: singleProject?.title || 'somethign' })
    return NextResponse.json({ data: singleProject, success: true })
  } catch (error: any) {
    return NextResponse.json({ data: error, success: false })
  }
}
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
