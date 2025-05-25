"use client";

import { createContext, ReactNode, useContext, useState } from "react";
import { CartProduct } from "src/types/cart";
import { Product } from "src/types/common";

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: CartProviderProps) {
  const [cartProducts, setCartProducts] = useState<CartProduct[]>([]);
  const totalCartProducts = cartProducts.reduce(
    (total, currentProduct) => total + currentProduct.quantity,
    0,
  );

  function addToCart(product: Product) {
    setCartProducts((prevProducts) => {
      const existingProduct = prevProducts.find(
        (item) => item.id === product.id,
      );

      if (existingProduct) {
        return prevProducts.map((item) => {
          if (item.id === existingProduct.id) {
            return { ...item, quantity: item.quantity + 1 };
          }
          return item;
        });
      }

      return [...prevProducts, { ...product, quantity: 1 }];
    });
  }

  function quantityInCart(id: string) {
    const foundProduct = cartProducts.find((product) => product.id === id);
    return foundProduct?.quantity || 0;
  }

  function updateQuantity(id: string, newQuantity: number) {
    setCartProducts((prevProducts) =>
      prevProducts.map((product) => {
        if (product.id === id) {
          return { ...product, quantity: newQuantity };
        }
        return product;
      }),
    );
  }

  function removeFromCart(id: string) {
    setCartProducts((prevProducts) =>
      prevProducts.filter((product) => product.id != id),
    );
  }

  function clearCart() {
    setCartProducts([]);
  }

  return (
    <CartContext.Provider
      value={{
        cartProducts,
        totalCartProducts,
        addToCart,
        quantityInCart,
        updateQuantity,
        removeFromCart,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }

  return context;
}

interface CartContextType {
  cartProducts: CartProduct[];
  totalCartProducts: number;
  addToCart: (product: Product) => void;
  quantityInCart: (id: string) => number;
  updateQuantity: (id: string, newQuantity: number) => void;
  removeFromCart: (id: string) => void;
  clearCart: () => void;
}

interface CartProviderProps {
  children: ReactNode;
}
