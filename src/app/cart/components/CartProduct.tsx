import Link from "next/link";
import Image from "next/image";

import { formatPrice } from "src/utils/commom";

import { CartProductQuantity } from "./CartProductQuantity";

import Trash from "public/trash.svg";

interface CartProductProps {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  price: number;
}

export function CartProduct({
  id,
  name,
  description,
  imageUrl,
  price,
}: CartProductProps) {
  return (
    <div className="flex flex-col sm:flex-row bg-shape-1 rounded-lg overflow-hidden">
      <Image
        src={imageUrl}
        alt={name}
        width={640}
        height={580}
        className="sm:w-[256px] sm:h-[211px] object-cover"
      />

      <div className="sm:flex-1 py-4 pl-8 pr-4 flex flex-col justify-between">
        <div>
          <div className="flex justify-between">
            <Link
              href={`/product/${id}`}
              className="font-light text-xl text-product-name"
            >
              {name}
            </Link>
            <button className="cursor-pointer hover:bg-shape-5 rounded-full active:bg-shape-3">
              <Image src={Trash} alt="Trash" />
            </button>
          </div>

          <p className="mt-3 text-xs text-product-name">{description}</p>
        </div>

        <div className="flex justify-between mt-8 sm:mt-0">
          <CartProductQuantity />

          <span className="font-semibold text-product-price">
            {formatPrice(price)}
          </span>
        </div>
      </div>
    </div>
  );
}
