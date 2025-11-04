import { Device } from '@/types/device';

interface CardProps extends Device {
  title: string;
}

export function Card({ title, category, price, rating, description }: CardProps) {
  return (
    <div className="rounded-md border border-zinc-200 p-4 shadow-sm transition-shadow hover:shadow-md">
      <h2 className="mb-2 text-lg font-semibold">{title}</h2>
      <p className="text-zinc-600">{description}</p>
      <div className="mt-4 flex items-center justify-between text-sm text-zinc-500">
        <span>Category: {category}</span>
        <span>${price.toFixed(2)}</span>
        <span>Rating: {rating} / 5</span>
      </div>
    </div>
  );
}
