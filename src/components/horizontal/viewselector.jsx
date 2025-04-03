'use client';

import { useState, useRef } from 'react';
import image1 from '@/assets/house_1.jpg';
import Image from 'next/image';

export default function HouseSelector() {
    const [menuOpen, setMenuOpen] = useState(false);
    const houseContainerRef = useRef(null);
    const houseFrameRef = useRef(null);

    const handleMenu = () => setMenuOpen(!menuOpen);
    const handleFullScreen = () => {
        if (houseContainerRef.current) {
            if (houseContainerRef.current.requestFullscreen) {
                houseContainerRef.current.requestFullscreen();
            } else if (houseContainerRef.current.webkitRequestFullscreen) { // For Safari
                houseContainerRef.current.webkitRequestFullscreen();
            } else if (houseContainerRef.current.msRequestFullscreen) { // For Internet Explorer
                houseContainerRef.current.msRequestFullscreen();
            }
        }
    };

    return (
        <div ref={houseContainerRef} className="w-screen h-screen relative overflow-hidden">
            <div className="absolute top-20 right-10 z-10 grid place-items-center p-2 bg-white shadow-md">
                <button 
                    onClick={handleMenu} 
                    className="cursor-pointer p-2 font-bold relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[10%] after:bg-red-600 after:transition-all hover:after:w-full">
                    Select House
                </button>
            </div>

            <div 
                className={`absolute top-36 right-10 w-[95vw] h-[70vh] bg-white z-20 grid place-items-center overflow-y-scroll p-5 ${menuOpen ? '' : 'hidden'}`}
            >
                <div className="relative z-40 mb-4">
                    <select className="cursor-pointer p-2 font-bold shadow-md outline-none">
                        <option>Rebero</option>
                        <option>Remera</option>
                        <option>Gikondo</option>
                        <option>Nyarungenge</option>
                    </select>
                </div>

                <div className="w-full grid gap-5 place-items-center">
                    {[...Array(5)].map((_, index) => (
                        <div key={index} className="relative w-[80vw] h-[500px] bg-black overflow-hidden mt-5">
                            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black/70 to-black/10 opacity-0 hover:opacity-100 transition-opacity duration-300 z-10"></div>
                            <Image src={image1} alt="House" className="w-full h-full object-cover" />
                            <button className="absolute bottom-5 left-1/2 transform -translate-x-1/2 -translate-y-full z-20 text-black bg-white px-4 py-2 rounded shadow-lg hover:bg-black hover:text-white">
                                Select Space
                            </button>
                        </div>
                    ))}
                </div>
            </div>

            <div className="absolute top-20 right-[200px] z-10 grid place-items-center p-2 bg-white shadow-md">
                <button 
                    onClick={handleFullScreen} 
                    className="cursor-pointer p-2 font-bold relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[10%] after:bg-red-600 after:transition-all hover:after:w-full">
                    Go Full Screen
                </button>
            </div>

            <iframe 
                ref={houseFrameRef} 
                className="absolute top-0 left-0 w-full h-full border-none"
                src='https://my.matterport.com/show/?m=DzwrQgyioMs'
            ></iframe>
        </div>
    );
}
