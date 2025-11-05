import Link from 'next/link';
import { ArrowLeft, Package } from 'lucide-react';

export default function DeviceNotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-900 px-4">
      <div className="max-w-md text-center">
        <div className="mb-8">
          <div className="mx-auto mb-4 flex h-24 w-24 items-center justify-center rounded-full bg-zinc-800">
            <Package size={40} className="text-zinc-500" />
          </div>
          <h1 className="mb-2 text-6xl font-bold text-zinc-600">404</h1>
        </div>

        <h2 className="mb-4 text-2xl font-semibold text-white">Device Not Found</h2>
        <p className="mb-8 text-zinc-400">
          This device doesn&apos;t exist in our catalog. It may have been discontinued or the link
          might be incorrect.
        </p>

        <div className="space-y-4">
          <Link
            href="/"
            className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-blue-600 px-6 py-3 font-medium text-white transition-colors hover:bg-blue-700"
          >
            <ArrowLeft size={20} />
            Browse All Devices
          </Link>
        </div>
      </div>
    </div>
  );
}
