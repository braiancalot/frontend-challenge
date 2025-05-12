import Image from "next/image";
import ChevromDown from "public/chevrom-down.svg";

export function OrderSelect() {
  return (
    <div className="relative">
      <select className="appearance-none cursor-pointer text-text-body text-sm pr-6 focus:outline-none">
        <option>Organizar por</option>
        <option>Novidades</option>
        <option>Preço: Maior - menor</option>
        <option>Preço: Menor - maior</option>
        <option>Mais vendidos</option>
      </select>

      <div className="absolute pointer-events-none inset-y-0 right-2 flex items-center">
        <Image src={ChevromDown} alt="ChevromDown" />
      </div>
    </div>
  );
}
