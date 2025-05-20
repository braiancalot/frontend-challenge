"use client";

import { useEffect, useMemo, useState } from "react";

import { CatalogCategoryFilter } from "./CatalogCategoryFilter";
import { CatalogOrderBy } from "./CatalogOrderBy";
import { CatalogPagination } from "./CatalogPagination";
import { CatalogProduct } from "./CatalogProduct";

import { Product } from "src/types/common";
import { CatalogOrderOption } from "src/types/catalog";

import {
  getFilteredProducts,
  getPaginatedProducts,
  getSortedProducts,
} from "src/utils/catalog";

const itemsPerPage = 12;

export function Catalog({ products }: { products: Product[] }) {
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
    <div className="max-w-[1120px] m-auto">
      <div className="px-2 mt-4 sm:mt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
        <CatalogCategoryFilter filter={filter} setFilter={setFilter} />
        <CatalogOrderBy orderBy={orderBy} setOrderBy={setOrderBy} />
      </div>

      <div className="px-2 mt-8 sm:mt-4 flex justify-center sm:justify-end">
        <CatalogPagination
          page={page}
          setPage={setPage}
          totalPages={totalPages}
        />
      </div>

      <div className="mt-4 sm:mt-8 flex flex-wrap justify-center xl:justify-start gap-8">
        {paginated.map((product) => (
          <CatalogProduct
            key={product.id}
            id={product.id}
            name={product.name}
            price={product.price_in_cents}
            imageUrl={product.image_url}
          />
        ))}
      </div>

      <div className="px-2 mt-4 sm:mt-[74px] mb-4 sm:mb-[60px] flex justify-center sm:justify-end">
        <CatalogPagination
          page={page}
          setPage={setPage}
          totalPages={totalPages}
        />
      </div>
    </div>
  );
}
