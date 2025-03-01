'use client';

import Hero from "@/components/hero/hero";
import NavBarDesktop from "@/components/navbar/navbar_desktop";
import { HorizontalScroll } from '@/components';


export default function Home() {
  return (
    <div className="main-wrapper">
      <div className="fixed top-0 z-50 w-fit h-fit">
        <NavBarDesktop />
      </div>

      <div className="hero-section">
        <Hero />
      </div>

      {<HorizontalScroll />}

      <div className="final-section">
        <div className="w-screen h-screen flex items-center justify-center bg-amber-100">
          <h2 className="text-4xl font-bold text-gray-800">Next Section</h2>
        </div>
      </div>
    </div>
  );
}