import { Search } from '@/components/controls/search';
import { Filter } from '@/components/controls/filter';
import { Sort } from '@/components/controls/sort';

interface ControlsProps {
  onSearch: (query: string) => void;
  onClearSearch: () => void;
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
  sortOrder: string;
  setSortOrder: (order: string) => void;
}

export function Controls({
  onSearch,
  onClearSearch,
  selectedCategory,
  setSelectedCategory,
  sortOrder,
  setSortOrder,
}: ControlsProps) {
  return (
    <div className="m-auto mt-8 w-full max-w-7xl px-4">
      <div className="flex flex-col flex-wrap items-end gap-4 rounded-md bg-zinc-900 p-4 md:flex-row lg:items-center">
        <h1 className="shrink-0 self-center text-center text-2xl font-bold">Device Store</h1>
        <Search onSearch={onSearch} onClearSearch={onClearSearch} />
        <Filter selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
        <Sort sortOrder={sortOrder} setSortOrder={setSortOrder} />
      </div>
    </div>
  );
}
