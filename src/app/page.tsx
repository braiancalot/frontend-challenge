import db from "infra/db";

import { Catalog } from "./components/Catalog";

export default async function CatalogPage() {
  const products = db.products;

  return <Catalog products={products} />;
}
