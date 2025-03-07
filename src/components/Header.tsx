
import React from "react";

const Header: React.FC = () => {
  return (
    <header className="relative text-center overflow-hidden">
      {/* Hero Image */}
      <div className="relative w-full h-[280px] sm:h-[400px] md:h-[500px] lg:h-[600px]">
        <img 
          src="/lovable-uploads/0712fabe-93b7-4a20-83ef-60346101a05a.png" 
          alt="Gilani Motors Luxury Car" 
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-black/80"></div>
      </div>
      
      {/* Text Overlay */}
      <div className="absolute bottom-0 left-0 right-0 text-center p-6 md:p-10">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-luxury-gold to-luxury-champagne dark:from-luxury-gold dark:to-luxury-silver">
              Gilani Motors
            </span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-white dark:text-gray-200 max-w-3xl mx-auto mb-6 md:mb-8">
            Brand Identity Collection
          </p>
          <div className="h-px w-24 bg-luxury-gold mx-auto"></div>
        </div>
      </div>
    </header>
  );
};

export default Header;
