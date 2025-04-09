'use client'; 

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import './slide.css';

import image1 from '@/assets/house_1.jpg';
import image2 from '@/assets/house_2.jpg';
import image3 from '@/assets/house_3.jpg';
import image4 from '@/assets/house_4.jpg';
import image5 from '@/assets/house_5.jpg';
import { useRouter } from 'next/navigation';

const Slider = () => {
  const [currentProgressIndex, setCurrentProgressIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const intervalRef = useRef(null);
  const isFirstRender = useRef(true);
  const router = useRouter();

  const checkIsMobile = () => {
    setIsMobile(window.innerWidth <= 768);
  };

  const clearProgressInterval = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  const startProgress = (index) => {
    clearProgressInterval();
  
    const views = document.querySelectorAll(".view");
    const progresses = document.querySelectorAll(".progress");
  
    if (!views.length || !progresses.length) return;
  
    // Reset all views and progress bars
    views.forEach((view) => view.classList.remove("active"));
    progresses.forEach((progress) => {
      progress.style.display = "none";
      progress.style.width = "0%";
    });
  
    // Set active view
    views[index].classList.add("active");
  
    // Start progress on current
    const progress = progresses[index];
    progress.style.display = "block";
    progress.style.width = "0%";
  
    let size = 0;
  
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
        }, 1000);
      }
    }, 1000);
  };
  

  useEffect(() => {
    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);
    return () => window.removeEventListener('resize', checkIsMobile);
  }, []);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      setTimeout(() => {
        startProgress(currentProgressIndex);
      }, 100);
    } else {
      startProgress(currentProgressIndex);
    }

    return () => {
      clearProgressInterval();
    };
  }, [currentProgressIndex]);

  const getTextContainerClass = () => {
    return isMobile 
      ? 'absolute top-[30%] ml-4 flex flex-col justify-start z-20' 
      : 'absolute top-[30%] ml-20 flex flex-col justify-start z-20';
  };

  const handleViewSpaces = (e) => {
    e.preventDefault();
    router.push("/#spaces");
  };

  const slidesContent = [
    {
      title: 'Kigali Homes',
      subtitle: 'Discover modern houses in the heart of Kigali',
    },
    {
      title: 'Luxury Villas',
      subtitle: 'Live comfortably in Rwanda’s peaceful suburbs',
    },
    {
      title: 'Affordable Rentals',
      subtitle: 'Find quality houses within your budget',
    },
    {
      title: 'Cars for Sale',
      subtitle: 'Explore the best car deals in Rwanda today',
    },
    {
      title: 'Drive Rwanda',
      subtitle: 'From compact to SUV—your ideal ride is here',
    },
  ];

  return (
    <div className="slider-container">
      <div className="slider">
        {slidesContent.map((slide, index) => (
          <div className="view" key={index}>
            <div className="slide-content">
              <div className='w-full h-full relative'>
                <Image 
                  src={[image1, image2, image3, image4, image5][index]} 
                  alt='slide image' 
                  className='w-full h-full object-cover animate-zoom bg-no-repeat' 
                  priority={index === 0}
                />
                <div className='absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20 pointer-events-none'></div>
                <div className='absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-black/20 pointer-events-none'></div>
                <div className={getTextContainerClass()}>
                  <p className='text-white text-[.6em] font-light text-left'>Explore a virtual tour of</p>
                  <p className='text-white text-[.7em] font-extrabold text-left'>{slide.title}</p>
                  <p className='text-white text-[.45em] font-thin text-left'>{slide.subtitle}</p>
                  <button 
                    onClick={handleViewSpaces} 
                    className='text-left text-sm w-fit h-[35px] bg-white rounded-md p-2 mt-2 shadow shadow-[#3333335f] cursor-pointer hover:bg-gray-200 pointer-events-auto'>
                    View Listings
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="controls">
        {slidesContent.map((_, index) => (
  <div 
    className="control" 
    key={index}
    onClick={() => {
      clearProgressInterval(); // Stop the current progress animation
      setCurrentProgressIndex(index); // Change to clicked slide
    }}
    style={{ cursor: 'pointer' }}
  >
    <div className="progress"></div>
  </div>
))}

      </div>
    </div>
  );
};

export default Slider;
