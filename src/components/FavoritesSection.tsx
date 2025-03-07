
import React, { useState } from "react";
import { Logo } from "@/types/logo";
import LogoCard from "./LogoCard";
import Lightbox from "./Lightbox";

interface FavoritesSectionProps {
  favorites: number[];
  allLogos: Logo[];
  onToggleFavorite: (id: number) => void;
}

const FavoritesSection: React.FC<FavoritesSectionProps> = ({
  favorites,
  allLogos,
  onToggleFavorite
}) => {
  const favoriteLogos = allLogos.filter(logo => favorites.includes(logo.id));
  
  const [lightbox, setLightbox] = useState<{
    isOpen: boolean;
    imagePath: string;
    logoName: string;
  }>({
    isOpen: false,
    imagePath: "",
    logoName: ""
  });

  const openLightbox = (imagePath: string, logoName: string) => {
    setLightbox({
      isOpen: true,
      imagePath,
      logoName
    });
  };

  const closeLightbox = () => {
    setLightbox({
      ...lightbox,
      isOpen: false
    });
  };
  
  if (favorites.length === 0) {
    return null;
  }
  
  return (
    <section className="mb-12 md:mb-20 bg-luxury-cream/30 dark:bg-luxury-gold/5 py-6 md:py-10 px-4 md:px-6 rounded-lg">
      <div className="category-header mb-8 md:mb-10 text-center">
        <h2 className="text-2xl md:text-3xl font-semibold mb-4 md:mb-6">Your Selections</h2>
        <p className="text-gray-600 dark:text-gray-400 max-w-3xl mx-auto text-sm md:text-base mt-2">
          You've selected {favorites.length} logo design{favorites.length !== 1 ? 's' : ''} as your favorites.
        </p>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
        {favoriteLogos.map((logo) => (
          <LogoCard
            key={logo.id}
            id={logo.id}
            name={logo.name}
            description={logo.description}
            imagePath={logo.imagePath}
            onFavorite={onToggleFavorite}
            isFavorite={true}
            onImageClick={() => openLightbox(logo.imagePath, logo.name)}
          />
        ))}
      </div>

      <Lightbox
        isOpen={lightbox.isOpen}
        imagePath={lightbox.imagePath}
        logoName={lightbox.logoName}
        onClose={closeLightbox}
      />
    </section>
  );
};

export default FavoritesSection;
