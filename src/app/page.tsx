import { CategoryFilter } from "./components/CategoryFilter";
import { OrderSelect } from "./components/OrderSelect";
import { Pagination } from "./components/Pagination";
import { Product } from "./components/Product";

export default function CatalogPage() {
  return (
    <>
      <div className="max-w-[1120] m-auto mt-8 flex justify-between items-center">
        <CategoryFilter />
        <OrderSelect />
      </div>

      <div className="max-w-[1120] m-auto mt-4 flex justify-end">
        <Pagination />
      </div>

      <div className="max-w-[1120] m-auto mt-8 flex gap-8 flex-wrap">
        <Product
          name="Caneca The Grounds"
          price_in_cents={5864}
          image_url="https://storage.googleapis.com/xesque-dev/challenge-images/caneca-05.jpg"
        />
      </div>

      <div className="max-w-[1120] m-auto mt-[74] mb-[60] flex justify-end">
        <Pagination />
      </div>
    </>
  );
}
