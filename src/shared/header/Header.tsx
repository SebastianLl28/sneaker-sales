"use client";

import Logo from "@/components/Logo";
import Link from "next/link";
import { data } from "./data/data";

interface HeaderProps {
  setIsHeaderOpen: (value: boolean) => void;
  setIsSearchOpen: (value: boolean) => void;
}

export default function Header({
  setIsHeaderOpen,
  setIsSearchOpen,
}: HeaderProps) {
  const handleOpenHeader = () => {
    setIsHeaderOpen(true);
  };

  const handleOpenSearch = () => {
    setIsSearchOpen(true);
  };

  return (
    <header className="w-full font-semibold z-10">
      <div className="container flex items-center justify-between py-4">
        <Link href="/">
          <Logo className="h-5 w-fit" />
        </Link>
        <nav className="hidden md:inline-block">
          <ul className="flex gap-12">
            {data.map((item) => (
              <li key={item.id}>
                <Link href={item.url}>{item.title}</Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="flex items-center gap-4">
          <button type="button" onClick={handleOpenSearch}>
            <svg
              aria-hidden="true"
              focusable="false"
              viewBox="0 0 24 24"
              role="img"
              width="24px"
              height="24px"
              fill="none"
            >
              <path
                stroke="currentColor"
                strokeWidth="1.5"
                d="M13.962 16.296a6.716 6.716 0 01-3.462.954 6.728 6.728 0 01-4.773-1.977A6.728 6.728 0 013.75 10.5c0-1.864.755-3.551 1.977-4.773A6.728 6.728 0 0110.5 3.75c1.864 0 3.551.755 4.773 1.977A6.728 6.728 0 0117.25 10.5a6.726 6.726 0 01-.921 3.407c-.517.882-.434 1.988.289 2.711l3.853 3.853"
              ></path>
            </svg>
          </button>
          <button type="button">
            <svg
              aria-hidden="true"
              focusable="false"
              viewBox="0 0 24 24"
              role="img"
              width="24px"
              height="24px"
              fill="none"
            >
              <path
                stroke="currentColor"
                strokeWidth="1.5"
                d="M8.25 8.25V6a2.25 2.25 0 012.25-2.25h3a2.25 2.25 0 110 4.5H3.75v8.25a3.75 3.75 0 003.75 3.75h9a3.75 3.75 0 003.75-3.75V8.25H17.5"
              ></path>
            </svg>
          </button>
          <button
            type="button"
            className="md:hidden"
            onClick={handleOpenHeader}
          >
            <svg
              aria-hidden="true"
              focusable="false"
              viewBox="0 0 24 24"
              role="img"
              width="26px"
              height="26px"
              fill="none"
            >
              <path
                stroke="currentColor"
                strokeWidth="1.5"
                d="M21 5.25H3M21 12H3m18 6.75H3"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}
