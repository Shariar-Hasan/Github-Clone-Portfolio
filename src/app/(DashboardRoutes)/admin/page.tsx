
import LoginBox from '@/components/Layers/LoginBox'
import React from 'react'
import bcrypt from 'bcryptjs'
const AdminLogin = () => {

  return (
    <div className="min-h-[80vh] flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="text-center text-2xl font-semibold ">
            Login Box
          </h2>
          <p className="mt-2 text-center text-sm ">
            Please sign in to your account
          </p>
          <p>{bcrypt.genSaltSync(10)}</p>
        </div>
        <LoginBox />
      </div>
    </div>
  )
}

export default AdminLogin
