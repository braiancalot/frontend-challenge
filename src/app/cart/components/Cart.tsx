import Link from "next/link";

import { BackButton } from "@/components/common/BackButton";
import { CartProduct } from "./CartProduct";

const products = [
  {
    name: "Camiseta not today.",
    description:
      "Cauda desino audax tot. Confero vesco timor desino pel at decipio custodia tergum. Tutis aestus victoria crudelis.",
    image_url:
      "https://storage.googleapis.com/xesque-dev/challenge-images/camiseta-05.jpg",
    id: "fde3bcbe-f5d3-4dd4-afa9-e26e7283b15e",
    price_in_cents: 9445,
  },
  {
    name: "Camiseta evening",
    description:
      "Taedium illo verbum adaugeo claro officia nisi. Repellendus solitudo abscido atrox aegrus aegre maiores socius. Sub amo sumptus.",
    image_url:
      "https://storage.googleapis.com/xesque-dev/challenge-images/camiseta-02.jpg",
    id: "70a69a8f-4ba7-4e2d-a731-a19442dacc55",
    price_in_cents: 9005,
  },
  {
    name: "Caneca Never settle",
    description:
      "Antiquus vorax cura tantum teres cultura copiose. Cibus utique universe comparo coaegresco sufficio verumtamen comprehendo voro stips. Alienus video casso.",
    image_url:
      "https://storage.googleapis.com/xesque-dev/challenge-images/caneca-03.jpg",
    id: "1f04b624-50d7-4d55-b03e-abd8a4a0109b",
    price_in_cents: 8502,
  },
  {
    name: "Camiseta Ramones",
    description:
      "Aurum tripudio cubicularis doloribus vulgivagus audacia torrens utpote tandem. Territo thema venio demens talio. Ullus iste absorbeo delectus deserunt cilicium via coniecto.",
    image_url:
      "https://storage.googleapis.com/xesque-dev/challenge-images/camiseta-04.jpg",

    id: "1be7ba5e-9222-40f4-b14a-12a1dfebdef6",
    price_in_cents: 9776,
  },
  {
    name: "Camiseta Broken Saints",
    description:
      "Adulatio aestus teneo appello sufficio appono currus maiores. Tutis argentum dolores nesciunt. Copiose barba umerus tricesimus aegrotatio cilicium.",
    image_url:
      "https://storage.googleapis.com/xesque-dev/challenge-images/camiseta-03.jpg",

    id: "6c9f2424-f226-42c6-b3e0-eaa4725ee6c0",
    price_in_cents: 2871,
  },
];

export function Cart() {
  return (
    <div className="max-w-[1120px] m-auto px-4">
      <div className="mt-3 lg:mt-[25px]">
        <BackButton />
      </div>

      <div className="flex flex-col lg:flex-row gap-8 mb-8 sm:mb-[60px]">
        <div className="flex-1 mt-3 sm:mt-[22px]">
          <span className="font-medium text-product-name text-2xl">
            SEU CARRINHO
          </span>

          <div className="mt-1.5">
            <span className="font-light text-product-name">
              Total (3 produtos)
            </span>
            <span className="ml-1 font-semibold text-product-name">
              R$161,00
            </span>
          </div>

          <div className="mt-6 flex flex-col gap-4">
            {products.map((product) => (
              <CartProduct
                key={product.id}
                id={product.id}
                name={product.name}
                description={product.description}
                imageUrl={product.image_url}
                price={product.price_in_cents}
              />
            ))}
          </div>
        </div>

        <div className="lg:w-[352px] lg:max-h-[700px] bg-shape-1 flex flex-col justify-between px-6 py-4">
          <div className="flex flex-col">
            <span className="font-semibold text-xl text-product-name">
              RESUMO DO PEDIDO
            </span>

            <div className="mt-[30] flex justify-between">
              <span className="text-product-name">Subtotal de produtos</span>
              <span className="text-product-name">R$ 161,00</span>
            </div>
            <div className="mt-3 flex justify-between">
              <span className="text-product-name">Entrega</span>
              <span className="text-product-name">R$ 40,00</span>
            </div>

            <span className="mt-6 h-px bg-shape-2"></span>

            <div className="mt-3 flex justify-between">
              <span className="font-semibold text-product-name">Total</span>
              <span className="font-semibold text-product-name">R$ 201,00</span>
            </div>

            <button className="bg-green text-button-text font-medium py-2 rounded-sm mt-10 cursor-pointer hover:bg-green-hover active:bg-green-active">
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
    </div>
  );
}
