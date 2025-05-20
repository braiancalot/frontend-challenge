export interface Product {
  id: string;
  name: string;
  image_url: string;
  price_in_cents: number;
  category: "mugs" | "t-shirts";
  created_at: Date;
  sales: number;
}
