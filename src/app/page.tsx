'use client';

import Hero from "@/components/hero/hero";
import PanelLayout from "@/components/layouts/panel";
import MenuGrid from "@/components/menugrid/menugrid";

export default function Home() {
  return (
    <PanelLayout>

      <div className="hero-section">
        <Hero />
      </div>

      <div className="final-section">
      <MenuGrid />
      </div>
    </PanelLayout>
  );
}