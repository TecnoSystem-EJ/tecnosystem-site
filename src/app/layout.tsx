import React from "react";
// Styles
import "./globals.css";
import { Inter, Righteous } from "next/font/google";
import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import { createClient } from "@/prismicio";
import FloatIcon from "@/components/FloatIcon";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const righteous = Righteous({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-righteous",
  weight: "400",
});

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const client = createClient();
  const navBar = await client.getSingle("navbar").catch(() => null);


  return (
    <html
      lang="pt-BR"
      className={`${inter.variable} ${righteous.variable} text-black m-0 p-0 bg-gray-alt`}
    >
      <body>
        <NavBar navBar={navBar} />
        <FloatIcon/>
        <div className="mx-auto container px-4 uppercase w-full">
          {children}
        </div>
        <Footer/>
      </body>
    </html>
  );
}
