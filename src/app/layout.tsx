"use client";

import { usePathname } from "next/navigation";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";
import ToastProvider from "@/components/ui/ToastProvider";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isHome = pathname === "/";

  return (
    <html lang="en" className={`${fraunces.variable} ${inter.variable}`}>
      <body className="flex min-h-screen flex-col">
        <ToastProvider>
          <SmoothScroll>
            {!isHome && <Nav />}
            <main className="flex-1">{children}</main>
            <Footer />
          </SmoothScroll>
        </ToastProvider>
      </body>
    </html>
  );
}