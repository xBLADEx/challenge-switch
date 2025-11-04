'use client';

import { Header } from '@/components/header';
import { Favorite } from '@/components/shared/favorite';
import categories from '@/data/categories.json';
import { Device } from '@/types/device';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

interface DeviceDetailProps {
  device: Device;
}

export function DeviceDetails({ device }: DeviceDetailProps) {
  const categoryName = categories.find((item) => item.id === device.category)?.name;

  return (
    <>
      <Header />
      <article className="mx-auto mt-8 max-w-7xl rounded bg-zinc-800 p-4">
        <header>
          <Link href="/" className="mb-4 flex items-center gap-2 text-sm">
            <ArrowLeft size={20} />
            Back to Catalog
          </Link>

          <div className="flex gap-4">
            <h1 className="mb-1 text-2xl font-bold">{device.name}</h1>

            <Favorite id={device.id} />
          </div>
        </header>

        <p className="mb-4">{device.description}</p>
        <p className="text-lg font-bold text-green-600">${device.price}</p>
        <div className="flex gap-4">
          <p className="text-yellow-500">Rating: {device.rating}</p>
          <span className="rounded bg-zinc-950 px-2 py-1 text-xs text-white">{categoryName}</span>
        </div>
      </article>
    </>
  );
}
