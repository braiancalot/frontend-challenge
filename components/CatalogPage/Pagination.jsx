import Image from "next/image";
import ChevromLeft from "public/chevrom-left.svg";
import ChevromRight from "public/chevrom-right.svg";

export function Pagination() {
  return (
    <div className="flex gap-2">
      <div className="flex gap-0.5">
        <button className="w-[32] h-[32] cursor-pointer text-orange-low font-semibold border border-orange-low rounded-lg flex justify-center items-center">
          1
        </button>

        {[2, 3, 4, 5].map((page) => (
          <button
            key={page}
            className="w-[32] h-[32] cursor-pointer bg-shape-3 rounded-lg text-text-body flex justify-center items-center hover:border hover:border-orange-low"
          >
            {page}
          </button>
        ))}
      </div>

      <div className="flex gap-0.5">
        <button className="w-[32] h-[32] cursor-pointer bg-shape-3 rounded-lg text-text-body flex justify-center items-center hover:border hover:border-orange-low">
          <Image src={ChevromLeft} alt="ChevromLeft" />
        </button>
        <button className="w-[32] h-[32] cursor-pointer bg-shape-3 rounded-lg text-text-body flex justify-center items-center hover:border hover:border-orange-low">
          <Image src={ChevromRight} alt="ChevromRight" />
        </button>
      </div>
    </div>
  );
}
