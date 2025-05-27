import { z } from "zod";
import { Product } from "./common";

export interface CartProduct extends Product {
  quantity: number;
}

const CartProductSchema = z.object({
  id: z.string().uuid(),
  name: z.string(),
  description: z.string(),
  image_url: z.string(),
  category: z.enum(["mugs", "t-shirts"]),
  price_in_cents: z.number(),
  sales: z.number(),
  created_at: z.string().transform((str) => new Date(str)),
  quantity: z.number(),
});

export const CartSchema = z.array(CartProductSchema);
