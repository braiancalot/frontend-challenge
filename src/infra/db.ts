import fs from "fs";
import path from "path";

function getProducts() {
  const filePath = path.join("public", "products.json");
  const jsonData = fs.readFileSync(filePath, "utf-8");
  const products = JSON.parse(jsonData).products;

  return products;
}

export default {
  getProducts,
};
