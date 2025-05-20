import Image from "next/image";
import Link from "next/link";

function formatPrice(priceInCents: number) {
  return `R$ ${(priceInCents / 100).toFixed(2).toString().replace(".", ",")}`;
}

interface CatalogProductProps {
  id: string;
  name: string;
  imageUrl: string;
  price: number;
}

export function CatalogProduct({
  id,
  name,
  imageUrl,
  price,
}: CatalogProductProps) {
  return (
    <Link
      href={`/product/${id}`}
      className="rounded-t-lg rounded-b-md overflow-hidden bg-shape-1/40 cursor-pointer hover:shadow active:shadow"
    >
      <Image
        src={imageUrl}
        alt={name}
        width={640}
        height={580}
        className="w-[256px] h-[300px] object-cover"
      />

      <div className="flex flex-col px-3 py-2 gap-2">
        <span className="font-light text-product-name">{name}</span>

        <span className="h-px bg-shape-2"></span>

        <span className="font-semibold text-sm text-product-price">
          {formatPrice(price)}
        </span>
      </div>
    </Link>
  );
}
