import {
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
} from "@headlessui/react";

import Image from "next/image";
import ChevromDown from "public/chevrom-down.svg";

import { CatalogOrderOption } from "src/types/catalog";

const options = [
  { label: "Novidades", value: "newest" },
  { label: "Preço: Maior - menor", value: "price-desc" },
  { label: "Preço: Menor - maior", value: "price-asc" },
  { label: "Mais vendidos", value: "best-sellers" },
];

interface CatalogOrderByProps {
  orderBy: CatalogOrderOption | null;
  setOrderBy: React.Dispatch<React.SetStateAction<CatalogOrderOption | null>>;
}

export function CatalogOrderBy({ orderBy, setOrderBy }: CatalogOrderByProps) {
  return (
    <div className="relative">
      <Listbox value={orderBy} onChange={setOrderBy}>
        <ListboxButton className="flex items-center gap-2 text-text-body text-sm outline-none cursor-pointer">
          {orderBy?.label || "Ordenar por"}
          <Image src={ChevromDown} alt="ChevromDown" />
        </ListboxButton>
        <ListboxOptions
          modal={false}
          className="bg-shape-1 mt-1 rounded-sm shadow px-3 py-2 outline-none flex flex-col absolute left-1/2 -translate-x-1/2 sm:right-0 sm:left-auto sm:translate-x-0 w-max"
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
    </div>
  );
}
