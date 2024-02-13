import Link from "next/link";

export default function Page() {
  return (
    <main>
      <h2>Página do Carrinho</h2>
      <div>
        <Link href={"/product"}>Página do produto</Link>
      </div>
      <div>
        <Link href={"/"}>Página do catálogo</Link>
      </div>
    </main>
  );
}
