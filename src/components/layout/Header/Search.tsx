"use client";
import { useState } from "react";

import Image from "next/image";
import SearchLoupe from "public/search-loupe.svg";

export function Search() {
  const [search, setSearch] = useState("");

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setSearch(event.target.value);
  }

  return (
    <div className="relative">
      <input
        className="w-40 sm:w-[352px] text-xs sm:text-sm text-text-body placeholder:text-text-body bg-shape-5 px-2 sm:px-4 py-1.5 sm:py-2.5 rounded-lg focus:outline-shape-2 pr-10"
        type="text"
        placeholder="Procurando por algo específico?"
        value={search}
        onChange={handleChange}
      />

      <Image
        className="absolute right-2 top-1/2 -translate-y-1/2 block sm:hidden"
        src={SearchLoupe}
        alt="Search"
        width={18}
        height={18}
      />

      <Image
        className="absolute right-4 top-2 pointer-events-none hidden sm:block"
        src={SearchLoupe}
        alt="Search"
      />
    </div>
  );
}
