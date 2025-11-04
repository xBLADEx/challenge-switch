import { useState, useEffect } from 'react';
import { Device } from '@/types/device';

const FAVORITES_KEY = 'favorites';

export function useFavorites() {
  const [favorites, setFavorites] = useState<string[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    try {
      const stored = localStorage.getItem(FAVORITES_KEY);
      if (stored) {
        setFavorites(JSON.parse(stored));
      }
    } catch (error) {
      console.error('Failed to load favorites:', error);
    } finally {
      setIsLoaded(true);
    }
  }, []);

  useEffect(() => {
    if (isLoaded) {
      try {
        localStorage.setItem(FAVORITES_KEY, JSON.stringify(favorites));
      } catch (error) {
        console.error('Failed to save favorites:', error);
      }
    }
  }, [favorites, isLoaded]);

  const addFavorite = (deviceId: string) => {
    setFavorites((prev) => [...prev, deviceId]);
  };

  const removeFavorite = (deviceId: string) => {
    setFavorites((prev) => prev.filter((id) => id !== deviceId));
  };

  const toggleFavorite = (deviceId: string) => {
    if (favorites.includes(deviceId)) {
      removeFavorite(deviceId);
    } else {
      addFavorite(deviceId);
    }
  };

  const isFavorite = (deviceId: string) => favorites.includes(deviceId);

  const getFavoriteDevices = (allDevices: Device[]) => {
    return allDevices.filter((device) => favorites.includes(device.id));
  };

  return {
    favorites,
    isLoaded,
    addFavorite,
    removeFavorite,
    toggleFavorite,
    isFavorite,
    getFavoriteDevices,
    favoritesCount: favorites.length,
  };
}
