import React from "react";
import type { Metadata } from "next";
import { Inter, Righteous, DM_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatIcon from "@/components/FloatIcon";
import { createClient } from "@/prismicio";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const righteous = Righteous({ weight: "400", subsets: ["latin"], variable: "--font-righteous" });
const dmSans = DM_Sans({ subsets: ["latin"], weight: ["400", "500", "700"], variable: "--font-dm" });

export const metadata: Metadata = {
  title: "Tecno System",
  description: "Empresa Júnior de TI",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

const client = createClient();
  const floatwpp: any = await client.getSingle("floatwpp" as any).catch(() => null);
  const whatsappArray = floatwpp?.data?.whatsapp || [];

  return (
    <html lang="pt-BR">
      <body className={`${inter.variable} ${righteous.variable} ${dmSans.variable} font-sans`}>
        <Header />
        <main>{children}</main>
        <Footer />
          {whatsappArray.length > 0 && <FloatIcon whatsappArray={whatsappArray} />}
      </body>
    </html>
  );
}