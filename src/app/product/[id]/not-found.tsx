import Link from "next/link";

export default async function NotFound() {
  return (
    <div>
      <h2>Produto não encontrado</h2>
      <p>
        Ver <Link href="/">todos os produtos</Link>
      </p>
    </div>
  );
}
