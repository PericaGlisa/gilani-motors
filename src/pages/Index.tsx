
import React, { useState } from "react";
import { useToast } from "@/components/ui/use-toast";
import { logos, logoCategories } from "@/data/logos";
import CategorySection from "@/components/CategorySection";
import Header from "@/components/Header";
import FavoritesSection from "@/components/FavoritesSection";
import ThemeToggle from "@/components/ThemeToggle";

const Index = () => {
  const [favorites, setFavorites] = useState<number[]>([]);
  const { toast } = useToast();

  const handleToggleFavorite = (id: number) => {
    setFavorites(prev => {
      if (prev.includes(id)) {
        toast({
          title: "Removed from favorites",
          description: "The logo has been removed from your selections.",
        });
        return prev.filter(itemId => itemId !== id);
      } else {
        toast({
          title: "Added to favorites",
          description: "The logo has been added to your selections.",
        });
        return [...prev, id];
      }
    });
  };

  return (
    <div className="min-h-screen dark:bg-luxury-charcoal dark:text-gray-100 transition-colors duration-300">
      <ThemeToggle />
      <Header />

      <main className="container mx-auto px-4 py-8 md:py-12">
        <FavoritesSection 
          favorites={favorites} 
          allLogos={logos} 
          onToggleFavorite={handleToggleFavorite} 
        />

        <div className="space-y-8 md:space-y-12">
          {logoCategories.map((category) => (
            <CategorySection
              key={category.id}
              title={category.title}
              description={category.description}
              logos={logos.filter(logo => logo.category === category.title)}
              favorites={favorites}
              onToggleFavorite={handleToggleFavorite}
            />
          ))}
        </div>
      </main>

      <footer className="py-8 md:py-10 text-center border-t border-gray-200 dark:border-gray-800">
        <p className="text-gray-600 dark:text-gray-400">
          Gilani Motors Logo Presentation &copy; {new Date().getFullYear()}
        </p>
        <p className="text-gray-500 dark:text-gray-500 mt-2 text-sm">
          Created by Rod Rakic
        </p>
      </footer>
    </div>
  );
};

export default Index;
