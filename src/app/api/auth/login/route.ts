import { NextRequest, NextResponse } from 'next/server'
import { connectToDb, disconnectFromDb } from '../../db'
import { Auth } from '../model'
// Get Request for Authentication from database
export const POST = async (req: NextRequest): Promise<NextResponse> => {
  const { email, password } = await req.json()
  console.log({ email: email, password: password })
  try {
    await connectToDb()
    const authData = await Auth.findOne(
      { email: email },
      {
        password: 0,
      }
    )
    console.log({ authData })
    await disconnectFromDb()
    return NextResponse.json({ data: authData, success: true })
  } catch (error: any) {
    return NextResponse.json({ data: error, success: false })
  }
}
