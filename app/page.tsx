'use client';

import { Controls } from '@/components/controls';
import { Header } from '@/components/header';
import { ListDevices } from '@/components/list-devices';
import devices from '@/data/devices.json';
import { Device } from '@/types/device';
import { useMemo, useState } from 'react';

export default function Home() {
  const allDevices = devices as Device[];
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedCategory, setSelectedCategory] = useState<string>('');

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
      result = result.filter((device) => device.category === selectedCategory);
    }

    return result;
  }, [allDevices, searchQuery, selectedCategory]);

  return (
    <>
      <Header />
      <main className="pb-8">
        <Controls
          onClearSearch={() => setSearchQuery('')}
          onSearch={setSearchQuery}
          // selectedCategory={selectedCategory}
          // setSelectedCategory={setSelectedCategory}
        />
        <ListDevices devices={filteredDevices} />
      </main>
    </>
  );
}
