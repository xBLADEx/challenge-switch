'use client';

import { Device } from '@/types/device';
import { useState } from 'react';

interface SearchProps {
  setFilteredDevices: (devices: Device[]) => void;
  devices: Device[];
  allDevices: Device[];
}

export function Search({ setFilteredDevices, devices, allDevices }: SearchProps) {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [appliedSearch, setAppliedSearch] = useState<string>('');

  function handleSearch(query: string) {
    const filtered = devices.filter(
      (device) =>
        device.name.toLowerCase().includes(query.toLowerCase()) ||
        device.description.toLowerCase().includes(query.toLowerCase()),
    );

    setSearchQuery('');
    setFilteredDevices(filtered);
    setAppliedSearch(query);
  }

  function handleClearSearch() {
    setFilteredDevices(allDevices);
    setAppliedSearch('');
  }

  return (
    <div className="flex gap-2">
      <input
        type="text"
        placeholder="Search devices..."
        className="w-full rounded-md border border-zinc-700 bg-zinc-800 p-2 text-white placeholder-zinc-500 focus:border-blue-500 focus:outline-none"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <button
        type="button"
        className="cursor-pointer rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
        onClick={() => handleSearch(searchQuery)}
      >
        Search
      </button>
      {appliedSearch && (
        <div className="flex items-center rounded-full border border-blue-500 px-3 py-1 text-sm text-white">
          <span>{appliedSearch}</span>
          <button
            onClick={handleClearSearch}
            className="ml-2 cursor-pointer text-gray-500 hover:text-gray-700"
          >
            <span className="sr-only">Clear search for {appliedSearch}</span>X
          </button>
        </div>
      )}
    </div>
  );
}
