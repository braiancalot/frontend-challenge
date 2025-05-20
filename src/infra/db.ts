import fs from "fs";
import path from "path";

interface Product {
  name: string;
  description: string;
  image_url: string;
  category: string;
  id: string;
  price_in_cents: number;
  sales: number;
  created_at: string;
}

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
