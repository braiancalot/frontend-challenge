import { CatalogOrderOption, CatalogProduct } from "src/types/catalog";

export function getSortedProducts(
  products: CatalogProduct[],
  orderBy: CatalogOrderOption | null,
): CatalogProduct[] {
  if (!orderBy) return products;

  return [...products].sort((a, b) => {
    switch (orderBy.value) {
      case "newest":
        return b.created_at.getTime() - a.created_at.getTime();
      case "price-desc":
        return b.price_in_cents - a.price_in_cents;

      case "price-asc":
        return a.price_in_cents - b.price_in_cents;

      case "best-sellers":
        return b.sales - a.sales;

      default:
        return 0;
    }
  });
}

export function getFilteredProducts(
  products: CatalogProduct[],
  filter: string,
): CatalogProduct[] {
  if (filter === "all") return products;

  return products.filter((product) => product.category === filter);
}

export function getPaginatedProducts(
  products: CatalogProduct[],
  page: number,
  itemsPerPage: number,
  totalPages: number,
): CatalogProduct[] {
  const safePage = Math.min(page, totalPages || 1);
  const startIndex = (safePage - 1) * itemsPerPage;

  return products.slice(startIndex, startIndex + itemsPerPage);
}
