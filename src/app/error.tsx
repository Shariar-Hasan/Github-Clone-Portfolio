'use client'
import { useRouter } from 'next/navigation'
import React, { useEffect } from 'react'

const RootErrorPage = ({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) => {
  const router = useRouter()
  return (
    <div className="w-[100vw] h-[100vh] grid place-items-center">
      <div>
        <h2 className='text-3xl text-center'>{error?.message}</h2>
        <div className='mt-2 flex gap-3 items-center flex-wrap justify-between'>
          <button
            className="px-3 py-2 border-2 border-brand"
            onClick={
              // Attempt to recover by trying to re-render the segment
              () => reset()
            }
          >
            Try again
          </button>
          <button
            className="px-3 py-2 border-2 border-brand"
            onClick={
              // Attempt to recover by trying to re-render the segment
              () => router.refresh()
            }
          >
            Reload Page
          </button>
        </div>
      </div>
    </div>
  )
}

export default RootErrorPage
