import db from "src/infra/db";
import { notFound } from "next/navigation";
import { Product } from "./components/Product";

export default async function ProductPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const products = db.getProducts();

  const product = products.find((product: { id: string }) => {
    return product.id === id;
  });

  if (!product) {
    notFound();
  }

  return <Product />;
}
