'use client'
import React, { useState } from 'react';
import { getMenu } from '@/lib'; // Adjust the import path as needed
import Link from 'next/link';

const MenuGrid = () => {
  const [activeCategory, setActiveCategory] = useState('Houses');
  const menuData = getMenu();
  
  // Categories for the filter bar based on your data
  const categories = [
    { id: 'Houses', label: 'HOUSES' },
    { id: 'Cars', label: 'CARS' }
  ];
  

  return (
    <div id="spaces" className="max-w-screen-xl mx-auto p-4">
      {/* Category Pills */}
      <div className="flex flex-wrap gap-2 mb-8 overflow-x-auto py-2">
        {categories.map((category) => (
          <button
            key={category.id}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              activeCategory === category.id
                ? "bg-gray-800 text-white"
                : "bg-white text-gray-700 border border-gray-300 hover:bg-gray-100"
            }`}
            onClick={() => setActiveCategory(category.id)}
          >
            {category.label}
          </button>
        ))}
      </div>

      {/* Main Content - For each top-level category in the menu */}
      {menuData.map((category) => (
        <div key={category.name} className="mb-12">
          {/* Second Section - Virtual Tour Section */}
          {category.name === activeCategory && (
            <div>
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold">Stroll through {category.name}</h2>
              </div>
              
              <p className="text-gray-600 mb-6">
                Bring the beauty of property listings to you with 3D virtual tours.
              </p>
              
              {/* Virtual Tour Gallery Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {category.menu.flatMap(subcategory => 
                  subcategory.menu.map(item => (
                    <Link
                      href={`${item.href}`}
                      key={`tour-${item.id}`} 
                      className="relative rounded-lg overflow-hidden bg-white shadow-md cursor-pointer hover:shadow-lg transform transition-all duration-200 hover:scale-105"
                    >
                      <div className="relative h-48 overflow-hidden">
                        <img 
                          src={item.media?.images[0] || item.image || "/api/placeholder/400/300"} 
                          alt={`Tour of ${item.name}`}
                          className="w-full h-full object-cover" 
                        />
                        
                        {/* Overlay with Buttons - Only visible on hover */}
                        <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 hover:opacity-100 transition-opacity flex justify-end p-4 space-x-2">
                          
                        </div>
                        
                        {/* Matterport-like label - Only visible on hover */}
                        <div className="absolute bottom-0 left-0 right-0 bg-white bg-opacity-80 p-2 opacity-0 hover:opacity-100 transition-opacity z-10">
                          <div className="flex items-center gap-2">
                            <span className="text-gray-700">
                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                                <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                                <polyline points="3.29 7 12 12 20.71 7" />
                                <line x1="12" y1="22" x2="12" y2="12" />
                              </svg>
                            </span>
                            <span className="text-sm font-medium">View space</span>
                          </div>
                        </div>
                      </div>
                      
                      {/* Item Title */}
                      <div className="p-3 bg-white">
                        <h3 className="text-xl font-bold text-red-500">{item.name}</h3>
                        <p className="text-sm text-gray-600 mt-1">{item.summary || item.description}</p>
                      </div>
                    </Link>
                  ))
                )}
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default MenuGrid;