'use client';

import { Controls } from '@/components/controls';
import { Header } from '@/components/header';
import { ListDevices } from '@/components/list-devices';
import devices from '@/data/devices.json';
import { Device } from '@/types/device';
import { useState } from 'react';

export default function Home() {
  const [filteredDevices, setFilteredDevices] = useState<Device[]>([]);
  const allDevices = devices as Device[];
  const listedDevices = filteredDevices.length > 0 ? filteredDevices : allDevices;

  return (
    <>
      <Header />
      <main className="pb-8">
        <Controls
          setFilteredDevices={setFilteredDevices}
          allDevices={allDevices}
          devices={listedDevices}
        />
        <ListDevices devices={listedDevices} />
      </main>
    </>
  );
}
