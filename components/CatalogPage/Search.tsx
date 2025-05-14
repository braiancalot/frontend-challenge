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
        className="w-[352] text-sm text-text-body placeholder:text-text-body bg-shape-5 px-4 py-2.5 rounded-lg focus:outline-shape-2"
        type="text"
        placeholder="Procurando por algo específico?"
        value={search}
        onChange={handleChange}
      />
      <Image
        className="absolute right-4 top-2 pointer-events-none"
        src={SearchLoupe}
        alt="SearchLoupe"
      />
    </div>
  );
}
