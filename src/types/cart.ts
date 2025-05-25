import { Product } from "./common";

export interface CartProduct extends Product {
  quantity: number;
}
