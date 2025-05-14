export function CategoryFilter() {
  return (
    <div className="flex gap-10">
      <span className="text-text-body cursor-pointer hover:border-b-4 hover:-mb-1 border-orange-low hover:font-semibold hover:tracking-[0.075px] hover:text-product-name">
        TODOS OS PRODUTOS
      </span>

      <span className="text-text-body cursor-pointer">CAMISETAS</span>
      <span className="text-text-body cursor-pointer">CANECAS</span>
    </div>
  );
}
