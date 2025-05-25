import type { Metadata } from "next";
import { Saira } from "next/font/google";

import "../styles/globals.css";
import { Header } from "@/components/layout/Header/Header";
import { CartProvider } from "src/hooks/useCart";

const saira = Saira({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Capputeeno",
  description:
    "E-commerce de canecas e camisetas personalizadas. Encontre o presente ideal com estampas exclusivas e criativas.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={saira.className}>
      <body className="max-h-dvh flex flex-col">
        <CartProvider>
          <Header />
          <main className="flex-1 overflow-auto">{children}</main>
        </CartProvider>
      </body>
    </html>
  );
}
