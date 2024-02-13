import Link from "next/link";

export default function Home() {
  return (
    <>
      <main>
        <h2>Catálogo</h2>
        <div>
          <Link href={"/product"}>Página do produto</Link>
        </div>
        <div>
          <Link href={"/cart"}>Página do carrinho</Link>
        </div>
      </main>
    </>
  );
}
