'use client'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React from 'react'
import { FaHome } from 'react-icons/fa'
import { FaArrowRight } from 'react-icons/fa6'

const Root404 = () => {
  const router = useRouter()
  return (
    <main className="flex items-center justify-center w-full min-h-screen py-8  page md:py-16 ">
      <div className="relative flex flex-col items-center w-full gap-8 px-8 md:px-18 xl:px-40 md:gap-16">
        <h1 className="text-2xl md:text-5xl  w-full select-none  text-center font-black   ">
          404
        </h1>
        <p className="text-lg md:text-2xl font-bold capitalize text-center">
          You have discovered a secret place
        </p>
        <p className="text-sm md:text-xl font-medium break-words text-center">
          Unfortunately, this is only a 404 page. You may have mistyped the
          address, or the page has been moved to another URL.
        </p>
        <div className="flex flex-col justify-center items-center w-full gap-8 md:flex-row md:gap-32 xl:px-16">
          <button
            onClick={() => router.back()}
            className="flex items-center justify-center w-full gap-4 p-3 font-semibold capitalize border-2  rounded shadow-lg md:w-fit  md:p-6 focus:outline-none hover:scale-105 active:scale-90 hover:shadow-xl "
          >
            <FaArrowRight />
            Go back to Previous Page
          </button>
          <Link
            href="/"
            className="rounded flex w-full md:w-fit group items-center gap-4 justify-center border-2 font-semibold  p-3 md:p-6 capitalize focus:outline-none hover:scale-105 active:scale-90 shadow-lg hover:shadow-xl "
          >
            <FaHome />
            Go back to Home Page
          </Link>
        </div>
      </div>
    </main>
  )
}

export default Root404
