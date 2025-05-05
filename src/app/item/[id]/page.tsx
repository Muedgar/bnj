'use client'

import { useEffect, useRef, useState } from 'react'
import { getMenu } from "@/lib"
import findItemById from "@/utils/search"
import { useParams, useRouter } from "next/navigation"
import { FullscreenIcon, MinimizeIcon, XIcon } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import Head from 'next/head'
import * as Dialog from '@radix-ui/react-dialog'
import { Label } from '@radix-ui/themes/components/context-menu'

export default function Item() {
  const menu = getMenu()
  const { id } = useParams()
  const router = useRouter()
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

  const prefetchMedia = (src: string) => {
    router.prefetch(src)
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
      <main className="w-screen h-screen flex flex-col justify-center items-center bg-gray-100" role="main">
        <p className="text-gray-700 text-lg">Listing not found</p>
        <Link href="/" className='mt-4 px-4 py-2 bg-white border border-gray-300 rounded-md shadow hover:bg-gray-100 transition'>
          Go Back
        </Link>
      </main>
    )
  }

  return (
    <>
      <Head>
        <title>{foundItem.name} | Virtual Tour</title>
        <meta name="description" content={`Explore ${foundItem.name} via a 3D virtual tour and browse media content.`} />
        <meta property="og:title" content={foundItem.name} />
        <meta property="og:description" content={`View ${foundItem.name} located in ${foundItem.location.city || ''}, ${foundItem.location.country}.`} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={foundItem.media?.images[0]} />
        {foundItem.media?.images.slice(0, 3).map((src: string, i: number) => (
          <link key={i} rel="preload" href={src} as="image" />
        ))}
      </Head>

      <main className="max-w-screen-xl mx-auto p-6 mt-28" role="main">
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start" aria-label="Virtual tour and item details">
          <div ref={containerRef} className="relative rounded-lg overflow-hidden shadow-md bg-black h-[60vh]">
            <iframe 
              src={foundItem.spaceUrl}
              className="w-full h-full"
              allowFullScreen
              title={`Virtual tour of ${foundItem.name}`}
            />
            <button
              onClick={toggleFullscreen}
              aria-label={isFullscreen ? 'Exit fullscreen' : 'Enter fullscreen'}
              className="absolute bottom-4 right-4 bg-white rounded-md p-2 shadow hover:bg-gray-100 transition"
            >
              {isFullscreen ? <MinimizeIcon size={18} /> : <FullscreenIcon size={18} />}
            </button>
          </div>

          <article className="bg-white rounded-lg shadow-md p-6" aria-labelledby="item-title">
            <header>
              <h1 id="item-title" className="text-2xl font-bold text-red-500 mb-2">{foundItem.name}</h1>
              <p className="text-gray-600 mb-4 text-sm">{foundItem.summary || 'No summary provided.'}</p>
            </header>

            <section className="mb-4">
              <h2 className="font-semibold text-lg text-gray-800 mb-1">Category</h2>
              <p className="text-gray-600">{foundItem.category} - {foundItem.subcategory}</p>
            </section>

            <section className="mb-4">
              <h2 className="font-semibold text-lg text-gray-800 mb-1">Location</h2>
              <p className="text-gray-600">
                {foundItem.location.city || 'City'}, {foundItem.location.province || 'Province'}, {foundItem.location.country}
              </p>
            </section>

            <section className="mb-4">
              <h2 className="font-semibold text-lg text-gray-800 mb-1">Contact</h2>
              <p className="text-gray-600 text-sm">
                {foundItem.contactName || 'N/A'}<br />
                {foundItem.contactEmail || 'N/A'}<br />
                {foundItem.contactPhone || 'N/A'}
              </p>
            </section>

            <Link href="/" className="mt-6 inline-block bg-gray-800 text-white text-sm px-5 py-2 rounded-md hover:bg-gray-700 transition">
              Back to Menu
            </Link>
          </article>
        </section>

        {foundItem.media && (foundItem.media.images.length || foundItem.media.videos.length) > 0 && (
          <section className="mt-12" aria-label="Photo and video gallery">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Photos and Video</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {foundItem.media.images.map((src: string, index: number) => (
                <button
                  key={`img-${index}`}
                  onClick={() => setSelectedMedia({ type: 'image', src })}
                  onMouseEnter={() => prefetchMedia(src)}
                  onFocus={() => prefetchMedia(src)}
                  className="aspect-square relative rounded-md overflow-hidden shadow-sm hover:shadow-md transition focus:outline-none focus:ring-2 focus:ring-red-500"
                  aria-label={`View image ${index + 1}`}
                >
                  <Image
                    src={src}
                    alt={`Image ${index + 1}`}
                    fill
                    className="object-cover rounded-md"
                    sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    priority={index < 3}
                  />
                </button>
              ))}
              {foundItem.media.videos.map((src: string, index: number) => (
                <button
                  key={`vid-${index}`}
                  onClick={() => setSelectedMedia({ type: 'video', src })}
                  onMouseEnter={() => prefetchMedia(src)}
                  onFocus={() => prefetchMedia(src)}
                  className="aspect-square relative rounded-md overflow-hidden shadow-sm hover:shadow-md transition focus:outline-none focus:ring-2 focus:ring-red-500"
                  aria-label={`View video ${index + 1}`}
                >
                  <video
                    muted
                    loop
                    playsInline
                    preload="metadata"
                    poster={foundItem.media.images[index] || undefined}
                    className="w-full h-full object-cover"
                  >
                    <source src={src} type="video/mp4" />
                  </video>
                </button>
              ))}
            </div>
          </section>
        )}

        {/* Dialog Modal */}
        <Dialog.Root open={!!selectedMedia} onOpenChange={(open) => !open && setSelectedMedia(null)}>
          <Dialog.Portal>
            <Dialog.Overlay className="fixed inset-0 bg-black/80 z-50" />
            <Dialog.Title>
              <Label>Media Viewer Modal</Label>
            </Dialog.Title>
            <Dialog.Content
              className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-[90vw] max-h-[90vh] z-50 focus:outline-none"
              onEscapeKeyDown={() => setSelectedMedia(null)}
              onPointerDownOutside={() => setSelectedMedia(null)}
              aria-label="Media Viewer Modal"
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
                {selectedMedia?.type === 'image' ? (
                  <Image
                    src={selectedMedia.src}
                    alt="Full-size media"
                    fill
                    className="object-contain"
                    sizes="100vw"
                    priority
                  />
                ) : (
                  <video
                    controls
                    autoPlay
                    className="w-full h-full object-contain rounded-lg"
                    aria-label="Full screen video player"
                  >
                    <source src={selectedMedia?.src} type="video/mp4" />
                  </video>
                )}
              </div>
            </Dialog.Content>
          </Dialog.Portal>
        </Dialog.Root>
      </main>
    </>
  )
}
