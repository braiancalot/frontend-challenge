import type { Metadata } from "next";
import { Saira } from "next/font/google";
import Header from "./ui/header";

const saira = Saira({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "capputeeno",
  description: "E-commerce para venda de canecas e camisetas",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={saira.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
