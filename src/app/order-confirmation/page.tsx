"use client";

import Link from "next/link";
import { useEffect } from "react";
import { useCart } from "src/hooks/useCart";

export default function OrderConfirmation() {
  const { clearCart } = useCart();

  useEffect(() => {
    clearCart();
  }, []);

  return (
    <div className="max-w-[1120px] m-auto px-4">
      <div className="mt-6 flex flex-col">
        <h1 className=" font-medium text-2xl text-product-name">
          Pedido realizado com sucesso!
        </h1>

        <p className="mt-2">
          Em breve você receberá um e-mail com os detalhes do pedido.
        </p>

        <Link href="/" className="mt-4 underline text-text-body">
          Voltar para a loja
        </Link>
      </div>
    </div>
  );
}
