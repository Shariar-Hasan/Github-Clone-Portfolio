'use client'
import { handleCopyToClipBoard } from '@/utils/shortFunctions'
import { BASE_URL } from '@/utils/siteConstants'
import { usePathname } from 'next/navigation'
import React, { useState } from 'react'
import toast from 'react-hot-toast'
import { FaCheck, FaRegCopy } from 'react-icons/fa'

const LinkCopyUi = () => {
  const pathname = usePathname()
  const copyText = BASE_URL + pathname
  const [isLinkCopied, setIsLinkCopied] = useState(false)
  const handleLinkCopy = async () => {
    setIsLinkCopied(true)

    try {
      await handleCopyToClipBoard(copyText)
      toast.success('Link Copied')
    } catch (err: any) {
      toast.error(err.message)
    } finally {
      const timeoutId = setTimeout(() => {
        setIsLinkCopied(false)
        clearTimeout(timeoutId)
      }, 3000)
    }
  }
  return (
    <div className="w-full">
      <div className="rounded-lg mb-4">
        <div className="mb-2">
          <div className="flex items-center justify-between">
            <span className="text-site-dimmed font-semibold">Copy Url</span>
            <button
              onClick={handleLinkCopy}
              className="p-2 border border-dimmed cornered"
              disabled={isLinkCopied}
            >
              {isLinkCopied ? <FaCheck /> : <FaRegCopy />}
            </button>
          </div>
        </div>

        <div className="w-full overflow-hidden flex flex-wrap bg-back px-2 py-2">
          <pre
            className=" cursor-pointer"
            onClick={handleLinkCopy}
            title="Click to copy to clipboard"
          >
            <code className="text-sm">{copyText}</code>
          </pre>
        </div>
      </div>
    </div>
  )
}

export default LinkCopyUi
