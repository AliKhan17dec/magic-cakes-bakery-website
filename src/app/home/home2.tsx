'use client';

import { useState, useEffect } from 'react';

const CookieBiscottiSection = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  
  // Array of background images
  const backgroundImages = [
    '/homebg/1760084831.png',
    '/homebg/1760084321.png',
    '/homebg/1760084205.png'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isTransitioning) {
        handleImageChange((currentImageIndex + 1) % backgroundImages.length);
      }
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, [currentImageIndex, isTransitioning]); // Add dependencies

  const handleImageChange = (newIndex: number) => {
    if (isTransitioning) return;
    
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentImageIndex(newIndex);
      setIsTransitioning(false);
    }, 1000);
  };

  const goToPrevious = () => {
    const newIndex = currentImageIndex === 0 ? backgroundImages.length - 1 : currentImageIndex - 1;
    handleImageChange(newIndex);
  };

  const goToNext = () => {
    const newIndex = (currentImageIndex + 1) % backgroundImages.length;
    handleImageChange(newIndex);
  };

  const goToSlide = (index: number) => {
    if (index === currentImageIndex) return;
    handleImageChange(index);
  };

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Single Background Image Container */}
      <div className="absolute inset-0">
        <div 
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
            isTransitioning ? 'opacity-0' : 'opacity-100'
          }`}
          style={{ backgroundImage: `url(${backgroundImages[currentImageIndex]})` }}
        />
      </div>
      
      {/* Text Box */}
      <div className="absolute left-10 top-1/2 transform -translate-y-1/2 w-96 p-8 bg-white text-black">
        <h2 className="text-xl font-bold mb-2">Freshly Baked Delights</h2>
        <div className="w-8 h-1 bg-black mb-4"></div>
        <p className="mb-6">
          Perfect for every moment — enjoy with your favorite drink or share the joy with someone special.
        </p>
        <button className="px-6 py-3 bg-black text-white font-medium hover:bg-gray-800 transition-colors">
          SHOP NOW
        </button>
      </div>

      {/* Navigation Dots */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {backgroundImages.map((_, index) => (
          <button 
            key={index}
            className={`w-3 h-3 rounded-full cursor-pointer transition-colors ${
              index === currentImageIndex ? 'bg-black' : 'bg-white'
            }`}
            onClick={() => goToSlide(index)}
            disabled={isTransitioning}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Arrow Navigation Buttons */}
      {/* <div className="absolute bottom-8 right-10 flex space-x-2">
        <button 
          className="w-10 h-10 bg-black text-white flex items-center justify-center hover:bg-gray-800 transition-colors disabled:opacity-50"
          onClick={goToPrevious}
          disabled={isTransitioning}
          aria-label="Previous image"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
          </svg>
        </button>
        <button 
          className="w-10 h-10 bg-black text-white flex items-center justify-center hover:bg-gray-800 transition-colors disabled:opacity-50"
          onClick={goToNext}
          disabled={isTransitioning}
          aria-label="Next image"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
          </svg>
        </button>
      </div> */}
    </div>
  );
};

export default CookieBiscottiSection;