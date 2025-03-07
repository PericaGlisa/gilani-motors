
import React, { useState } from "react";
import LogoCard from "./LogoCard";
import Lightbox from "./Lightbox";
import { Logo } from "@/types/logo";

interface CategorySectionProps {
  title: string;
  description: string;
  logos: Logo[];
  favorites: number[];
  onToggleFavorite: (id: number) => void;
}

const CategorySection: React.FC<CategorySectionProps> = ({
  title,
  description,
  logos,
  favorites,
  onToggleFavorite
}) => {
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

  return (
    <section className="mb-12 md:mb-20">
      <div className="category-header mb-8 md:mb-10 text-center">
        <h2 className="text-2xl md:text-3xl font-semibold mb-4 md:mb-6">{title}</h2>
        <p className="text-gray-600 dark:text-gray-400 max-w-3xl mx-auto text-sm md:text-base mt-2">{description}</p>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
        {logos.map((logo) => (
          <LogoCard
            key={logo.id}
            id={logo.id}
            name={logo.name}
            description={logo.description}
            imagePath={logo.imagePath}
            onFavorite={onToggleFavorite}
            isFavorite={favorites.includes(logo.id)}
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

export default CategorySection;
