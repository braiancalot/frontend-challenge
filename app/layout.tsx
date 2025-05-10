import type { Metadata } from "next";

import "./globals.css";

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
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
