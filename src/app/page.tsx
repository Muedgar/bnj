'use client';

import Hero from "@/components/hero/hero";
import MenuGrid from "@/components/menugrid/menugrid";
import NavBarDesktop from "@/components/navbar/navbar_desktop";

export default function Home() {
  return (
    <div className="main-wrapper">
      <div className="fixed top-0 z-50 w-fit h-fit">
        <NavBarDesktop />
      </div>

      <div className="hero-section">
        <Hero />
      </div>

      <div className="final-section">
      <MenuGrid />
      </div>
    </div>
  );
}