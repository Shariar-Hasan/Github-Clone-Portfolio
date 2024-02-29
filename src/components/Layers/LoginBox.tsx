'use client'
import React from 'react'
import { useForm } from 'react-hook-form'
import Input from '../FormElements/Input'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import bcrypt from 'bcryptjs'
interface LoginForm {
  email: string
  password: string
}
const loginSchema = z
  .object({
    email: z.string().email({ message: 'Enter a valid email address' }),
    password: z.string().min(6, { message: 'Enter a min of 6 digit' }),
  })
  .required({
    email: true,
    password: true,
  })
const LoginBox = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginForm>({
    resolver: zodResolver(loginSchema),
  })

  const onSubmit = (data: LoginForm) => {
    // Handle login logic with data.email and data.password
    const salt = bcrypt.genSaltSync(10)
    // data.password = bcrypt.
    console.log(data)
  }
  return (
    <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
      <Input
        label="Admin Email"
        name="email"
        required
        register={register('email')}
        errors={errors}
      />
      <Input
        label="Admin Password"
        name="password"
        required
        register={register('password')}
        errors={errors}
      />
      <button
        type="submit"
        className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-brand hover:bg-opacity-95 "
      >
        Login
      </button>
    </form>
  )
}

export default LoginBox
