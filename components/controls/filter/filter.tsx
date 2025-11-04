import { ListFilter } from 'lucide-react';
import categories from '@/data/categories.json';

interface FilterProps {
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
}

export function Filter({ selectedCategory, setSelectedCategory }: FilterProps) {
  return (
    <div className="ml-auto flex items-center gap-2">
      <ListFilter />

      <select
        className="ml-2 rounded-md border border-zinc-700 bg-zinc-800 p-2 text-white focus:border-blue-500 focus:outline-none"
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
    </div>
  );
}
