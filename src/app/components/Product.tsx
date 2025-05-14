import Image from "next/image";

function formatPrice(priceInCents: number) {
  return `R$ ${(priceInCents / 100).toString().replace(".", ",")}`;
}

interface ProductProps {
  name: string;
  image_url: string;
  price_in_cents: number;
}

export function Product({ name, image_url, price_in_cents }: ProductProps) {
  return (
    <div className="rounded-t-lg rounded-b-md overflow-hidden bg-shape-1/40 cursor-pointer hover:shadow">
      <Image
        src={image_url}
        alt={name}
        width={640}
        height={580}
        className="w-[256px] h-[300px] object-cover"
      />

      <div className="flex flex-col px-3 py-2 gap-2">
        <span className="font-light text-product-name">{name}</span>

        <span className="h-px bg-shape-2"></span>

        <span className="font-semibold text-sm text-product-price">
          {formatPrice(price_in_cents)}
        </span>
      </div>
    </div>
  );
}
