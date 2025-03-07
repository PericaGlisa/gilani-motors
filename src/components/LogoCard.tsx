
import React from "react";
import { Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";

interface LogoCardProps {
  id: number;
  name: string;
  description: string;
  imagePath: string;
  onFavorite: (id: number) => void;
  isFavorite: boolean;
  onImageClick: () => void;
}

const LogoCard: React.FC<LogoCardProps> = ({
  id,
  name,
  description,
  imagePath,
  onFavorite,
  isFavorite,
  onImageClick
}) => {
  return (
    <Card className="h-full flex flex-col logo-card overflow-hidden border-0 dark:bg-luxury-charcoal/50 dark:border dark:border-luxury-gold/20">
      <CardHeader className="p-3 md:pb-2">
        <CardTitle className="text-lg md:text-xl font-medium">{name}</CardTitle>
      </CardHeader>
      <CardContent className="flex-grow p-3 pt-0">
        <div 
          onClick={onImageClick}
          className="bg-neutral-100 dark:bg-neutral-800 rounded-md flex items-center justify-center p-4 md:p-6 mb-3 md:mb-4 cursor-pointer transition-all hover:opacity-90 hover:shadow-md"
        >
          <img 
            src={imagePath} 
            alt={`${name} logo design`} 
            className="max-h-32 md:max-h-40 object-contain"
          />
        </div>
        <CardDescription className="text-xs md:text-sm text-gray-700 dark:text-gray-300 line-clamp-3">
          {description}
        </CardDescription>
      </CardContent>
      <CardFooter className="p-3 pt-0">
        <Button 
          variant="outline" 
          size="sm" 
          className="w-full flex items-center gap-1 md:gap-2 text-xs md:text-sm hover:bg-luxury-cream dark:hover:bg-luxury-gold/10"
          onClick={() => onFavorite(id)}
        >
          <Heart 
            className={`h-3 w-3 md:h-4 md:w-4 ${isFavorite ? 'fill-red-500 text-red-500' : ''}`} 
          />
          <span>{isFavorite ? 'Favorited' : 'Add to Favorites'}</span>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default LogoCard;
