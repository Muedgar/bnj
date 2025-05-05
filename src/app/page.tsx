'use client';

import Hero from "@/components/hero/hero";
import PanelLayout from "@/components/layouts/panel";
import MenuGrid from "@/components/menugrid/menugrid";

export default function Home() {
  return (
    <PanelLayout>

      <section className="hero-section">
        <Hero />
      </section>

      <section className="final-section">
      <MenuGrid />
      </section>
    </PanelLayout>
  );
}