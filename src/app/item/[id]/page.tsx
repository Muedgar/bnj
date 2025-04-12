'use client'
import { useEffect, useRef, useState } from 'react'
import { getMenu } from "@/lib"
import findItemById from "@/utils/search"
import { useParams } from "next/navigation"
import { FullscreenIcon, MinimizeIcon, XIcon } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import * as Dialog from '@radix-ui/react-dialog'

export default function Item() {
  const menu = getMenu()
  const { id } = useParams()
  const [isFullscreen, setIsFullscreen] = useState(false)
  const [selectedMedia, setSelectedMedia] = useState<{ type: 'image' | 'video', src: string } | null>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  const foundItem = findItemById(menu, id)

  const toggleFullscreen = () => {
    const element = containerRef.current
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
    <div className="max-w-screen-xl mx-auto p-6 mt-28">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">

        {/* Virtual Tour Embed */}
        <div ref={containerRef} className="relative rounded-lg overflow-hidden shadow-md bg-black h-[60vh]">
          <iframe 
            src={foundItem.spaceUrl} 
            className="w-full h-full" 
            allowFullScreen
            title={`Virtual tour of ${foundItem.name}`}
          />
          <button
            onClick={toggleFullscreen}
            onTouchEnd={toggleFullscreen}
            className="absolute bottom-4 right-4 bg-white rounded-md p-2 shadow hover:bg-gray-100 transition"
            aria-label={isFullscreen ? 'Exit fullscreen' : 'Enter fullscreen'}
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

      {/* Media Grid */}
      {foundItem.media && (foundItem.media.images.length > 0 || foundItem.media.videos.length > 0) && (
        <div className="mt-12">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Photos and Video</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {foundItem.media.images.map((src: string, index: number) => (
              <button
                key={`img-${index}`}
                onClick={() => setSelectedMedia({ type: 'image', src })}
                className="aspect-square relative rounded-md overflow-hidden shadow-sm hover:shadow-md transition focus:outline-none focus:ring-2 focus:ring-red-500"
                aria-label={`View image ${index + 1} in full screen`}
              >
                <div className="relative w-full h-full">
                  <Image
                    src={src}
                    alt={`Image ${index + 1}`}
                    className="object-cover rounded-md"
                    fill
                    sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    priority={index < 3} // Only prioritize first 3 images
                  />
                </div>
              </button>
            ))}
            {foundItem.media.videos.map((src: string, index: number) => (
              <button
                key={`vid-${index}`}
                onClick={() => setSelectedMedia({ type: 'video', src })}
                className="aspect-square relative rounded-md overflow-hidden shadow-sm hover:shadow-md transition focus:outline-none focus:ring-2 focus:ring-red-500"
                aria-label={`View video ${index + 1} in full screen`}
              >
                <video
                  className="w-full h-full object-cover"
                  poster={foundItem.media.images[index] || undefined}
                  muted
                  loop
                  playsInline
                  aria-hidden="true"
                >
                  <source src={src} type="video/mp4" />
                </video>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-12 h-12 bg-black bg-opacity-50 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M6.3 2.841A1.5 1.5 0 004 4.11v11.78a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                    </svg>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Modal */}
      <Dialog.Root open={!!selectedMedia} onOpenChange={(open) => !open && setSelectedMedia(null)}>
        <Dialog.Portal>
          <Dialog.Overlay className="fixed inset-0 bg-black/80 z-50" />
          <Dialog.Content
            className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-[90vw] max-h-[90vh] z-50 focus:outline-none"
            onEscapeKeyDown={() => setSelectedMedia(null)}
            onPointerDownOutside={() => setSelectedMedia(null)}
          >
            <div className="absolute top-0 right-0 p-4 z-50">
              <Dialog.Close asChild>
                <button
                  className="bg-white rounded-full p-2 shadow-md hover:bg-gray-100 transition"
                  aria-label="Close media viewer"
                >
                  <XIcon className="h-6 w-6" />
                </button>
              </Dialog.Close>
            </div>

            <div className="w-full h-full flex items-center justify-center p-4">
              <Dialog.Title className="sr-only">
                {selectedMedia?.type === 'image' ? 'Image Viewer' : 'Video Player'}
              </Dialog.Title>
              <Dialog.Description className="sr-only">
                {selectedMedia?.type === 'image' 
                  ? 'Viewing image in full screen mode' 
                  : 'Viewing video in full screen mode'}
              </Dialog.Description>

              {selectedMedia?.type === 'image' ? (
                <div className="relative w-full h-full">
                  <Image
                    src={selectedMedia.src}
                    alt="Full size media"
                    className="object-contain"
                    fill
                    sizes="100vw"
                    priority
                  />
                </div>
              ) : (
                <video
                  controls
                  autoPlay
                  className="w-full h-full object-contain rounded-lg"
                  aria-label="Full screen video player"
                >
                  <source src={selectedMedia?.src} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              )}
            </div>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </div>
  )
}