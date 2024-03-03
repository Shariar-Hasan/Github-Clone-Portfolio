import { NextResponse, type NextRequest } from 'next/server'
import { connectToDb, disconnectFromDb } from '../db'
import { Project } from './modal'

export const GET = async (req: NextRequest): Promise<NextResponse> => {
  const queryParams = req.nextUrl.searchParams
  const queryParamsString = queryParams.toString()
  const dbQueryObject = {
    category: !queryParams.get('category')?.includes('All')
      ? queryParams.get('category')
      : { $exists: true },
  }
  try {
    await connectToDb()
    const projects = await Project.find({ ...dbQueryObject }).sort({
      createdAt: queryParams.get('sort') === 'desc' ? -1 : 1,
    })
    await disconnectFromDb()
    console.log({
      queryParams,
      dbQueryObject,
      projectslen: projects?.length,
      queryParamsString,
    })
    return NextResponse.json({ data: projects, success: true })
  } catch (error: any) {
    return NextResponse.json({ data: error, success: false })
  }
}
export const POST = async (req: NextRequest): Promise<NextResponse> => {
  const data = await req.json()
  try {
    await connectToDb()
    const newProject = new Project(data)
    await newProject.save()
    await disconnectFromDb()
    return NextResponse.json({ data: newProject, success: true })
  } catch (e) {
    return NextResponse.json({ data: e, success: false })
  }
}
