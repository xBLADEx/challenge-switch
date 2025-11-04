import { Search } from '@/components/controls/search';

export function Controls() {
  return (
    <div className="m-auto mt-8 w-full max-w-7xl px-4">
      <div className="flex items-center gap-4 rounded-md bg-zinc-900 p-4">
        <h1 className="shrink-0 text-2xl font-bold">Device Store</h1>
        <Search />
      </div>
    </div>
  );
}
