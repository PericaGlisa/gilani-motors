
import React, { useEffect } from "react";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";

interface LightboxProps {
  isOpen: boolean;
  imagePath: string;
  logoName: string;
  onClose: () => void;
}

const Lightbox: React.FC<LightboxProps> = ({
  isOpen,
  imagePath,
  logoName,
  onClose
}) => {
  // Prevent body scrolling when lightbox is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm transition-all duration-300 p-4">
      <div className="relative w-full max-w-4xl animate-fade-in">
        <Button 
          variant="outline" 
          size="icon" 
          className="absolute right-2 top-2 md:right-6 md:top-6 z-10 bg-background/80 backdrop-blur-sm"
          onClick={onClose}
        >
          <X className="h-4 w-4 md:h-5 md:w-5" />
        </Button>
        
        <div className="bg-card p-4 md:p-8 rounded-lg shadow-xl">
          <h2 className="text-xl md:text-2xl font-serif mb-4 md:mb-6 text-center">{logoName}</h2>
          <div className="bg-neutral-100 dark:bg-neutral-800 rounded-md flex items-center justify-center p-4 md:p-6 mb-2 md:mb-4">
            <img
              src={imagePath}
              alt={`${logoName} enlarged logo`}
              className="max-h-[50vh] md:max-h-[60vh] object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Lightbox;
