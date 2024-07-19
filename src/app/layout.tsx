import { ptBR } from "@clerk/localizations";
import { ClerkProvider } from "@clerk/nextjs";
import clsx from "clsx";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Footer from "./components/Footer";
import Hydrate from "./components/Hydrate";
import Navbar from "./components/Navbar";
import { GlobalContextProvider } from "./Context/products";
import "./globals.css";
import BackHome from "./components/BackHome";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Rações e Cia",
  description: "Rações e Cia Application",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider localization={ptBR}>
      <html lang="pt">
        <body className={clsx(inter.className, "bg-slate-200")}>
          <Hydrate>
            <Navbar />
            <BackHome />
            <main className="h-screen pt-32">
              <GlobalContextProvider>
                {children}
              </GlobalContextProvider>
            </main>
            <Footer />
          </Hydrate>
        </body>
      </html>
    </ClerkProvider>
  );
}
