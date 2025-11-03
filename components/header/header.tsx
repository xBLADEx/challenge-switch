'use client';

import Link from 'next/link';

export function Header() {
  return (
    <header className="bg-zinc-800 text-white">
      <div className="m-auto flex max-w-7xl flex-wrap items-center justify-center gap-5 p-4">
        <Link href="/">Challenge Switch</Link>

        <nav className="ml-auto">
          <ul className="flex items-center space-x-2 md:space-x-4">
            <li>
              <span className="text-zinc-300">Hi, User</span>
            </li>

            <li>
              <button
                onClick={() => {}}
                className="cursor-pointer rounded bg-white px-4 py-2 text-black"
              >
                Sign Out
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
