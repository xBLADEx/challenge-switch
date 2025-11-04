import { Search } from '@/components/controls/search';
import { Filter } from './filter';

interface ControlsProps {
  onSearch: (query: string) => void;
  onClearSearch: () => void;
}

export function Controls({ onSearch, onClearSearch }: ControlsProps) {
  return (
    <div className="m-auto mt-8 w-full max-w-7xl px-4">
      <div className="flex items-center gap-4 rounded-md bg-zinc-900 p-4">
        <h1 className="shrink-0 text-2xl font-bold">Device Store</h1>
        <Search onSearch={onSearch} onClearSearch={onClearSearch} />
        <Filter />
      </div>
    </div>
  );
}
