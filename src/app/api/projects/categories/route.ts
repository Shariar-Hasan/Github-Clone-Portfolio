import { NextResponse } from 'next/server'
import { connectToDb } from '../../db'
import { Project } from '../modal'

export const GET = async (): Promise<NextResponse> => {
  try {
    await connectToDb()
    const categories = await Project.aggregate([
      {
        $group: {
          _id: '$category',
          count: { $sum: 1 },
        },
      },
      {
        $project: {
          _id: 0,
          category: '$_id',
          count: 1,
        },
      },
    ])
    // console.log({ categories });
    return NextResponse.json({ data: categories, success: true })
  } catch (error: any) {
    return NextResponse.json({ data: error.message, success: true })
  }
}
