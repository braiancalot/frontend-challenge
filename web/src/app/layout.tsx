import type { Metadata } from "next";

import Providers from "./Providers";
import GlobalStyles from "./styles/global-styles";

import Header from "./components/Header";

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
      <body>
        <Providers>
          <GlobalStyles />
          <Header />
          {children}
        </Providers>
      </body>
    </html>
  );
}
