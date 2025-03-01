// HorizontalScroll component
'use client';

import { useEffect, useRef } from 'react';
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
export function HorizontalScroll() {
  const scrollContainer = useRef(null)
  const container = useRef(null)

  useEffect(() => {
    gsap.to(container.current, {
      x: '-300vw',
      ease: 'none',
      scrollTrigger: {
        trigger: scrollContainer.current,
        pin: true,
        scrub: 1,
        end: '+=300%'
      }
    })
  }, [])
    return (
      <div className="w-fit h-fit">
    <div ref={scrollContainer} className="scroll-container">
        <div ref={container} className="w-[400vw] h-screen flex flex-row flex-nowrap justify-center items-center">
            <div className="w-screen h-screen flex bg-blue-700">
              {/* it can be a slider representing a category */}
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
            <div className="w-screen h-screen flex bg-blue-700">
              {/* it can be a slider representing a category */}
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
            <div className="w-screen h-screen flex bg-blue-700">
              {/* it can be a slider representing a category */}
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
            <div className="w-screen h-screen flex bg-blue-700">
              {/* it can be a slider representing a category */}
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
        </div>
    </div>
    </div>
    );
  }