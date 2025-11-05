import { Heart } from 'lucide-react';
import { useFavorites } from '@/hooks/use-favorites';

interface FavoriteProps {
  id: string;
}

export function Favorite({ id }: FavoriteProps) {
  const { isFavorite, toggleFavorite } = useFavorites();

  return (
    <button
      onClick={() => toggleFavorite(id)}
      className="cursor-pointer hover:text-red-300 focus:text-red-300"
    >
      <span className="sr-only">
        {isFavorite(id) ? 'Remove from favorites' : 'Add to favorites'}
      </span>
      <Heart size={18} className={isFavorite(id) ? 'text-red-500' : ''} />
    </button>
  );
}
