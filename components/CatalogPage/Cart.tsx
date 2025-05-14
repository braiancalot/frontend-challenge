import Image from "next/image";
import ShoppingBag from "public/shopping-bag.svg";

export function Cart() {
  // CartHook

  return (
    <button className="cursor-pointer hover:bg-shape-5 p-2 rounded-full active:bg-shape-3 relative">
      <Image src={ShoppingBag} alt="ShoppingBag" />

      <span className="absolute right-0 bottom-0.5 w-[17] h-[17] flex items-center justify-center bg-delete font-medium text-[10px] text-shape-1 rounded-full">
        2
      </span>
    </button>
  );
}
