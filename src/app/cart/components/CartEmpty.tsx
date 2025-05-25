import Link from "next/link";

export function CartEmpty() {
  return (
    <div className="mt-6 flex flex-col gap-2">
      <h2 className="font-medium text-2xl text-product-name">
        Seu carrinho está vazio
      </h2>
      <p className="text-product-name">
        Ver{" "}
        <Link href="/" className="underline text-text-body hover:text-black">
          todos os produtos
        </Link>
      </p>
    </div>
  );
}
