import type { Metadata } from "next";
import { Inter, Nunito_Sans, Zilla_Slab } from 'next/font/google'
import "./globals.css";
import Header from './components/header';

const inter = Inter({
  variable: '--font-inter',
  weight: '400'
})

const nunitoSans = Nunito_Sans({
  variable: '--font-nunito-sans',
  weight: '500'
})

const zillaSlab = Zilla_Slab({
  variable: '--font-zilla-slab',
  weight: ['500','700']
})

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
      <body className={`${nunitoSans.variable} ${inter.variable} ${zillaSlab.variable}`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
