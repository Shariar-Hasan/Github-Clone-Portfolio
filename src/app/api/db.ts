import { DATABASE_URL } from '@/utils/siteConstants'
import mongoose from 'mongoose'

export const connectToDb = async () => {
  await mongoose.connect(DATABASE_URL as string)
}
export const disconnectFromDb = async () => {
  await mongoose.disconnect()
}
