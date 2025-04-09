/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'
import { useEffect, useRef, useState } from 'react'
import { getMenu } from "@/lib"
import findItemById from "@/utils/search"
import { useParams, useRouter } from "next/navigation"
import { FullscreenIcon, MinimizeIcon } from 'lucide-react'

export default function Item() {
  const menu = getMenu()
  const { id } = useParams()
  const router = useRouter()
  const [isFullscreen, setIsFullscreen] = useState(false)
  const containerRef = useRef(null)

  const foundItem = findItemById(menu, id)

  const handleHome = () => {
    router.push('/')
  }

  const toggleFullscreen = () => {
    const element:any = containerRef.current

    if (!document.fullscreenElement) {
      element?.requestFullscreen()
      setIsFullscreen(true)
    } else {
      document.exitFullscreen()
      setIsFullscreen(false)
    }
  }

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement)
    }

    document.addEventListener('fullscreenchange', handleFullscreenChange)

    return () => {
      document.removeEventListener('fullscreenchange', handleFullscreenChange)
    }
  }, [])

  if (!foundItem) {
    return (
      <div className="w-screen h-screen flex flex-col justify-center items-center ">
        <p>Listing not found</p>
        <button
          onClick={handleHome}
          className='text-left text-sm w-fit h-[35px] bg-white rounded-md p-2 mt-2 shadow shadow-[#3333335f] cursor-pointer hover:bg-gray-200 pointer-events-auto'>
          Go Back
        </button>
      </div>
    )
  }

  return (
    <div className="w-fit h-fit">
      <div className="w-screen h-screen flex flex-row flex-nowrap justify-center items-center">
        <div className="w-screen h-screen flex bg-blue-100">
          <div ref={containerRef} className="w-full h-[80vh] relative bg-black">
          <button
              onClick={toggleFullscreen}
              className="absolute bottom-10 right-10 z-50 text-left text-sm w-fit h-fit bg-white rounded-md p-2 mt-2 shadow shadow-[#3333335f] cursor-pointer hover:bg-gray-200 pointer-events-auto">
              {isFullscreen ? <MinimizeIcon size={20} /> : <FullscreenIcon size={20} />}
            </button>
            <iframe className="w-full h-full" src={`${foundItem.spaceUrl}`} />
          </div>
        </div>
      </div>
    </div>
  )
}
