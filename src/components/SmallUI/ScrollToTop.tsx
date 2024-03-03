'use client'
import { useScrollYDetection } from '@/hooks/useScrollYDetection'
import { stopScrollabilityByWheel } from '@/utils/shortFunctions'
import React, { useState } from 'react'
import { BsFillAirplaneEnginesFill } from 'react-icons/bs'
import { FaArrowUp } from 'react-icons/fa'

const ScrollToTop = () => {
  const isVisible = useScrollYDetection(100)
  const [flyClass, setFlyClass] = useState('')
  const scrollToTop = () => {
    // write cubic beizer slow start then fast
    const callback = stopScrollabilityByWheel()
    setFlyClass('translate-y-[-1300px] ')
    const timeOutId = setTimeout(() => {
      setFlyClass('')
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth',
      })
      callback()
      clearTimeout(timeOutId)
    }, 1500)
  }

  return (
    <span
      className={`z-[100] ${
        !isVisible
          ? 'opacity-0 invisible duration-150'
          : 'opacity-40 duration-1000'
      } ${flyClass} hover:opacity-100 fixed bottom-[20px] right-[20px] text-site md:text-[45px] text-[30px] hover:text-brand cursor-pointer ease-in `}
      onClick={scrollToTop}
    >
      <BsFillAirplaneEnginesFill title="Scroll to Top Boiii" className="" />
    </span>
  )
}

export default ScrollToTop
