import { ArrowDownUp } from 'lucide-react';

interface SortProps {
  sortOrder: string;
  setSortOrder: (order: string) => void;
}

export function Sort({ sortOrder, setSortOrder }: SortProps) {
  return (
    <div className="flex items-center gap-2">
      <label htmlFor="sort">Sort by:</label>
      <select
        className="rounded-md border border-zinc-700 bg-zinc-800 p-2 text-white focus:border-blue-500 focus:outline-none"
        id="sort"
        value={sortOrder}
        onChange={(e) => setSortOrder(e.target.value)}
      >
        <option value="">--</option>
        <option value="price">Price</option>
        <option value="name">Rating</option>
      </select>
      <ArrowDownUp />
    </div>
  );
}
