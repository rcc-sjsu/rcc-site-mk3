import type { Metadata } from "next";
import { Inter, Nunito_Sans, Zilla_Slab } from "next/font/google";
import "./globals.css";
import Header from "./components/header";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: "400",
});

const nunitoSans = Nunito_Sans({
  subsets: ["latin"],
  variable: "--font-nunito-sans",
  weight: "500",
});

const zillaSlab = Zilla_Slab({
  subsets: ["latin"],
  variable: "--font-zilla-slab",
  weight: "500",
});

export const metadata: Metadata = {
  title: "RCC Website",
  description: "Member Portal for SJSU's Responsible Computing Club",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${nunitoSans.variable} ${inter.variable} ${zillaSlab.variable}`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
