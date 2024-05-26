"use client";

import Link from "next/link";

interface NavigationProps {
  isHeaderOpen: boolean;
  setIsHeaderOpen: (value: boolean) => void;
}

export default function NavigationMobile({
  isHeaderOpen,
  setIsHeaderOpen,
}: NavigationProps) {
  const handleCloseHeader = () => {
    setIsHeaderOpen(false);
  };

  return (
    <aside
      className={`min-h-dvh w-full fixed inset-0 font-semibold text-2xl
      ${isHeaderOpen ? "animation-header-bg md:hidden" : "hidden"}
      `}
    >
      <div
        className={`bg-white w-full max-w-80 h-full ml-auto p-5 ${
          isHeaderOpen ? "animation-header" : "animation-header-reverse"
        }`}
      >
        <header className="flex justify-end">
          <button type="button" className="" onClick={handleCloseHeader}>
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
                d="M18.973 5.027L5.028 18.972m0-13.945l13.944 13.945"
              ></path>
            </svg>
          </button>
        </header>
        <nav className="w-full mt-6">
          <ul>
            <li>
              <Link href="/">Novedades destacados</Link>
            </li>
          </ul>
        </nav>
      </div>
    </aside>
  );
}
