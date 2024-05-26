"use client";

import Header from "@/shared/header/Header";
import NavigationMobile from "@/shared/navigation-mobile/NavigationMobile";
import SearchMobile from "@/shared/search-mobile/SearchMobile";
import { useState } from "react";

const HeaderLayout = () => {
  const [isHeaderOpen, setIsHeaderOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <>
      <Header
        setIsHeaderOpen={setIsHeaderOpen}
        setIsSearchOpen={setIsSearchOpen}
      />
      <NavigationMobile
        isHeaderOpen={isHeaderOpen}
        setIsHeaderOpen={setIsHeaderOpen}
      />
      <SearchMobile
        isSearchOpen={isSearchOpen}
        setIsSearchOpen={setIsSearchOpen}
      />
    </>
  );
};

export default HeaderLayout;
