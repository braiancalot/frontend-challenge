export interface Product {
  name: string;
  description: string;
  image_url: string;
  category: "mugs" | "t-shirts";
  id: string;
  price_in_cents: number;
  sales: number;
  created_at: Date;
}
