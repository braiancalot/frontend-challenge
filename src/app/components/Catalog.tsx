"use client";

import { useEffect, useState } from "react";

import { CategoryFilter } from "./CategoryFilter";
import { OrderSelect } from "./OrderSelect";
import { Pagination } from "./Pagination";
import { Product } from "./Product";

interface CatalogProduct {
  id: string;
  name: string;
  image_url: string;
  price_in_cents: number;
  category: "mugs" | "t-shirts";
}

const itemsPerPage = 12;

export function Catalog({ products }: { products: Array<CatalogProduct> }) {
  const [page, setPage] = useState(1);
  const [filter, setFilter] = useState("all");

  const filtered =
    filter === "all"
      ? products
      : products.filter((product) => product.category === filter);

  const totalItems = filtered.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const startIndex =
    ((page <= totalPages ? page : totalPages) - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const paginated = filtered.slice(startIndex, endIndex);

  useEffect(() => {
    if (page > totalPages) {
      setPage(totalPages);
    }
  }, [page, totalPages]);

  return (
    <>
      <div className="max-w-[1120px] m-auto mt-8 flex justify-between items-center">
        <CategoryFilter filter={filter} setFilter={setFilter} />
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
