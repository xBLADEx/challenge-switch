import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-900 px-4">
      <div className="max-w-md text-center">
        <div className="mb-8">
          <h1 className="mb-2 text-8xl font-bold text-blue-500">404</h1>
          <div className="mx-auto h-1 w-24 rounded bg-blue-500"></div>
        </div>

        <h2 className="mb-4 text-2xl font-semibold text-white">Device Not Found</h2>
        <p className="mb-8 text-zinc-400">
          Sorry, we couldn&apos;t find the device you&apos;re looking for. It may have been removed
          or doesn&apos;t exist.
        </p>

        <div className="space-y-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-md bg-blue-600 px-6 py-3 font-medium text-white transition-colors hover:bg-blue-700"
          >
            <ArrowLeft size={20} />
            Back to Catalog
          </Link>
        </div>
      </div>
    </div>
  );
}
