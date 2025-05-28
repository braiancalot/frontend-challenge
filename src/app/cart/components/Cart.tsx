"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useCart } from "src/hooks/useCart";
import { BackButton } from "@/components/common/BackButton";
import { CartProduct } from "./CartProduct";
import { formatPrice } from "src/utils/commom";
import { CartEmpty } from "./CartEmpty";

const SHIPPING_COST_IN_CENTS = 40 * 100;
const FREE_SHIPPING_MINIMUM_IN_CENTS = 900 * 100;

export function Cart() {
  const { cartProducts, totalCartProducts } = useCart();
  const router = useRouter();

  const totalPrice = cartProducts.reduce(
    (total, currentProduct) =>
      total + currentProduct.price_in_cents * currentProduct.quantity,
    0,
  );

  const shippingCost =
    totalPrice < FREE_SHIPPING_MINIMUM_IN_CENTS ? SHIPPING_COST_IN_CENTS : 0;

  function handleCheckout() {
    router.push("/order-confirmation");
  }

  return (
    <div className="max-w-[1120px] m-auto px-4">
      <div className="mt-3 lg:mt-[25px]">
        <BackButton />
      </div>

      {totalCartProducts === 0 ? (
        <CartEmpty />
      ) : (
        <div className="flex flex-col lg:flex-row gap-8 mb-8 sm:mb-[60px]">
          <div className="flex-1 mt-3 sm:mt-[22px]">
            <span className="font-medium text-product-name text-2xl">
              SEU CARRINHO
            </span>

            <div className="mt-1.5">
              <span className="font-light text-product-name">
                {`Total (${totalCartProducts} ${totalCartProducts > 1 ? "produtos" : "produto"})`}
              </span>
              <span className="ml-1 font-semibold text-product-name">
                {formatPrice(totalPrice)}
              </span>
            </div>
            <div className="mt-6 flex flex-col gap-4">
              {cartProducts.map((product) => (
                <CartProduct
                  key={product.id}
                  id={product.id}
                  name={product.name}
                  description={product.description}
                  imageUrl={product.image_url}
                  price={product.price_in_cents}
                  quantity={product.quantity}
                />
              ))}
            </div>
          </div>

          <div className="lg:w-[352px] lg:h-[700px] bg-shape-1 flex flex-col justify-between px-6 py-4">
            <div className="flex flex-col">
              <span className="font-semibold text-xl text-product-name">
                RESUMO DO PEDIDO
              </span>

              <div className="mt-[30] flex justify-between">
                <span className="text-product-name">Subtotal de produtos</span>
                <span className="text-product-name">
                  {formatPrice(totalPrice)}
                </span>
              </div>
              <div className="mt-3 flex justify-between">
                <span className="text-product-name">Entrega</span>
                <span className="text-product-name">
                  {formatPrice(shippingCost)}
                </span>
              </div>

              <span className="mt-6 h-px bg-shape-2"></span>

              <div className="mt-3 flex justify-between">
                <span className="font-semibold text-product-name">Total</span>
                <span className="font-semibold text-product-name">
                  {formatPrice(totalPrice + shippingCost)}
                </span>
              </div>

              <button
                onClick={handleCheckout}
                className="bg-green text-button-text font-medium py-2 rounded-sm mt-10 cursor-pointer hover:bg-green-hover active:bg-green-active"
              >
                FINALIZAR A COMPRA
              </button>
            </div>

            <div className="flex flex-col gap-3 mt-16 lg:mt-0">
              <Link
                href="/"
                className="underline font-medium text-sm text-text-body"
              >
                AJUDA
              </Link>
              <Link
                href="/"
                className="underline font-medium text-sm text-text-body"
              >
                REEMBOLSOS
              </Link>
              <Link
                href="/"
                className="underline font-medium text-sm text-text-body"
              >
                ENTREGAS E FRETE
              </Link>
              <Link
                href="/"
                className="underline font-medium text-sm text-text-body"
              >
                TROCAS E DEVOLUÇÕES
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
