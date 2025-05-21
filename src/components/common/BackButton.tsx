"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";
import Back from "public/back.svg";

export function BackButton() {
  const router = useRouter();

  function handleClick() {
    router.back();
  }

  return (
    <button
      onClick={handleClick}
      className="font-medium text-text cursor-pointer flex justify-center items-center gap-2"
    >
      <Image src={Back} alt="Back" />
      <span>Voltar</span>
    </button>
  );
}
