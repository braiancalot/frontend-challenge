import { Saira_Stencil_One } from "next/font/google";

import { CartButton } from "./CartButton";
import { Search } from "./Search";
import Link from "next/link";
import db from "src/infra/db";

const sairaStencilOne = Saira_Stencil_One({
  subsets: ["latin"],
  weight: "400",
});

export function Header() {
  const products = db.getProducts();

  return (
    <header className="bg-shape-1 px-2">
      <div className="max-w-[1120px] h-12 sm:h-[80px] m-auto flex justify-between items-center">
        <Link href="/">
          <h1
            className={`${sairaStencilOne.className} text-2xl sm:text-[40px] text-header`}
          >
            capputeeno
          </h1>
        </Link>

        <div className="flex gap-2 sm:gap-6 items-center">
          <Search products={products} />
          <CartButton />
        </div>
      </div>
    </header>
  );
}
