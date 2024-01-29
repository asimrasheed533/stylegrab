"use client";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Inter } from "next/font/google";
import { usePathname } from "next/navigation";
import "../style/global.scss";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  const pathName = usePathname();
  return (
    <html lang="en">
      <body className={inter.className}>
        {pathName === "/login" || pathName === "/register" ? null : <Header />}
        {children}
        {pathName === "/login" || pathName === "/register" ? null : <Footer />}
      </body>
    </html>
  );
}
