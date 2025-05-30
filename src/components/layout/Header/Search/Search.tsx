"use client";
import { useState } from "react";

import Image from "next/image";
import SearchLoupe from "public/search-loupe.svg";
import { Product } from "src/types/common";
import {
  Combobox,
  ComboboxButton,
  ComboboxInput,
  ComboboxOption,
  ComboboxOptions,
} from "@headlessui/react";
import { useRouter } from "next/navigation";
import { SearchProduct } from "./SearchProduct";

function filterProducts(products: Product[], query: string) {
  return query === ""
    ? []
    : products.filter((product) =>
        product.name.toLowerCase().includes(query.toLowerCase()),
      );
}

export function Search({ products }: { products: Product[] }) {
  const [query, setQuery] = useState("");
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const router = useRouter();

  const filteredProducts = filterProducts(products, query);

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setQuery(event.target.value);
  }

  function handleSelect(product: Product) {
    setSelectedProduct(product);
    setQuery("");
    if (product) {
      router.push(`/product/${product.id}`);
    }
  }

  return (
    <Combobox value={selectedProduct} onChange={handleSelect}>
      <div className="relative">
        <ComboboxInput
          className="w-40 sm:w-[352px] text-xs sm:text-sm text-text-body placeholder:text-text-body bg-shape-5 px-2 sm:px-4 py-1.5 sm:py-2.5 rounded-lg focus:outline-shape-2 pr-10"
          displayValue={() => query}
          placeholder="Procurando por algo específico?"
          onChange={handleChange}
        />

        <ComboboxButton className="absolute right-2 top-1/2 -translate-y-1/2 sm:right-4 sm:top-2 sm:translate-none pointer-events-none">
          <Image
            className="w-[18px] h-[18px] sm:w-6 sm:h-6 "
            src={SearchLoupe}
            alt="Search"
          />
        </ComboboxButton>

        {filteredProducts.length > 0 && (
          <ComboboxOptions className="absolute z-50 mt-1 max-h-60 w-full max-w-full overflow-auto rounded-xl bg-white p-1 shadow-lg">
            {filteredProducts.map((product) => (
              <ComboboxOption key={product.id} value={product}>
                <SearchProduct
                  name={product.name}
                  imageUrl={product.image_url}
                  price={product.price_in_cents}
                />
              </ComboboxOption>
            ))}
          </ComboboxOptions>
        )}
      </div>
    </Combobox>
  );
}
