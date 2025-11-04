import { Device } from '@/types/device';

interface CardProps extends Omit<Device, 'category'> {
  title: string;
}

export function Card({ title, price, rating, description }: CardProps) {
  return (
    <div className="rounded-md bg-zinc-800 p-4 shadow-sm transition-shadow hover:shadow-md">
      <h2 className="mb-1 text-lg font-semibold">{title}</h2>
      <p className="leading-5 text-zinc-400">{description}</p>
      <div className="mt-4 flex items-center justify-between text-sm text-zinc-500">
        <span className="font-bold text-green-600">${price.toFixed(2)}</span>
        <span className="text-zinc-500">
          Rating: <b>{rating} / 5</b>
        </span>
      </div>
    </div>
  );
}
