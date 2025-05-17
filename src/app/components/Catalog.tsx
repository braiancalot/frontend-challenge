"use client";

import { CategoryFilter } from "./CategoryFilter";
import { OrderSelect } from "./OrderSelect";
import { Pagination } from "./Pagination";
import { Product } from "./Product";

interface CatalogProduct {
  id: string;
  name: string;
  image_url: string;
  price_in_cents: number;
}

export function Catalog({ products }: { products: Array<CatalogProduct> }) {
  return (
    <>
      <div className="max-w-[1120px] m-auto mt-8 flex justify-between items-center">
        <CategoryFilter />
        <OrderSelect />
      </div>

      <div className="max-w-[1120px] m-auto mt-4 flex justify-end">
        <Pagination />
      </div>

      <div className="max-w-[1120px] m-auto mt-8 flex gap-8 flex-wrap">
        {products.map((product) => (
          <Product
            key={product.id}
            name={product.name}
            price_in_cents={product.price_in_cents}
            image_url={product.image_url}
          />
        ))}
      </div>

      <div className="max-w-[1120px] m-auto mt-[74px] mb-[60px] flex justify-end">
        <Pagination />
      </div>
    </>
  );
}
