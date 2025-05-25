"use client";

import Image from "next/image";
import { useCart } from "src/hooks/useCart";
import ShoppingBagWhite from "public/shopping-bag-white.svg";
import { Product } from "src/types/common";
import { MAX_QUANTITY_PER_CART_ITEM } from "src/utils/cart";

interface AddToCartButtonProps {
  product: Product;
}

export function AddToCartButton({ product }: AddToCartButtonProps) {
  const { addToCart, quantityInCart } = useCart();
  const quantity = quantityInCart(product.id);

  function handleClick() {
    addToCart(product);
  }

  return (
    <button
      disabled={quantity === MAX_QUANTITY_PER_CART_ITEM}
      onClick={handleClick}
      className="bg-brand-blue font-medium text-button-text py-2.5 px-4 rounded-sm cursor-pointer mt-8 self-center flex justify-center items-center gap-3 hover:bg-brand-blue-hover active:bg-brand-blue-active disabled:bg-gray-400 disabled:cursor-default"
    >
      <Image src={ShoppingBagWhite} alt="ShoppingBag" />
      ADICIONAR AO CARRINHO {quantity > 0 && `(${quantity})`}
    </button>
  );
}
