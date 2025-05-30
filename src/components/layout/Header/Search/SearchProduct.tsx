import Image from "next/image";
import { formatPrice } from "src/utils/commom";

interface SearchProductProps {
  name: string;
  imageUrl: string;
  price: number;
}

export function SearchProduct({ name, imageUrl, price }: SearchProductProps) {
  return (
    <div className="flex cursor-pointer items-center gap-2 rounded-lg px-3 py-1.5 select-none hover:bg-gray-100">
      <div className="rounded-sm overflow-hidden">
        <Image
          src={imageUrl}
          alt={name}
          width={640}
          height={580}
          className="w-12 h-auto object-cover"
        />
      </div>

      <div className="flex flex-col items-start">
        <span className="font-light text-md text-product-name">{name}</span>

        <span className="font-semibold text-md text-product-price self-end-safe">
          {formatPrice(price)}
        </span>
      </div>
    </div>
  );
}
