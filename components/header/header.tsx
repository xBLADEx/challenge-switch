import Link from 'next/link';

export function Header() {
  return (
    <header className="bg-zinc-800 text-white">
      <div className="m-auto flex max-w-7xl flex-wrap items-center justify-center gap-5 p-4">
        <Link href="/">Challenge Switch</Link>

        <nav className="ml-auto">
          <ul className="flex items-center space-x-2 md:space-x-4">
            <li>
              <span className="text-zinc-300">Welcome</span>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
