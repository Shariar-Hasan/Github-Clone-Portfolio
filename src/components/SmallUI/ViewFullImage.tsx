'use client'
import Image from 'next/image'
import React, {
  MouseEvent,
  ReactNode,
  RefObject,
  Reference,
  useEffect,
  useRef,
  useState,
} from 'react'
import toast from 'react-hot-toast'
import { FaTimes } from 'react-icons/fa'
import {
  FaArrowRotateLeft,
  FaArrowRotateRight,
  FaMagnifyingGlassMinus,
  FaMagnifyingGlassPlus,
} from 'react-icons/fa6'
import { LuFlipHorizontal2 } from 'react-icons/lu'
type PropsType = {
  src: string
}
type ControllerType = {
  title: string
  icon: JSX.Element
  handleClick: () => void
}
const ViewFullImage = ({ src }: PropsType) => {
  const [imgElement, setImgElement] = useState<HTMLImageElement | null>(null)
  const [isViewing, setIsViewing] = useState<boolean>(false)
  const [rotation, setRotation] = useState<number>(0)
  const [flip, setFlip] = useState<number>(0)
  const [zoom, setZoom] = useState<number>(1)
  const [isDragging, setIsDragging] = useState<boolean>(false)
  const [origin, setOrigin] = useState<{ x: number; y: number } | null>(null)
  const [translateAxis, setTranslateAxis] = useState<{
    x: number
    y: number
  }>({ x: 0, y: 0 })
  useEffect(() => {
    if (origin) {
      setZoom(2)
    } else {
      setZoom(1)
    }
  }, [origin])
  const reset = () => {
    setIsViewing(false)
    const tId = setTimeout(() => {
      setRotation(0)
      setFlip(0)
      setZoom(1)
      setOrigin(null)
      setTranslateAxis({ x: 0, y: 0 })
      setIsDragging(false)
      clearTimeout(tId)
    }, 1000)
  }
  // double click handler
  // const handleDoubleClick = (e: MouseEvent<HTMLImageElement>) => {
  //   const { offsetLeft, offsetTop } = imgElement || {
  //     offsetLeft: 0,
  //     offsetTop: 0,
  //   }
  //   if (zoom > 1) {
  //     setOrigin(null)
  //   } else {
  //     setOrigin({
  //       x: e?.clientX - offsetLeft,
  //       y: e?.clientY - offsetTop,
  //     })
  //   }
  //   // console.log({
  //   //   x: e?.clientX - offsetLeft,
  //   //   y: e?.clientY - offsetTop,
  //   // })
  // }
  // mouse click and hold handler
  const handleMouseDown = (e: MouseEvent<HTMLImageElement>) => {
    // setIsDragging(true)
    // const { offsetLeft, offsetTop } = imgElement
    // setOrigin({
    //   x: e?.clientX - offsetLeft,
    //   y: e?.clientY - offsetTop,
    // })
  }
  // mouse  hold & leave click handler
  const handleMouseUp = () => {
    // setIsDragging(false)
    // setOrigin(null)
  }

  // mouse  hold click & move handler
  const handleMouseMove = (e: MouseEvent<HTMLImageElement>) => {
    // if (isDragging) {
    //   setTranslateAxis({
    //     x: e.nativeEvent.layerX - origin?.x,
    //     y: e.nativeEvent.layerY - origin?.y,
    //   })
    //   console.log(e)
    // }
  }
  const controllerList: ControllerType[] = [
    {
      title: 'Zoom In',
      icon: <FaMagnifyingGlassPlus />,
      handleClick: () => {
        if (zoom >= 2) {
          toast.error('Can not Zoom In more')
          return
        }
        setZoom((prev) => prev + 0.2)
      },
    },
    {
      title: 'Zoom Out',
      icon: <FaMagnifyingGlassMinus />,
      handleClick: () => {
        if (zoom <= 1) {
          toast.error('Can not Zoom Out less')
          return
        }
        setZoom((prev) => prev - 0.2)
      },
    },
    {
      title: 'Rotate left',
      icon: <FaArrowRotateLeft />,
      handleClick: () => setRotation((prev) => prev - 1),
    },
    {
      title: 'Rotate Right',
      icon: <FaArrowRotateRight />,
      handleClick: () => setRotation((prev) => prev + 1),
    },
    {
      title: 'Flip Image',
      icon: <LuFlipHorizontal2 />,
      handleClick: () => setFlip((prev) => prev + 1),
    },
    {
      title: 'Close Image Viewer',
      icon: <FaTimes />,
      handleClick: reset,
    },
  ]
  return (
    <>
      <div
        className="absolute top-0 left-0 flex justify-center items-center w-full h-full group dark:hover:bg-black/50 hover:bg-wh ite/50 cursor-pointer text-transparent z-[1]"
        onClick={() => setIsViewing(true)}
      >
        {/* <button
          className="px-4 py-2 bg-brand bg-opacity-0 group-hover:bg-opacity-0 invisible group-hover:visible group-hover:opacity-100 opacity-0"
        > */}
        {/* View Full Image */}
      </div>
      {/* Image Backdrop */}
      <div
        className={`fixed top-0 left-0 w-[100vw] h-[100vh] flex items-center justify-center overflow-y-auto overflow-x-hidden scrollbar-brand bg-black/80 md:px-[90px] md:py-[50px] py-[10px] cursor-pointer delayed z-[999] ${
          isViewing ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
        onClick={reset}
      >
        {/* IMage section */}
        <Image
          width={800}
          height={800}
          onLoad={(e) => setImgElement(e.target as HTMLImageElement)}
          style={{
            transform: `rotateZ(${rotation * 90}deg) rotateY(${
              flip * 180
            }deg) scale(${zoom}) translate(${translateAxis?.x}px, ${
              translateAxis?.y
            }px) `,
            transformOrigin: origin
              ? `${origin?.x}px ${origin?.y}px`
              : 'center',
            // cursor: zoom > 1 ? 'zoom-out' : 'zoom-in',
            cursor: 'default',
          }}
          onClick={(e) => e.stopPropagation()}
          // onDoubleClick={handleDoubleClick}
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
          draggable={false}
          src={src}
          title="Self Made Image Viewer Image | Shariar Hasan"
          alt={'Self Made Image Viewer Image | Shariar Hasan'}
          className={`md:w-[50%] w-[100%] z-[200] block delayed`}
        />
        {/* Controller */}
        <div
          className="fixed bottom-0 left-1/2 right-1/2 -translate-x-1/2 z-[300] bg-white bg-opacity-60  px-5 py-3 flex justify-between w-max rounded-t-xl overflow-y-hidden overflow-x-auto scrollbar-none text-xl "
          onClick={(e) => e.stopPropagation()}
        >
          {controllerList?.map(({ title, icon, handleClick }, i) => (
            <button
              key={title + i}
              onClick={handleClick}
              title={title}
              className="px-3 py-1 flex items-center justify-center hover:text-gray-900 text-gray-700"
            >
              {icon}
            </button>
          ))}
        </div>
      </div>
    </>
  )
}

export default ViewFullImage
