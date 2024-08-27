import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Navbar from "@/components/NavBar/NavBar";
import { StructuredData } from "@/components/StructuredData/StructuredData";
import { FloatingCTA } from "@/components/FloatingCTA/FloatingCTA";
 

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sodmia",
  description: "Soluciones de Optimización y Desarrollo MIA",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        <StructuredData />
      </head>
      <body className={cn(roboto.className)}>
        <Navbar />
        {children}
        <FloatingCTA/>
      </body>
    </html>
  );
}