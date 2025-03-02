'use client';

import { useEffect, useRef } from 'react';
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import HouseSelector from './viewselector';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

export function HorizontalScroll() {
  // Create refs for our elements
  const scrollContainer = useRef(null);
  const sectionA = useRef(null);
  const sectionB = useRef(null);
  const sectionC = useRef(null);
  const sectionD = useRef(null);

  useEffect(() => {
    // Clear any existing animations/ScrollTriggers when component unmounts
    return () => {
      ScrollTrigger.getAll().forEach(st => st.kill());
      gsap.killTweensOf([sectionA.current, sectionB.current, sectionC.current, sectionD.current]);
    };
  }, []);

  useEffect(() => {
    // Make sure all our refs are available
    if (!scrollContainer.current || !sectionA.current || !sectionB.current || 
        !sectionC.current || !sectionD.current) return;

    // Set initial positions for animations
    gsap.set(sectionB.current, { x: '-100%' }); // Start B offscreen from left
    gsap.set(sectionC.current, { y: '-100%' }); // Start C offscreen from top
    gsap.set(sectionD.current, { x: '-100%' }); // Start D offscreen from left

    // Create the animation timeline with the same sequence as the HTML example
    const tl = gsap.timeline({
      defaults: {
        ease: "power1.inOut",
        duration: 1
      }
    });

    // Create the same animation sequence
    tl.to(sectionA.current, { opacity: 1 }) // Starting view
      .to(sectionB.current, { x: "0%" }, 0) // B comes in from left at position 0
      .to(sectionA.current, { x: "-100%" }, 1) // A exits to left at position 1
      .to(sectionC.current, { y: "0%" }, 1.5) // C comes in from top at position 1.5
      .to(sectionB.current, { y: "-100%" }, 2.5) // B exits upward at position 2.5
      .to(sectionD.current, { x: "0%" }, 2.5) // D comes in from left at position 2.5
      .to(sectionC.current, { x: "-100%" }, 3.5); // C exits to left at position 3.5

    // Create the ScrollTrigger
    ScrollTrigger.create({
      animation: tl,
      trigger: scrollContainer.current,
      start: 'top top',
      end: '+=300%',
      scrub: 0.5,
      pin: true,
      anticipatePin: 1,
      fastScrollEnd: true,
      preventOverlaps: true
    });

    // Optimize performance when page isn't visible
    const visibilityHandler = () => {
      if (document.hidden) {
        ScrollTrigger.getAll().forEach(st => st.disable());
      } else {
        ScrollTrigger.getAll().forEach(st => st.enable());
      }
    };

    document.addEventListener('visibilitychange', visibilityHandler);

    // Clean up event listener when component unmounts
    return () => {
      document.removeEventListener('visibilitychange', visibilityHandler);
    };
  }, []);

  return (
    <div className="w-fit h-fit">
      <div ref={scrollContainer} className="w-screen h-screen relative overflow-hidden">
        {/* Section A */}
        <div 
          ref={sectionA} 
          className="w-screen h-screen absolute top-0 left-0 bg-purple-700 z-40 flex"
        >
          <HouseSelector />
        </div>

        {/* Section B */}
        <div 
          ref={sectionB} 
          className="w-screen h-screen absolute top-0 left-0 bg-green-300 z-30 flex"
        >
          <HouseSelector />
        </div>

        {/* Section C */}
        <div 
          ref={sectionC} 
          className="w-screen h-screen absolute top-0 left-0 bg-green-700 z-20 flex"
        >
          <HouseSelector />
        </div>

        {/* Section D */}
        <div 
          ref={sectionD} 
          className="w-screen h-screen absolute top-0 left-0 bg-amber-100 z-10 flex"
        >
          <HouseSelector />
        </div>
      </div>
  </div>
  );
}
