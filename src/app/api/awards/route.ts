import { NextRequest, NextResponse } from 'next/server'
import { connectToDb, disconnectFromDb } from '../db'
import { Award } from './model'
// Get Request for Award from database
export const GET = async (req: NextRequest): Promise<NextResponse> => {
  const queryParams = req.nextUrl.searchParams
  const dbQueryObject = {
    category: !queryParams.get('category')?.includes('All')
      ? queryParams.get('category')
      : { $exists: true },
  }
  console.log({ queryParams, dbQueryObject })
  try {
    await connectToDb()
    const awards = await Award.find({ ...dbQueryObject }).sort({
      createdAt: queryParams.get('sort') === 'desc' ? -1 : 1,
    })
    await disconnectFromDb()
    return NextResponse.json({ data: awards, success: true })
  } catch (error: any) {
    return NextResponse.json({ data: error.message, success: false })
  }
}

// post request for Awards in the database
export const POST = async (req: NextRequest): Promise<NextResponse> => {
  const body = await req.json()
  await connectToDb()
  const newAward = new Award(body)
  await newAward.save()
  try {
    return NextResponse.json({ data: newAward, success: true })
  } catch (error: any) {
    return NextResponse.json({ data: error, success: false })
  }
}
