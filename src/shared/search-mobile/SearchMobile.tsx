"use client";

interface SearchMobileProps {
  isSearchOpen: boolean;
  setIsSearchOpen: (value: boolean) => void;
}

export default function SearchMobile({
  isSearchOpen,
  setIsSearchOpen,
}: SearchMobileProps) {
  const handleCancelSearch = () => {
    setIsSearchOpen(false);
  };

  return (
    <div
      className={`min-h-dvh w-full fixed inset-0
    ${isSearchOpen ? "animation-header-bg" : "hidden"}
    `}
    >
      <div
        className={`bg-white w-full h-full md:h-fit ml-auto p-5 translate-x-full ${
          isSearchOpen && "animation-search"
        }`}
      >
        <header className="grid items-center grid-cols-[1fr,auto] gap-x-6 sm:gap-x-16">
          <div className="flex relative">
            <div className="rounded-full bg-[#f5f5f5] w-fit p-2 absolute">
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
            </div>
            <input
              type="text"
              className="bg-[#f5f5f5] pl-11 pr-4 py-2 rounded-full w-full focus:bg-[#e5e5e5] placeholder:text-lg font-semibold outline-none"
              placeholder="Buscar"
            />
          </div>
          <button className="font-semibold" onClick={handleCancelSearch}>
            Cancelar
          </button>
        </header>
        <section className="mt-4">
          <p className="text-sm text-gray-500 leading-loose">
            Términos de búsqueda populares
          </p>
          <ul className="[&>li]:py-3 [&>li]:font-semibold [&>li]:text-xl">
            <li>Air Force 1</li>
            <li>Jordan</li>
            <li>Air Max</li>
            <li>Blazer</li>
          </ul>
        </section>
      </div>
    </div>
  );
}
