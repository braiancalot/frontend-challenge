import { Saira_Stencil_One } from "next/font/google";

import { Search } from "@/components/CatalogPage/Search";
import { Cart } from "@/components/CatalogPage/Cart";
import { CategoryFilter } from "@/components/CatalogPage/CategoryFilter";
import { OrderSelect } from "@/components/CatalogPage/OrderSelect";
import { Pagination } from "@/components/CatalogPage/Pagination";
import { Product } from "@/components/CatalogPage/Product";

const sairaStencilOne = Saira_Stencil_One({
  subsets: ["latin"],
  weight: "400",
});

export default function CatalogPage() {
  return (
    <>
      <header className="bg-shape-1">
        <div className="max-w-[1120] h-[80] m-auto flex justify-between items-center">
          <h1
            className={`${sairaStencilOne.className} text-[40px] text-header`}
          >
            capputeeno
          </h1>

          <div className="flex gap-6 items-center">
            <Search />
            <Cart />
          </div>
        </div>
      </header>

      <main>
        <div className="max-w-[1120] m-auto mt-8 flex justify-between items-center">
          <CategoryFilter />
          <OrderSelect />
        </div>

        <div className="max-w-[1120] m-auto mt-4 flex justify-end">
          <Pagination />
        </div>

        <div className="max-w-[1120] m-auto mt-8 flex gap-8 flex-wrap">
          <Product />
          <Product />
          <Product />
          <Product />

          <Product />
          <Product />
          <Product />
          <Product />

          <Product />
          <Product />
          <Product />
          <Product />
        </div>

        <div className="max-w-[1120] m-auto mt-[74] mb-[60] flex justify-end">
          <Pagination />
        </div>
      </main>
    </>
  );
}
