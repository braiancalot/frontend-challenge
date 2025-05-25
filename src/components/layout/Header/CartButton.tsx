"use client";

import Image from "next/image";
import Link from "next/link";
import { useCart } from "src/hooks/useCart";
import ShoppingBag from "public/shopping-bag.svg";

export function CartButton() {
  const { totalCartProducts } = useCart();

  return (
    <Link
      href="/cart"
      className="cursor-pointer hover:bg-shape-5 p-2 rounded-full active:bg-shape-3 relative"
    >
      <Image src={ShoppingBag} alt="ShoppingBag" />

      {totalCartProducts > 0 && (
        <span className="absolute right-0 bottom-0.5 w-[17px] h-[17px] flex items-center justify-center bg-delete font-medium text-[10px] text-shape-1 rounded-full">
          {totalCartProducts}
        </span>
      )}
    </Link>
  );
}
