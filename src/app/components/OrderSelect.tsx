"use client";

import { useState } from "react";

import {
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
} from "@headlessui/react";

import Image from "next/image";
import ChevromDown from "public/chevrom-down.svg";

const options = [
  { label: "Novidades", value: "newest" },
  { label: "Preço: Maior - menor", value: "price-desc" },
  { label: "Preço: Menor - maior", value: "price-asc" },
  { label: "Mais vendidos", value: "best-sellers" },
];

interface OrderOption {
  label: string;
  value: string;
}

export function OrderSelect() {
  const [orderBy, setOrderBy] = useState<OrderOption | null>(null);

  return (
    <Listbox value={orderBy} onChange={setOrderBy}>
      <ListboxButton className="flex items-center gap-2 text-text-body text-sm outline-none cursor-pointer">
        {orderBy?.label || "Ordenar por"}
        <Image src={ChevromDown} alt="ChevromDown" />
      </ListboxButton>
      <ListboxOptions
        anchor="bottom end"
        className="bg-shape-1 mt-1 rounded-sm shadow px-3 py-2 outline-none flex flex-col"
      >
        {options.map((option) => (
          <ListboxOption
            key={option.value}
            value={option}
            className="cursor-pointer hover:bg-shape-5 px-1 py-1 text-text-body text-sm rounded-sm"
          >
            {option.label}
          </ListboxOption>
        ))}
      </ListboxOptions>
    </Listbox>
  );
}
