import type { Metadata } from "next";
import { Inter, Zen_Dots } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const zenDots = Zen_Dots({
  variable: "--font-stretch-pro",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Daria Dascal — Artist Portfolio",
  description: "Visual artist and photographer exploring light, form, and emotion.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${zenDots.variable} antialiased font-sans`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
