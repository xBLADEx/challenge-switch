'use client';

import { useState } from 'react';
import { X, Search as SearchIcon } from 'lucide-react';

interface SearchProps {
  onSearch: (query: string) => void;
  onClearSearch: () => void;
}

export function Search({ onSearch, onClearSearch }: SearchProps) {
  const [inputValue, setInputValue] = useState<string>('');
  const [appliedSearch, setAppliedSearch] = useState<string>('');

  function handleSearch(query: string) {
    const trimQuery = query.trim();
    if (trimQuery) {
      onSearch(trimQuery);
      setAppliedSearch(trimQuery);
      setInputValue('');
    }
  }

  function handleClearSearch() {
    onClearSearch();
    setAppliedSearch('');
    setInputValue('');
  }

  return (
    <div className="flex gap-2">
      <div className="relative flex items-center">
        <label htmlFor="search" className="sr-only">
          Search devices
        </label>
        <input
          type="text"
          id="search"
          placeholder="Search devices..."
          className="w-full rounded-md border border-zinc-700 bg-zinc-800 p-2 text-white placeholder-zinc-500 focus:border-blue-500 focus:outline-none"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSearch(inputValue)}
        />

        <SearchIcon className="pointer-events-none absolute right-2 text-zinc-500" />
      </div>

      <button
        type="button"
        className="cursor-pointer rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
        onClick={() => handleSearch(inputValue)}
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
            <span className="sr-only">Clear search for {appliedSearch}</span>

            <X size={16} />
          </button>
        </div>
      )}
    </div>
  );
}
