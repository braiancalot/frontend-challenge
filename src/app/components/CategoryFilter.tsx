import { useState } from "react";
import { Radio, RadioGroup } from "@headlessui/react";

const options = [
  { label: "TODOS OS PRODUTOS", value: "all", className: "w-[169px]" },
  { label: "CAMISETAS", value: "t-shirts", className: "w-[89px]" },
  { label: "CANECAS", value: "mugs", className: "w-[72px]" },
];

interface CategoryFilterProps {
  filter: string;
  setFilter: React.Dispatch<React.SetStateAction<string>>;
}

export function CategoryFilter({ filter, setFilter }: CategoryFilterProps) {
  return (
    <RadioGroup value={filter} onChange={setFilter} className="flex gap-10">
      {options.map((option) => (
        <Radio
          key={option.value}
          value={option.value}
          className={`text-text-body cursor-pointer ${option.className} text-center border-orange-low data-checked:border-b-4 data-checked:-mb-1 data-checked:text-product-name data-checked:font-semibold`}
        >
          {option.label}
        </Radio>
      ))}
    </RadioGroup>
  );
}
