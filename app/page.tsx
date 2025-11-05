'use client';

import { Controls } from '@/components/controls';
import { Header } from '@/components/header';
import { ListDevices } from '@/components/list-devices';
import devices from '@/data/devices.json';
import { useFavorites } from '@/hooks/use-favorites';
import { Device } from '@/types/device';
import { useMemo, useState } from 'react';

export default function Home() {
  const allDevices = devices as Device[];
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const [sortOrder, setSortOrder] = useState<string>('');
  const { isFavorite } = useFavorites();

  const filteredDevices = useMemo(() => {
    let result = allDevices;

    if (searchQuery) {
      result = result.filter(
        (device) =>
          device.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          device.description.toLowerCase().includes(searchQuery.toLowerCase()),
      );
    }

    if (selectedCategory) {
      if (selectedCategory === 'favorites') {
        result = result.filter((device) => isFavorite(device.id));
      } else {
        result = result.filter((device) => device.category === selectedCategory);
      }
    }

    if (sortOrder) {
      result = result.sort((a, b) => {
        if (sortOrder === 'price') {
          return a.price - b.price;
        } else if (sortOrder === 'name') {
          return a.name.localeCompare(b.name);
        }
        return 0;
      });
    }

    return result;
  }, [allDevices, searchQuery, selectedCategory, sortOrder, isFavorite]);

  return (
    <>
      <Header />
      <main className="pb-8">
        <Controls
          onClearSearch={() => setSearchQuery('')}
          onSearch={setSearchQuery}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          sortOrder={sortOrder}
          setSortOrder={setSortOrder}
        />
        <ListDevices devices={filteredDevices} />
      </main>
    </>
  );
}
