"use client";

import { useState } from "react";

import Image from "next/image";
import ChevromLeft from "public/chevrom-left.svg";
import ChevromRight from "public/chevrom-right.svg";

const itemsPerPage = 10;
const totalItems = 25;
const totalPages = Math.ceil(totalItems / itemsPerPage);

export function Pagination() {
  const [page, setPage] = useState(1);

  // const startIndex = (page - 1) * itemsPerPage;
  // const endIndex = page * itemsPerPage - 1;

  const hasNextPage = page < totalPages;
  const hasPreviuosPage = page > 1;

  function handleUpdatePage(newPage: number) {
    setPage(newPage);
  }

  function handleNextPage() {
    setPage((prev) => prev + 1);
  }

  function handlePreviousPage() {
    setPage((prev) => prev - 1);
  }

  return (
    <div className="flex gap-2">
      <div className="flex gap-0.5">
        {Array.from({ length: totalPages }).map((_, index) => {
          const isActive = index + 1 === page;

          return (
            <button
              key={index}
              onClick={() => handleUpdatePage(index + 1)}
              className={`w-[32px] h-[32px] cursor-pointer rounded-lg flex justify-center items-center active:bg-shape-4
                ${
                  isActive
                    ? "text-orange-low border border-orange-low font-semibold"
                    : "text-text-body hover:border hover:border-orange-low bg-shape-3"
                }`}
            >
              {index + 1}
            </button>
          );
        })}
      </div>

      <div className="flex gap-0.5">
        <button
          disabled={!hasPreviuosPage}
          onClick={handlePreviousPage}
          className={`w-[32px] h-[32px] cursor-pointer bg-shape-3 rounded-lg text-text-body flex justify-center items-center hover:border hover:border-orange-low active:bg-shape-4
            disabled:border-none disabled:cursor-default disabled:bg-shape-4`}
        >
          <Image src={ChevromLeft} alt="ChevromLeft" />
        </button>

        <button
          disabled={!hasNextPage}
          onClick={handleNextPage}
          className={`w-[32px] h-[32px] cursor-pointer bg-shape-3 rounded-lg text-text-body flex justify-center items-center hover:border hover:border-orange-low active:bg-shape-4 
            disabled:border-none disabled:cursor-default disabled:bg-shape-4`}
        >
          <Image src={ChevromRight} alt="ChevromRight" />
        </button>
      </div>
    </div>
  );
}
