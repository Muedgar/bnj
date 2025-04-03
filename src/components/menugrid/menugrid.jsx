import React, { useState } from 'react';
import * as Tooltip from '@radix-ui/react-tooltip';
import { Folder, Home, Heart, Plus, Share, Grid } from 'lucide-react';
import { getMenu } from '@/lib'; // Adjust the import path as needed

const MenuGrid = () => {
  const [activeCategory, setActiveCategory] = useState('houses');
  const menuData = getMenu();
  
  // Categories for the filter bar based on your data
  const categories = [
    { id: 'featured', label: 'FEATURED' },
    { id: 'houses', label: 'HOUSES' },
    { id: 'cars', label: 'CARS' },
    { id: 'airbnb', label: 'AIRBNB' },
    { id: 'vrbo', label: 'VRBO' },
    { id: 'luxury', label: 'LUXURY' },
    { id: 'travel', label: 'TRAVEL & HOSPITALITY' },
    { id: 'europe', label: 'EUROPE' },
    { id: 'design', label: 'DESIGN' }
  ];
  
  // No custom styles needed as we're using standard Tailwind classes

  const handleCardClick = (href) => {
    if (href) {
      // In a real application, you would use router.push(href) or similar
      console.log(`Navigating to: ${href}`);
      window.location.href = href;
    }
  };
  
  const handleViewAll = (category) => {
    // Navigate to category view all page
    console.log(`View all for: ${category}`);
    window.location.href = category.href;
  };

  return (
    <div className="max-w-screen-xl mx-auto p-4">
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
        <button className="flex items-center justify-center w-8 h-8 rounded-full bg-white border border-gray-300 text-gray-700">
          <span>→</span>
        </button>
      </div>

      {/* Main Content - For each top-level category in the menu */}
      {menuData.map((category) => (
        <div key={category.name} className="mb-12">
          {/* Section Header with Title and Actions */}
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold">{category.name}</h2>
            <div className="flex items-center gap-4">
              <button 
                className="flex items-center gap-1 text-gray-700"
                onClick={() => handleViewAll(category)}
              >
                <span>View all</span>
                <Grid className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {category.menu.flatMap(subcategory => 
              subcategory.menu.map(item => (
                <div 
                  key={item.id} 
                  className="relative rounded-lg overflow-hidden bg-white shadow-md cursor-pointer hover:shadow-lg transform transition-all duration-200 hover:scale-105"
                  onClick={() => handleCardClick(item.href)}
                >
                  <Tooltip.Provider>
                    {/* Image Container */}
                    <div className="relative h-48 overflow-hidden">
                      <img 
                        src={item.image || "/api/placeholder/400/300"} 
                        alt={item.name} 
                        className="w-full h-full object-cover"
                      />
                      
                      {/* Overlay with Buttons */}
                      <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 hover:opacity-100 transition-opacity flex justify-end p-4 space-x-2">
                        <Tooltip.Root>
                          <Tooltip.Trigger asChild>
                            <button 
                              className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center"
                              onClick={(e) => {
                                e.stopPropagation(); // Prevent the card click
                                console.log("Add to collection");
                              }}
                            >
                              <Plus className="w-5 h-5 text-gray-700" />
                            </button>
                          </Tooltip.Trigger>
                          <Tooltip.Portal>
                            <Tooltip.Content className="px-2 py-1 bg-gray-800 text-white text-xs rounded">
                              Add to collection
                              <Tooltip.Arrow className="fill-gray-800" />
                            </Tooltip.Content>
                          </Tooltip.Portal>
                        </Tooltip.Root>

                        <Tooltip.Root>
                          <Tooltip.Trigger asChild>
                            <button 
                              className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center"
                              onClick={(e) => {
                                e.stopPropagation(); // Prevent the card click
                                console.log("Add to favorites");
                              }}
                            >
                              <Heart className="w-5 h-5 text-gray-700" />
                            </button>
                          </Tooltip.Trigger>
                          <Tooltip.Portal>
                            <Tooltip.Content className="px-2 py-1 bg-gray-800 text-white text-xs rounded">
                              Favorite
                              <Tooltip.Arrow className="fill-gray-800" />
                            </Tooltip.Content>
                          </Tooltip.Portal>
                        </Tooltip.Root>
                      </div>
                    </div>
                  </Tooltip.Provider>
                  
                  {/* Item Title and Description */}
                  <div className="p-3">
                    <h3 className="text-xl font-bold text-red-500">{item.name}</h3>
                    <p className="text-sm text-gray-600 mt-1">{item.description}</p>
                    <div className="mt-2 text-xs text-gray-500">
                      <p>Contact: {item.contactName}</p>
                      <p>Location: {item.location?.city}, {item.location?.province}</p>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
          
          {/* Second Section - Virtual Tour Section */}
          {category.name === "Houses" && (
            <div className="mt-16">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold">Stroll through {category.name}</h2>
                <div className="flex items-center gap-4">
                  <button 
                    className="flex items-center gap-1 text-gray-700"
                    onClick={() => handleViewAll(category)}
                  >
                    <span>View all</span>
                    <Grid className="w-4 h-4" />
                  </button>
                </div>
              </div>
              
              <p className="text-gray-600 mb-6">
                Bring the beauty of property listings to you with 3D virtual tours. Enthusiasts everywhere can virtually visit 
                stunning properties and explore interiors from all over the world. Click through to experience the spaces...
              </p>
              
              {/* Virtual Tour Gallery Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {category.menu.flatMap(subcategory => 
                  subcategory.menu.map(item => (
                    <div 
                      key={`tour-${item.id}`} 
                      className="relative rounded-lg overflow-hidden bg-white shadow-md cursor-pointer hover:shadow-lg transform transition-all duration-200 hover:scale-105"
                      onClick={() => handleCardClick(item.spaceUrl || item.href)}
                    >
                      <div className="relative h-48 overflow-hidden">
                        <img 
                          src={item.media?.images[0] || item.image || "/api/placeholder/400/300"} 
                          alt={`Tour of ${item.name}`}
                          className="w-full h-full object-cover" 
                        />
                        
                        {/* Overlay with Buttons - Only visible on hover */}
                        <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 hover:opacity-100 transition-opacity flex justify-end p-4 space-x-2">
                          <button 
                            className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center"
                            onClick={(e) => {
                              e.stopPropagation(); // Prevent the card click
                              console.log("Add to collection");
                            }}
                          >
                            <Plus className="w-5 h-5 text-gray-700" />
                          </button>
                          <button 
                            className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center"
                            onClick={(e) => {
                              e.stopPropagation(); // Prevent the card click
                              console.log("Add to favorites");
                            }}
                          >
                            <Heart className="w-5 h-5 text-gray-700" />
                          </button>
                        </div>
                        
                        {/* Matterport-like label - Only visible on hover */}
                        <div className="absolute bottom-0 left-0 right-0 bg-white bg-opacity-80 p-2 opacity-0 hover:opacity-100 transition-opacity">
                          <div className="flex items-center gap-2">
                            <span className="text-gray-700">
                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                                <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                                <polyline points="3.29 7 12 12 20.71 7" />
                                <line x1="12" y1="22" x2="12" y2="12" />
                              </svg>
                            </span>
                            <span className="text-sm font-medium">Matterport Gallery</span>
                          </div>
                        </div>
                      </div>
                      
                      {/* Item Title */}
                      <div className="p-3 bg-white">
                        <h3 className="text-xl font-bold text-red-500">{item.name}</h3>
                        <p className="text-sm text-gray-600 mt-1">{item.summary || item.description}</p>
                      </div>
                    </div>
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