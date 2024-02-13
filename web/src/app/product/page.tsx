import Link from "next/link";

export default function Page() {
  return (
    <main>
      <h2>Página do Produto</h2>
      <div>
        <Link href={"/"}>Página do Catálogo</Link>
      </div>
      <div>
        <Link href={"/cart"}>Página do carrinho</Link>
      </div>
    </main>
  );
}
