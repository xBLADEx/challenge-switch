import { ArrowDownUp } from 'lucide-react';

interface SortProps {
  sortOrder: string;
  setSortOrder: (order: string) => void;
}

export function Sort({ sortOrder, setSortOrder }: SortProps) {
  return (
    <div className="flex flex-col gap-2 md:flex-row md:items-center">
      <label htmlFor="sort">Sort by:</label>
      <div className="relative flex items-center">
        <select
          className="appearance-none rounded-md border border-zinc-700 bg-zinc-800 p-2 pr-10 text-white focus:border-blue-500 focus:outline-none"
          id="sort"
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value)}
        >
          <option value="">--</option>
          <option value="price">Price</option>
          <option value="name">Rating</option>
        </select>
        <ArrowDownUp className="pointer-events-none absolute right-2" />
      </div>
    </div>
  );
}
