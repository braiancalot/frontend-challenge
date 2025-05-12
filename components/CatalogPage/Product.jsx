import Image from "next/image";

export function Product() {
  return (
    <div className=" rounded-t-lg rounded-b-md overflow-hidden bg-shape-1/40 cursor-pointer hover:shadow">
      <Image
        src="https://storage.googleapis.com/xesque-dev/challenge-images/caneca-06.jpg"
        alt="caneca-06"
        width={640}
        height={580}
        className="w-[256] h-[300] object-cover"
      />

      <div className="flex flex-col px-3 py-2 gap-2">
        <span className="font-light text-product-name">
          Caneca de cerâmica rústica
        </span>

        <span className="h-px bg-shape-2"></span>

        <span className="font-semibold text-sm text-product-price">
          R$ 40,00
        </span>
      </div>
    </div>
  );
}
