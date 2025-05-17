"use client";

import { useState } from "react";

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

const itemsPerPage = 12;

export function Catalog({ products }: { products: Array<CatalogProduct> }) {
  const [page, setPage] = useState(1);

  const totalItems = products.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const paginated = products.slice(startIndex, endIndex);

  return (
    <>
      <div className="max-w-[1120px] m-auto mt-8 flex justify-between items-center">
        <CategoryFilter />
        <OrderSelect />
      </div>

      <div className="max-w-[1120px] m-auto mt-4 flex justify-end">
        <Pagination page={page} setPage={setPage} totalPages={totalPages} />
      </div>

      <div className="max-w-[1120px] m-auto mt-8 flex gap-8 flex-wrap">
        {paginated.map((product) => (
          <Product
            key={product.id}
            name={product.name}
            price={product.price_in_cents}
            imageUrl={product.image_url}
          />
        ))}
      </div>

      <div className="max-w-[1120px] m-auto mt-[74px] mb-[60px] flex justify-end">
        <Pagination page={page} setPage={setPage} totalPages={totalPages} />
      </div>
    </>
  );
}
