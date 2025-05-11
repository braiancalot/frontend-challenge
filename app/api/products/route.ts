import db from "infra/db";

export async function GET() {
  return Response.json({ products: db.products });
}
