import fs from "fs";
import path from "path";
import { Product } from "src/types/common";

function getProducts() {
  const filePath = path.join(process.cwd(), "src", "infra", "products.json");
  const jsonData = fs.readFileSync(filePath, "utf-8");
  const products = JSON.parse(jsonData).products.map((product: Product) => ({
    ...product,
    created_at: new Date(product.created_at),
  }));

  return products;
}

export default {
  getProducts,
};
