"use client";

import { useEffect, useMemo, useState } from "react";

import { CategoryFilter } from "./CategoryFilter";
import { OrderSelect } from "./OrderSelect";
import { Pagination } from "./Pagination";
import { Product } from "./Product";

import { CatalogOrderOption, CatalogProduct } from "src/types/catalog";

import {
  getFilteredProducts,
  getPaginatedProducts,
  getSortedProducts,
} from "src/utils/catalog";

const itemsPerPage = 12;

export function Catalog({ products }: { products: CatalogProduct[] }) {
  const [page, setPage] = useState(1);
  const [filter, setFilter] = useState("all");
  const [orderBy, setOrderBy] = useState<CatalogOrderOption | null>(null);

  const ordered = useMemo(() => {
    return getSortedProducts(products, orderBy);
  }, [products, orderBy]);

  const filtered = useMemo(() => {
    return getFilteredProducts(ordered, filter);
  }, [ordered, filter]);

  const totalPages = Math.ceil(filtered.length / itemsPerPage);
  const paginated = useMemo(() => {
    return getPaginatedProducts(filtered, page, itemsPerPage, totalPages);
  }, [filtered, page, totalPages]);

  useEffect(() => {
    setPage(1);
  }, [filter, orderBy]);

  return (
    <>
      <div className="max-w-[1120px] m-auto mt-8 flex justify-between items-center">
        <CategoryFilter filter={filter} setFilter={setFilter} />
        <OrderSelect orderBy={orderBy} setOrderBy={setOrderBy} />
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
