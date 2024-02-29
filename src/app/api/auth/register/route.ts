import { NextRequest, NextResponse } from 'next/server'
import { connectToDb, disconnectFromDb } from '../../db'
import { Auth } from '../model'
// Get Request for Authentication from database
export const POST = async (req: NextRequest): Promise<NextResponse> => {
  const data = await req.json()
  console.log({ data })
  try {
    await connectToDb()
    const authData = await Auth.create(data)
    await disconnectFromDb()
    // console.log({ awards: awards.length, sort: queryParams.get('sort') })
    return NextResponse.json({ data: authData, success: true })
  } catch (error: any) {
    // console.log({ error })
    return NextResponse.json({ data: error.message, success: false })
  }
}
