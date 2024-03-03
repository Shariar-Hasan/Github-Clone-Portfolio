import { connectToDb } from '@/app/api/db'
import { NextRequest, NextResponse } from 'next/server'
import { Project } from '../../modal'

export const GET = async (
  req: NextRequest,
  { params: { slug } }: { params: { slug: string } }
): Promise<NextResponse> => {
  try {
    await connectToDb()
    const otherProjects = await Project.find({
      slug: {
        $ne: slug,
      },
    })
      .sort({
        createdAt: -1,
      })
      .limit(9)
    return NextResponse.json({ data: otherProjects, success: true })
  } catch (error: any) {
    return NextResponse.json({ data: error, success: false })
  }
}
