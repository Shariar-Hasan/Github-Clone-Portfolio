import { connectToDb } from '@/app/api/db'
import { NextRequest, NextResponse } from 'next/server'
import { Award } from '../../model'

export const GET = async (
  req: NextRequest,
  { params: { slug } }: { params: { slug: string } }
): Promise<NextResponse> => {
  try {
    await connectToDb()
    const awards = await Award.find(
      {
        slug: {
          $ne: slug,
        },
      },
      {
        title: 1,
        slug: 1,
        description: 1,
      }
    )
      .sort({
        createdAt: -1,
      })
      .limit(9)
    return NextResponse.json({ data: awards, success: true })
  } catch (error: any) {
    return NextResponse.json({ data: error, success: false })
  }
}
