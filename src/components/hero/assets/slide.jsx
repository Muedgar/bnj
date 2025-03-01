'use client'; 

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import './slide.css';

import image1 from '@/assets/house_1.jpg';
import image2 from '@/assets/house_2.jpg';
import image3 from '@/assets/house_3.jpg';
import image4 from '@/assets/house_4.jpg';
import image5 from '@/assets/house_5.jpg';

const Slider = () => {
  const [currentProgressIndex, setCurrentProgressIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const intervalRef = useRef(null);
  const isFirstRender = useRef(true);

  // Function to check if viewport is mobile size
  const checkIsMobile = () => {
    setIsMobile(window.innerWidth <= 768);
  };

  // Cleanup function to clear any existing interval
  const clearProgressInterval = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  const startProgress = (index) => {
    // Clear any existing interval first
    clearProgressInterval();
    
    const views = document.querySelectorAll(".view");
    const progresses = document.querySelectorAll(".progress");
    
    if (!views.length || !progresses.length) return;

    // Remove active class from all views and add to current one
    views.forEach((view) => view.classList.remove("active"));
    views[index].classList.add("active");
    
    const progress = progresses[index];
    
    // Reset progress bar
    progress.style.display = "block";
    progress.style.width = "0%";
    
    let size = 0;
    
    // Store interval reference so we can clear it later
    intervalRef.current = setInterval(() => {
      size += 10;
      progress.style.width = `${size}%`;
      
      if (size > 100) {
        clearProgressInterval();
        progress.style.width = "100%";
        
        setTimeout(() => {
          progress.style.display = "none";
          progress.style.width = "0%";
          setCurrentProgressIndex((index + 1) % progresses.length);
        }, 1000); // Add delay before starting the next progress
      }
    }, 1000);
  };

  // Effect for responsive design
  useEffect(() => {
    // Initial check
    checkIsMobile();
    
    // Add event listener for resize
    window.addEventListener('resize', checkIsMobile);
    
    // Cleanup
    return () => {
      window.removeEventListener('resize', checkIsMobile);
    };
  }, []);

  // Effect for slider animation
  useEffect(() => {
    // Check if this is the first render after mount
    if (isFirstRender.current) {
      isFirstRender.current = false;
      // Small timeout to ensure DOM is fully rendered
      setTimeout(() => {
        startProgress(currentProgressIndex);
      }, 100);
    } else {
      startProgress(currentProgressIndex);
    }

    // Cleanup function for when component unmounts or before effect runs again
    return () => {
      clearProgressInterval();
    };
  }, [currentProgressIndex]);

  // Customize content based on screen size
  const getTextContainerClass = () => {
    return isMobile 
      ? 'absolute top-[30%] ml-4 flex flex-col justify-start z-20' 
      : 'absolute top-[30%] ml-20 flex flex-col justify-start z-20';
  };

  return (
    <div className="slider-container">
      <div className="slider">
        {/* Slide 1 */}
        <div className="view">
          <div className="slide-content">
            <div className='w-full h-full relative'>
              <Image src={image1} alt='house' className='w-full h-full object-cover animate-zoom' priority />
              <div className='absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20 pointer-events-none'></div>
              <div className='absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-black/20 pointer-events-none'></div>
              <div className={getTextContainerClass()}>
                <p className='text-white text-[.6em] font-light text-left'>Explore a virtual tour of</p>
                <p className='text-white text-[.7em] font-extrabold text-left'>French Broad Chocolate Factory</p>
                <p className='text-white text-[.45em] font-thin text-left'>Check out this sweet space and learn about chocolate-making!</p>
                <button onClick={() => console.log("viewing...")} className='text-left text-sm w-fit h-[35px] bg-white rounded-md p-2 mt-2 shadow shadow-[#3333335f] cursor-pointer hover:bg-gray-200 pointer-events-auto'>
                    View Space
                </button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Remaining slides follow the same pattern - applying responsive classes */}
        <div className="view">
          <div className="slide-content">
            <div className='w-full h-full relative'>
              <Image src={image2} alt='house' className='w-full h-full object-cover animate-zoom bg-no-repeat' />
              <div className='absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20 pointer-events-none'></div>
              <div className='absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-black/20 pointer-events-none'></div>
              <div className={getTextContainerClass()}>
                <p className='text-white text-[.6em] font-light text-left'>Explore a virtual tour of</p>
                <p className='text-white text-[.7em] font-extrabold text-left'>French Broad Chocolate Factory</p>
                <p className='text-white text-[.45em] font-thin text-left'>Check out this sweet space and learn about chocolate-making!</p>
                <button className='text-left text-sm w-fit h-[35px] bg-white rounded-md p-2 mt-2 shadow shadow-[#3333335f] cursor-pointer hover:bg-gray-200 pointer-events-auto'>
                    View Space
                </button>
              </div>
            </div>
          </div>
        </div>
        
        <div className="view">
          <div className="slide-content">
            <div className='w-full h-full relative'>
              <Image src={image3} alt='house' className='w-full h-full object-cover animate-zoom bg-no-repeat' />
              <div className='absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20 pointer-events-none'></div>
              <div className='absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-black/20 pointer-events-none'></div>
              <div className={getTextContainerClass()}>
                <p className='text-white text-[.6em] font-light text-left'>Explore a virtual tour of</p>
                <p className='text-white text-[.7em] font-extrabold text-left'>French Broad Chocolate Factory</p>
                <p className='text-white text-[.45em] font-thin text-left'>Check out this sweet space and learn about chocolate-making!</p>
                <button className='text-left text-sm w-fit h-[35px] bg-white rounded-md p-2 mt-2 shadow shadow-[#3333335f] cursor-pointer hover:bg-gray-200 pointer-events-auto'>
                    View Space
                </button>
              </div>
            </div>
          </div>
        </div>
        
        <div className="view">
          <div className="slide-content">
            <div className='w-full h-full relative'>
              <Image src={image4} alt='house' className='w-full h-full object-cover animate-zoom bg-no-repeat' />
              <div className='absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20 pointer-events-none'></div>
              <div className='absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-black/20 pointer-events-none'></div>
              <div className={getTextContainerClass()}>
                <p className='text-white text-[.6em] font-light text-left'>Explore a virtual tour of</p>
                <p className='text-white text-[.7em] font-extrabold text-left'>French Broad Chocolate Factory</p>
                <p className='text-white text-[.45em] font-thin text-left'>Check out this sweet space and learn about chocolate-making!</p>
                <button className='text-left text-sm w-fit h-[35px] bg-white rounded-md p-2 mt-2 shadow shadow-[#3333335f] cursor-pointer hover:bg-gray-200 pointer-events-auto'>
                    View Space
                </button>
              </div>
            </div>
          </div>
        </div>
        
        <div className="view">
          <div className="slide-content">
            <div className='w-full h-full relative'>
              <Image src={image5} alt='house' className='w-full h-full object-cover animate-zoom bg-no-repeat' />
              <div className='absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20 pointer-events-none'></div>
              <div className='absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-black/20 pointer-events-none'></div>
              <div className={getTextContainerClass()}>
                <p className='text-white text-[.6em] font-light text-left'>Explore a virtual tour of</p>
                <p className='text-white text-[.7em] font-extrabold text-left'>French Broad Chocolate Factory</p>
                <p className='text-white text-[.45em] font-thin text-left'>Check out this sweet space and learn about chocolate-making!</p>
                <button className='text-left text-sm w-fit h-[35px] bg-white rounded-md p-2 mt-2 shadow shadow-[#3333335f] cursor-pointer hover:bg-gray-200'>
                    View Space
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="controls">
        <div className="control">
          <div className="progress"></div>
        </div>
        <div className="control">
          <div className="progress"></div>
        </div>
        <div className="control">
          <div className="progress"></div>
        </div>
        <div className="control">
          <div className="progress"></div>
        </div>
        <div className="control">
          <div className="progress"></div>
        </div>
      </div>
    </div>
  );
};

export default Slider;