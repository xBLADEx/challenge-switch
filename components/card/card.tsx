import { Device } from '@/types/device';
import categories from '@/data/categories.json';
import Link from 'next/link';

interface CardProps extends Device {
  title: string;
}

export function Card({ id, title, price, rating, description, category }: CardProps) {
  const categoryName = categories.find((item) => item.id === category)?.name;

  return (
    <div className="rounded-md bg-zinc-800 p-4 shadow-sm transition-shadow hover:shadow-md">
      <Link href={`/device/${id}`} className="inline-block hover:text-blue-400 focus:text-blue-400">
        <h2 className="mb-1 inline-block text-lg font-semibold">{title}</h2>
      </Link>
      <p className="leading-5 text-zinc-400">{description}</p>
      <div className="my-4 flex items-center justify-between">
        <span className="text-md font-bold text-green-600">${price.toFixed(2)}</span>
      </div>
      <div className="flex items-center justify-between">
        {categoryName && (
          <span className="rounded bg-zinc-950 px-2 py-1 text-xs text-white">{categoryName}</span>
        )}

        <span className="text-sm text-zinc-500">
          Rating: <b>{rating} / 5</b>
        </span>
      </div>
    </div>
  );
}
