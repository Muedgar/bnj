import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Rwanda 3D Virtual Tours | Homes & Cars for Sale or Rent",
  description:
    "Explore houses and cars in Rwanda through immersive 3D virtual tours. Find your next home or vehicle without leaving your screen.",
  keywords: [
    "Rwanda 3D tours",
    "virtual tours Rwanda",
    "Rwanda house tours",
    "Rwanda real estate",
    "Rwanda virtual car showroom",
    "buy houses in Rwanda",
    "rent houses Rwanda",
    "Rwanda car sales"
  ],
  openGraph: {
    title: "Rwanda 3D Tours – Explore Houses and Cars Virtually",
    description:
      "Take interactive 3D tours of homes and cars available for sale or rent in Rwanda.",
    url: "https://www.rwanda3dvirtualtours.com/",
    siteName: "Rwanda 3D Virtual Tours",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "3D virtual tour of a Rwandan home",
      },
    ],
    type: "website",
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/png" href="/favicon.png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "TouristDestination",
              "name": "Rwanda 3D Virtual Tours",
              "description": "Explore Rwanda's top destinations with immersive 3D virtual tours of homes and cars.",
              "url": "https://www.rwanda3dvirtualtours.com",
              "image": "https://www.rwanda3dvirtualtours.com/og-image.jpg"
            }),
          }}
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  )
}
