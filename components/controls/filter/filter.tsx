import { ListFilter } from 'lucide-react';
import categories from '@/data/categories.json';

interface FilterProps {
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
}

export function Filter({ selectedCategory, setSelectedCategory }: FilterProps) {
  return (
    <div className="flex flex-col gap-2 md:flex-row md:items-center">
      <label htmlFor="filter">Filter by:</label>

      <div className="relative flex items-center">
        <select
          id="filter"
          className="appearance-none rounded-md border border-zinc-700 bg-zinc-800 p-2 pr-10 text-white focus:border-blue-500 focus:outline-none"
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          <option value="">All Categories</option>
          {categories.map(({ id, name }) => (
            <option key={id} value={id}>
              {name}
            </option>
          ))}
        </select>

        <ListFilter className="pointer-events-none absolute right-2" />
      </div>
    </div>
  );
}
