import { ListFilter } from 'lucide-react';
import categories from '@/data/categories.json';

export function Filter() {
  const categoryNames = categories.map(({ name }) => name);

  return (
    <div className="ml-auto flex items-center gap-2">
      <ListFilter />

      <select className="ml-2 rounded-md border border-zinc-700 bg-zinc-800 p-2 text-white focus:border-blue-500 focus:outline-none">
        <option value="">All Categories</option>
        {categoryNames.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
    </div>
  );
}
