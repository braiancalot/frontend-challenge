"use client";

import { useState } from "react";
import Image from "next/image";

import {
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
} from "@headlessui/react";

import ChevromDown from "public/chevrom-down.svg";

const options = Array.from({ length: 10 }).map((_, index) => index + 1);

export function CartProductQuantity() {
  const [value, setValue] = useState(options[0]);

  return (
    <div className="relative">
      <Listbox value={value} onChange={setValue}>
        <ListboxButton className="flex items-center gap-3 pl-3 pr-2 py-1 bg-shape-5 border border-shape-7 rounded-lg text-text-body cursor-pointer">
          {value}
          <Image src={ChevromDown} alt="ChevromDown" />
        </ListboxButton>
        <ListboxOptions
          modal={false}
          anchor="bottom"
          className="absolute bg-shape-1 mt-1 rounded-sm shadow px-1 py-2 outline-none flex flex-col h-[200px]"
        >
          {options.map((option) => (
            <ListboxOption
              key={option}
              value={option}
              className="cursor-pointer hover:bg-shape-5 px-2 py-1 text-text-body rounded-sm"
            >
              {option}
            </ListboxOption>
          ))}
        </ListboxOptions>
      </Listbox>
    </div>
  );
}
