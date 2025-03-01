'use client';

import { useEffect, useRef } from 'react';
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

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
          <div className="w-1/2 p-6 pt-10 bg-white overflow-x-hidden overflow-y-hidden">
            <h2 className="text-3xl font-bold mb-4">Top-tier services to ensure learner success</h2>
            <p className="text-gray-700 mb-6">
              Reviewers provide timely and constructive feedback on your project submissions, highlighting areas of improvement and offering practical tips to enhance your work.
            </p>
            <p className="text-gray-700 mb-6">
              Reviewers provide timely and constructive feedback on your project submissions, highlighting areas of improvement and offering practical tips to enhance your work.
            </p>
            <p className="text-gray-700 mb-6">
              Reviewers provide timely and constructive feedback on your project submissions, highlighting areas of improvement and offering practical tips to enhance your work.
            </p>
            <ul className="space-y-4">
              {[1,2,3,4,5,6,7].map((d, k) => (
                <li key={k} className="flex items-start">
                  <span className="text-blue-600 text-xl mr-3">✔️</span>
                  <span className="text-gray-800">Get help from subject matter experts {d}</span>
                </li>
              ))}
            </ul>
            <button className='mt-10 text-left text-sm w-fit h-[35px] bg-black text-white rounded-md p-2 shadow shadow-[#3333335f] cursor-pointer hover:bg-slate-600'>
              Go Full Screen
            </button>
          </div>
          <div className="w-1/2 bg-black">
            <iframe className="w-full h-full" src='https://my.matterport.com/show/?m=DzwrQgyioMs' />
          </div>
        </div>

        {/* Section B */}
        <div 
          ref={sectionB} 
          className="w-screen h-screen absolute top-0 left-0 bg-green-300 z-30 flex"
        >
          <div className="w-1/2 p-6 pt-10 bg-white overflow-x-hidden overflow-y-hidden">
            <h2 className="text-3xl font-bold mb-4">Section B: Interactive Learning Experience</h2>
            <p className="text-gray-700 mb-6">
              Engage with interactive learning materials designed to enhance comprehension and retention. Our platform offers a diverse range of multimedia resources.
            </p>
            <p className="text-gray-700 mb-6">
              Practice with real-world scenarios and receive immediate feedback to accelerate your learning journey and build practical skills.
            </p>
            <p className="text-gray-700 mb-6">
              Connect with peers and instructors through collaborative projects that foster teamwork and communication skills essential for professional success.
            </p>
            <ul className="space-y-4">
              {[1,2,3,4,5,6,7].map((d, k) => (
                <li key={k} className="flex items-start">
                  <span className="text-blue-600 text-xl mr-3">✔️</span>
                  <span className="text-gray-800">Interactive learning modules {d}</span>
                </li>
              ))}
            </ul>
            <button className='mt-10 text-left text-sm w-fit h-[35px] bg-black text-white rounded-md p-2 shadow shadow-[#3333335f] cursor-pointer hover:bg-slate-600'>
              Go Full Screen
            </button>
          </div>
          <div className="w-1/2 bg-black">
            <iframe className="w-full h-full" src='https://my.matterport.com/show/?m=DzwrQgyioMs' />
          </div>
        </div>

        {/* Section C */}
        <div 
          ref={sectionC} 
          className="w-screen h-screen absolute top-0 left-0 bg-green-700 z-20 flex"
        >
          <div className="w-1/2 p-6 pt-10 bg-white overflow-x-hidden overflow-y-hidden">
            <h2 className="text-3xl font-bold mb-4">Section C: Advanced Career Preparation</h2>
            <p className="text-gray-700 mb-6">
              Prepare for your career with industry-aligned projects and credentials recognized by top employers across multiple sectors.
            </p>
            <p className="text-gray-700 mb-6">
              Access career services including resume reviews, interview preparation, and job placement assistance to support your professional goals.
            </p>
            <p className="text-gray-700 mb-6">
              Build a professional portfolio showcasing your skills and achievements to stand out in the competitive job market.
            </p>
            <ul className="space-y-4">
              {[1,2,3,4,5,6,7].map((d, k) => (
                <li key={k} className="flex items-start">
                  <span className="text-blue-600 text-xl mr-3">✔️</span>
                  <span className="text-gray-800">Career advancement opportunities {d}</span>
                </li>
              ))}
            </ul>
            <button className='mt-10 text-left text-sm w-fit h-[35px] bg-black text-white rounded-md p-2 shadow shadow-[#3333335f] cursor-pointer hover:bg-slate-600'>
              Go Full Screen
            </button>
          </div>
          <div className="w-1/2 bg-black">
            <iframe className="w-full h-full" src='https://my.matterport.com/show/?m=DzwrQgyioMs' />
          </div>
        </div>

        {/* Section D */}
        <div 
          ref={sectionD} 
          className="w-screen h-screen absolute top-0 left-0 bg-amber-100 z-10 flex"
        >
          <div className="w-1/2 p-6 pt-10 bg-white overflow-x-hidden overflow-y-hidden">
            <h2 className="text-3xl font-bold mb-4">Section D: Community & Support</h2>
            <p className="text-gray-700 mb-6">
              Join a global community of learners and professionals who share knowledge, experiences, and opportunities for growth and collaboration.
            </p>
            <p className="text-gray-700 mb-6">
              Access 24/7 technical and academic support to resolve issues quickly and keep your learning journey on track without interruptions.
            </p>
            <p className="text-gray-700 mb-6">
              Participate in regular webinars, workshops, and networking events to expand your professional connections and stay updated with industry trends.
            </p>
            <ul className="space-y-4">
              {[1,2,3,4,5,6,7].map((d, k) => (
                <li key={k} className="flex items-start">
                  <span className="text-blue-600 text-xl mr-3">✔️</span>
                  <span className="text-gray-800">Community support resources {d}</span>
                </li>
              ))}
            </ul>
            <button className='mt-10 text-left text-sm w-fit h-[35px] bg-black text-white rounded-md p-2 shadow shadow-[#3333335f] cursor-pointer hover:bg-slate-600'>
              Go Full Screen
            </button>
          </div>
          <div className="w-1/2 bg-black">
            <iframe className="w-full h-full" src='https://my.matterport.com/show/?m=DzwrQgyioMs' />
          </div>
        </div>
      </div>
  </div>
  );
}