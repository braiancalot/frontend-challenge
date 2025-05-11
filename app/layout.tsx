import type { Metadata } from "next";
import { Saira } from "next/font/google";

import "./globals.css";

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
      <body className="bg-shape-2">{children}</body>
    </html>
  );
}
