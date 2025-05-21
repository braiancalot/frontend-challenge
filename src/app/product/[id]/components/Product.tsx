import Image from "next/image";
import { BackButton } from "@/components/common/BackButton";

import { Product as ProductType } from "src/types/common";
import { formatPrice } from "src/utils/commom";

import ShoppingBagWhite from "public/shopping-bag-white.svg";

export function Product({ product }: { product: ProductType }) {
  const category = product.category === "mugs" ? "Caneca" : "Camiseta";

  return (
    <div className="max-w-[1120px] m-auto px-2">
      <div className="mt-3 lg:mt-[25px]">
        <BackButton />
      </div>
      <div className="flex flex-col lg:grid lg:grid-cols-2 lg:gap-8 mt-3 lg:mt-[22px] items-center lg:items-stretch">
        <div className="w-full">
          <Image
            src={product.image_url}
            alt={product.name}
            width={640}
            height={580}
            className="w-full lg:w-[640px] lg:h-[580px] object-cover"
          />
        </div>
        <div className="w-full flex flex-col gap-2 lg:justify-between mb-4">
          <div>
            <span className="text-product-name hidden lg:block">
              {category}
            </span>

            <h1 className="text-product-name text-[32px] font-light mt-2 lg:mt-3">
              {product.name}
            </h1>

            <span className="block text-product-name text-[20px] font-semibold">
              {formatPrice(product.price_in_cents)}
            </span>

            <span className="block text-product-name text-xs mt-2 lg:mt-6 ">
              *Frete de R$40,00 para todo o Brasil. Grátis para compras acima de
              R$900,00.
            </span>

            <section className="mt-4 lg:mt-[58px]">
              <span className="font-medium text-text-body">DESCRIÇÃO</span>

              <p className="text-sm text-product-name mt-2">
                {product.description}
              </p>
            </section>
          </div>

          <button className="bg-brand-blue font-medium text-add-cart-button py-2.5 px-4 rounded-sm cursor-pointer mt-8 self-center flex justify-center items-center gap-3 hover:bg-brand-blue-hover active:bg-brand-blue-active">
            <Image src={ShoppingBagWhite} alt="ShoppingBag" />
            ADICIONAR AO CARRINHO
          </button>
        </div>
      </div>
    </div>
  );
}
