import { LoginType } from '@/types/propsTypes'
import mongoose from 'mongoose'

const authSchema = new mongoose.Schema<LoginType>(
  {
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      required: true,
      default: 'GUEST',
    },
  },
  { versionKey: false }
)

export const Auth = mongoose.models.Auth || mongoose.model('Auth', authSchema)
