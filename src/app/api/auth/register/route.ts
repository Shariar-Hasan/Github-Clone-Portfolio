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
    return NextResponse.json({ data: authData, success: true })
  } catch (error: any) {
    return NextResponse.json({ data: error, success: false })
  }
}
