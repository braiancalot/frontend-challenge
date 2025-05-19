import db from "src/infra/db";

export async function GET() {
  return Response.json({ products: db.products });
}
