'use client';

import Link from 'next/link';
import Cube from '../navbar/assets/cube';
import { getMenu } from '@/lib';
import { ArrowRight } from 'lucide-react';

const Footer = () => {
     const menuData = getMenu();
    
      console.log(menuData[0].menu[0].menu[0])
    
      const footerContent = [
        {
          id: menuData[0].menu[1].menu[0].id,
          title: menuData[0].menu[1].menu[0].name,
        },
        {
          id: menuData[0].menu[2].menu[0].id,
          title: menuData[0].menu[2].menu[0].name,
        },
        {
          id: menuData[0].menu[3].menu[0].id,
          title: menuData[0].menu[3].menu[0].name,
        },
        {
          id: menuData[1].menu[0].menu[0].id,
          title: menuData[1].menu[0].menu[0].name,
        },
      ];
    
  return (
    <footer className="bg-black text-white py-16 px-4">
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-8">
        {/* Brand & Description */}
        <div className="col-span-2 flex flex-col gap-4">
          <div className="flex items-center gap-2">
            <Link href={'/'} className="flex flex-row justify-start items-center mt-[-10px] cursor-pointer">
                <div className='mt-[-5px]'>
                    <Cube />
                </div>
                <div className='w-fit h-fit flex flex-col'>
                    <p className='text-white text-xs lg:text-lg font-extrabold'>Rwanda 3D virtual tours</p>
                    <div className='flex justify-start items-end'>
                        <p className='text-black text-[11px] font-bold bg-white p-[1px] pl-2 pr-2 w-fit leading-1'>DISCOVER</p>
                    </div>                    
                </div>
            </Link>
          </div>
          <p className="text-sm text-gray-300">
            Explore houses and cars in Rwanda through immersive 3D virtual tours. Find your next home or vehicle without leaving your screen.
          </p>
          {/* <div className="flex gap-4 mt-2">
            <Link href="#"><Facebook className="w-5 h-5 hover:text-gray-400" /></Link>
            <Link href="#"><Twitter className="w-5 h-5 hover:text-gray-400" /></Link>
            <Link href="#"><Linkedin className="w-5 h-5 hover:text-gray-400" /></Link>
            <Link href="#"><Instagram className="w-5 h-5 hover:text-gray-400" /></Link>
          </div> */}
        </div>

        {/* Column 1 */}
        <div>
          <h4 className="text-sm font-semibold mb-4">Spaces</h4>
          <ul className="space-y-2 text-sm text-gray-300">
            {footerContent.map((footerItem, index) => (
                <li className='underline' key={index}><Link className='flex' href={`/item/${footerItem.id}`}><ArrowRight /> {footerItem.title}</Link></li>
            ))}
          </ul>
        </div>

        
      </div>

      {/* Bottom row */}
      <div className="max-w-screen-xl mx-auto mt-12 border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
        <p>©2025 Rwanda 3D Virtual Tours, Inc. All rights reserved.</p>
        
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center shadow hover:shadow-lg"
        >
          ↑
        </button>
      </div>
    </footer>
  );
};

export default Footer;
