import db from "src/infra/db";

import { Catalog } from "./components/Catalog";

export default function CatalogPage() {
  const products = db.getProducts();

  return <Catalog products={products} />;
}
