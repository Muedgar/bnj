'use client'
import { useEffect, useRef, useState } from 'react'
import { getMenu } from "@/lib"
import findItemById from "@/utils/search"
import { useParams } from "next/navigation"
import { FullscreenIcon, MinimizeIcon } from 'lucide-react'
import Link from 'next/link'

export default function Item() {
  const menu = getMenu()
  const { id } = useParams()
  const [isFullscreen, setIsFullscreen] = useState(false)
  const containerRef = useRef(null)

  const foundItem = findItemById(menu, id)

  const toggleFullscreen = () => {
    const element: any = containerRef.current

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
    return () => document.removeEventListener('fullscreenchange', handleFullscreenChange)
  }, [])

  if (!foundItem) {
    return (
      <div className="w-screen h-screen flex flex-col justify-center items-center bg-gray-100">
        <p className="text-gray-700 text-lg">Listing not found</p>
        <Link
          href={'/'}
          className='mt-4 px-4 py-2 bg-white border border-gray-300 rounded-md shadow hover:bg-gray-100 transition'
        >
          Go Back
        </Link>
      </div>
    )
  }

  return (
    <div className="max-w-screen-xl mx-auto p-6  mt-28">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
        
        {/* Virtual Tour Embed */}
        <div ref={containerRef} className="relative rounded-lg overflow-hidden shadow-md bg-black h-[60vh]">
          <iframe src={foundItem.spaceUrl} className="w-full h-full" allowFullScreen />
          <button
  onClick={toggleFullscreen}
  onTouchEnd={toggleFullscreen}
  className="absolute bottom-4 right-4 bg-white rounded-md p-2 shadow hover:bg-gray-100 transition"
>
  {isFullscreen ? <MinimizeIcon size={18} /> : <FullscreenIcon size={18} />}
</button>

        </div>

        {/* Details Panel */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h1 className="text-2xl font-bold text-red-500 mb-2">{foundItem.name}</h1>
          <p className="text-gray-600 mb-4 text-sm">{foundItem.summary || 'No summary provided.'}</p>

          <div className="mb-4">
            <h2 className="font-semibold text-lg text-gray-800 mb-1">Category</h2>
            <p className="text-gray-600">{foundItem.category} - {foundItem.subcategory}</p>
          </div>

          <div className="mb-4">
            <h2 className="font-semibold text-lg text-gray-800 mb-1">Location</h2>
            <p className="text-gray-600">
              {foundItem.location.city || 'City'}, {foundItem.location.province || 'Province'}, {foundItem.location.country}
            </p>
          </div>

          <div className="mb-4">
            <h2 className="font-semibold text-lg text-gray-800 mb-1">Contact</h2>
            <p className="text-gray-600 text-sm">
              {foundItem.contactName || 'N/A'}<br />
              {foundItem.contactEmail || 'N/A'}<br />
              {foundItem.contactPhone || 'N/A'}
            </p>
          </div>

          <Link
            href={"/"}
            className="mt-6 inline-block bg-gray-800 text-white text-sm px-5 py-2 rounded-md hover:bg-gray-700 transition"
          >
            Back to Menu
          </Link>
        </div>
      </div>
    </div>
  )
}
