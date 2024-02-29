import { NextResponse, type NextRequest } from 'next/server'
import { Award } from '../model'
import { connectToDb } from '../../db'

export const GET = async (
  req: NextRequest,
  { params: { slug } }: { params: { slug: string } }
): Promise<NextResponse> => {
  try {
    await connectToDb()
    const singleAward = await Award.findOne({ slug })
    // null check
    if (!singleAward) {
      throw new Error('No Award found with the specified slug.')
    }
    return NextResponse.json({ data: singleAward, success: true })
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
