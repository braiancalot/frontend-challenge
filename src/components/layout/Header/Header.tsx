import { Saira_Stencil_One } from "next/font/google";

import { Cart } from "./Cart";
import { Search } from "./Search";

const sairaStencilOne = Saira_Stencil_One({
  subsets: ["latin"],
  weight: "400",
});

export function Header() {
  return (
    <header className="bg-shape-1">
      <div className="max-w-[1120px] h-[80px] m-auto flex justify-between items-center">
        <h1 className={`${sairaStencilOne.className} text-[40px] text-header`}>
          capputeeno
        </h1>

        <div className="flex gap-6 items-center">
          <Search />
          <Cart />
        </div>
      </div>
    </header>
  );
}
